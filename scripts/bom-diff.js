const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

const retrocycle = require('../utils/retrocycle');

function loadBOM(filePath) {
  try {
    const compressedInput = fs.readFileSync(filePath.toString());
    const input = zlib.gunzipSync(compressedInput);

    return retrocycle(JSON.parse(input.toString()));
  } catch (e) {
    console.error(`Couln\'t open file "${filePath}": \n  ${e.message}`);
    process.exit(1);
  }
}

function getTree(root) {
  const output = [];

  const references = new Set();
  const stack = [[root, '$']];

  let state;

  while ((state = stack.pop())) {
    const [node, nodePath] = state;

    output.push(nodePath);

    if (typeof node === 'object' && node !== null) {
      if (references.has(node)) {
        continue;
      }

      references.add(node);

      Object.keys(node).forEach(key => {
        stack.unshift([node[key], nodePath + '[' + JSON.stringify(key) + ']']);
      });
    }
  }

  output.sort();

  return output;
}

function getTreeDiff(tree1, tree2) {
  const treeDiff = [];
  const tree2Set = new Set();

  // Use a set to improve the performance
  tree2.forEach(nodePath => tree2Set.add(nodePath));

  tree1.forEach(nodePath => {
    // Keep only the parent nodes
    if (treeDiff.length) {
      if (nodePath.startsWith(treeDiff[treeDiff.length - 1])) {
        return;
      }
    }

    if (!tree2Set.has(nodePath)) {
      treeDiff.push(nodePath);
    }
  });

  return treeDiff;
}

const bom1Path = path.normalize(process.argv[2]);
const bom2Path = path.normalize(process.argv[3]);

const bom1 = loadBOM(bom1Path);
const bom2 = loadBOM(bom2Path);

const tree1 = getTree(bom1);
const tree2 = getTree(bom2);

// Print the output
const output = getTreeDiff(tree1, tree2);
output.forEach(nodePath => console.log(nodePath));

process.exit(0);

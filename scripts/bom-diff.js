const fs = require('fs');
const zlib = require('zlib');

const retrocycle = require('../utils/retrocycle');

function loadBOM(filePath) {
  const compressedInput = fs.readFileSync(filePath.toString());
  const input = zlib.gunzipSync(compressedInput);

  return retrocycle(JSON.parse(input.toString()));
}

function getTree(root) {
  const output = [];

  const references = new Set();
  const stack = [[root, '$']];

  let state;

  while ((state = stack.pop())) {
    const [node, path] = state;

    output.push(path);

    if (typeof node === 'object' && node !== null) {
      if (references.has(node)) {
        continue;
      }

      references.add(node);

      Object.keys(node).forEach(key => {
        stack.unshift([node[key], path + '[' + JSON.stringify(key) + ']']);
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
  tree2.forEach(path => tree2Set.add(path));

  tree1.forEach(path => {
    // Keep only the parent nodes
    if (treeDiff.length) {
      if (path.startsWith(treeDiff[treeDiff.length - 1])) {
        return;
      }
    }

    if (!tree2Set.has(path)) {
      treeDiff.push(path);
    }
  });

  return treeDiff;
}

const bom1 = loadBOM(process.argv[2]);
const bom2 = loadBOM(process.argv[3]);

const tree1 = getTree(bom1);
const tree2 = getTree(bom2);

// Print the output
const output = getTreeDiff(tree1, tree2);
output.forEach(path => console.log(path));

process.exit(0);

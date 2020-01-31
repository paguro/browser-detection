#!/usr/bin/env bash
set -eo pipefail

OUTPUT_DIR='./dist'

cp package.json "${OUTPUT_DIR}"
cd "${OUTPUT_DIR}"
yarn publish --access public

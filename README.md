# Knowit Developer Summit

## Getting started

Development requirements: node.js

### Get code and install dependencies

$ git clone git@github.com:knowit/program.kds.knowit.no.git \
$ cd program.kds.knowit.no \
$ npm install

### Running

To run dev: `npm run dev`
open `localhost:3000`

### Building

`npm run build` \
`npm run export`

### Deploy

`/out` is part of git history.
run: `npm install && npm run deploy`
push to gh-pages branch using git subtree: `git subtree push --prefix out origin gh-pages`

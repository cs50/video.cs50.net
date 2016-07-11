# Player50

A web app that intends to enhance the watching experience of the CS50 video archive. Predominantly revolves around the YouTube API, with some additional functionality such as supported chaptering and video search.

## Installation

The app takes advantage of nodejs, npm and npm scripts to build/run. To be able to perform these operations you are going to need the latest version of node installed on your machine. You can accomplish this in the following ways:

- Download and run the pre-built installer from their website
```
https://nodejs.org/en/download/
```
- OR Download and install from the CLI using a package manager
```
https://nodejs.org/en/download/package-manager/
```

If you already have node installed then please make sure you are using at least the latest stable version `^4.x.x` or more ideally `^6.x.x`. You can check which version you have installed by running the command `node -v`.

Once you have the latest version of node installed you will need to clone this repo to your machine:
```
git clone git@github.com:cs50/player50.git
```

After cloning you need to navigate to the project folder and run the following command:
```
npm i && npm run build
```


## Usage

If the installation process outlined above ran with no errors, then you are ready to start serving or developing the app! The following `npm script` commands will enable you get started:

- To generate a static build, that is, to compile the source code into distributed code.
```
npm run build
```
- To serve the app, that is, to make available the latest build on localhost.
```
npm run serve
```
- To develop the app, that is, to rebuild project and live reload localhost on source code change.
```
npm run dev
```

It is worth noting the languages and technologies used throughout the project:

- `JS` strictly in ES6, bundled using `browserify` and transpiled using `babel`.
- `HTML` abiding the latest `HTML5` specification and encouraged use of custom tags.
- `CSS` using the `SCSS` syntax that gets compiled and enhanced by `autoprefixer`.

Linting is enforced using `eslint` which inherits the `airbnb-base` config.


## Contributing
1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request

## History
TODO: Write history
## Credits
TODO: Write credits
## License
TODO: Write license

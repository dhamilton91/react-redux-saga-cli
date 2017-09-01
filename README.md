# generator-react-redux-saga-generator

This Yeoman generator creates and uses the following folder structure:

```
- app/
	- components/
		- index.js
		- styles.css (or stylesheet.js - react native)
	- containers/
		- actions.js
		- constants.js
		- index.js
		- reducer.js
		- sagas.js
	- middleware/
		- ...
		- index.js
	- configureStore.js
	- rootReducer.js
	- rootSaga.js
```
	

## Installation

First, install [Yeoman](http://yeoman.io) and generator-react-redux-saga-generator using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
npm install -g dhamilton91/react-redux-saga-cli
```


## Commands

```
yo react-redux-saga-cli:actions
yo react-redux-saga-cli:bootstrap
yo react-redux-saga-cli:component
yo react-redux-saga-cli:component-react-native
yo react-redux-saga-cli:constants
yo react-redux-saga-cli:container
yo react-redux-saga-cli:middleware
yo react-redux-saga-cli:reducer
yo react-redux-saga-cli:store
yo react-redux-saga-cli:sagas
yo react-redux-saga-cli:stylesheet
```

For simplicity, I recommend adding the following scripts or similar to your package.json:

```
"scripts": {
	...
	"yo-component": "yo react-redux-saga-cli:component", //"yo react-redux-saga-cli:-component-react-native" for React-Native
	"yo-container": "yo react-redux-saga-cli:container",
	"yo-middleware": "yo react-redux-saga-cli:middleware",
	"yo-store": "yo react-redux-saga-cli:store"
}
```


## License

MIT © [RakanNimer](https://www.github.com/RakanNimer)



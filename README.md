[![Netlify Status](https://api.netlify.com/api/v1/badges/e1d05e3e-a62d-4ba1-8c12-65dd937bb09b/deploy-status)](https://app.netlify.com/sites/netlify-lamda-function/deploys)

# Netlify Lambda Starter demo 🚀

There's a lambda generating random emoji 👍 at [./src/lambda/emoji.js](./src/lambda/emoji.js) and random dog photos [./src/lambda/unsplash.js](./src/lambda/unsplash.js)

## Development setup

You should run `npm` before starting.

The following scripts are available:

* `npm start`: start the Lambda(s) and serving the static directory using [Netlify Dev](https://www.netlify.com/products/dev/) . **Important:** before `start`, `npm build:lambda` runs.
* `npm build:lambda`: run `netlify-lambda` build

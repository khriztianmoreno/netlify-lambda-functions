[![Netlify Status](https://api.netlify.com/api/v1/badges/e1d05e3e-a62d-4ba1-8c12-65dd937bb09b/deploy-status)](https://app.netlify.com/sites/netlify-lamda-function/deploys)

# Netlify Lambda Starter demo 🚀

Hi there! This is a playground repo to test out [Netlify’s Lambda Functions](https://www.netlify.com/docs/functions). You can see a live
demo of the examples at https://netlify-lamda-function.netlify.com.

There are a lambda generating random emoji 👍 at [./src/lambda/emoji.js](./src/lambda/emoji.js) and random dog photos [./src/lambda/unsplash.js](./src/lambda/unsplash.js)

If you want your own copy to play around with, the quickest way to get it up
and running is clicking the Deploy to Netlify button below. It will clone
this repository into your own account, and deploy the site to Netlify.

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/khriztianmoreno/netlify-lambda-functions)

## Table of Contents

- [Setup](#setup)
- [Running the examples](#running-the-examples)

## Setup

To run the examples locally, here’s what you’ll need:

**System Requirements:**

* [git](https://git-scm.com)
* [NodeJS](https://nodejs.org) 8 or greater
* [npm](https://www.npmjs.com/)
* [Unsplash key](https://unsplash.com/developers)

`cd` into your local copy of the repository and run `npm install`

```bash
$ cd netlify-functions-example
$ npm install
```

## Running the examples

```
npm start
```

This will start the client server on http://localhost:8080, and the netlify-lambda server on http://localhost:9000.

[netlify-lambda](https://github.com/netlify/netlify-lambda) isn’t required to deploy Lambda functions to Netlify, but it offers some handy features out of the box that make it quicker to get started, like the local dev server and nice defaults for transpiling and bundling functions in production.

The client server is configured to proxy `/.netlify` requests to the Lambda server (see [webpack.client.js](webpack.client.js)). This is the same behavior the site has when it’s deployed to Netlify.

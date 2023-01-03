# nodejs-boilerplate-with-docker
Nodejs boilerplate with docker


## ⛓️ Installation

follow these steps:

Install the dependencies:

```bash
yarn install
```

Set the environment variables:

```bash
touch .env
# open .env and modify the environment variables (if needed)
```

## 📑 Table of Contents

- [Features](#features)
- [Commands](#commands)
- [Environment Variables](#environment-variables)
- [Project Structure](#project-structure)
- [Error Handling](#error-handling)
- [Validation](#validation)
- [Authentication](#authentication)
- [Authorization](#authorization)
- [Documentation](#documentation)
- [Linting](#linting)

## 🪶 Features

- **NoSQL database**: [MongoDB](https://www.mongodb.com) object data modeling using [Mongoose](https://mongoosejs.com)
- **Validation**: request data validation using [Express-Validator](https://express-validator.github.io/docs/)
- **Testing**: unit and integration tests using [Jest](https://jestjs.io)
- **Error handling**: centralized error handling mechanism
- **Dependency management**: with [Yarn](https://yarnpkg.com)
- **Environment variables**: using [dotenv](https://github.com/motdotla/dotenv) and [cross-env](https://github.com/kentcdodds/cross-env#readme)
- **CORS**: Cross-Origin Resource-Sharing enabled using [cors](https://github.com/expressjs/cors)
- **Git hooks**: with [husky](https://github.com/typicode/husky)
- **Linting**: with [ESLint](https://eslint.org) and [Prettier](https://prettier.io)
- **Docker**: containerization technology

## 🪟 Commands

Running locally:

```bash
yarn run dev
```

Running in production:

```bash
yarn start
```

Running with docker:

## Build image using command:
```
   docker build -t image-name .
    
```

## Run container with build image:
```
   docker run -p 8081:8081 --name container-name image-name
    
```

## If you want to persist data you can map volumes

Linting:

```bash
# run ESLint
yarn lint

```

## 👽 Environment Variables

The environment variables can be found and modified in the `.env` file. They come with these default values:

```bash
    
     ACCESS_TOKEN_SECRET*
     REFRESH_TOKEN_SECRET*
     DATABASE_URL*
```

## 🚧 Project Structure

```
 \
 |--config\         # configuration related things
 |--controllers\    # Route controllers (controller layer)
 |--middlewares\    # Custom express middlewares
 |--models\         # Mongoose models (data layer)
 |--appRoutes\      # Routes
 |--utils\          # Utility classes and functions
 |--app.js          # Express app
 |--index.js        # App entry point
```

### 🅿️ API Endpoints

List of available routes:


**User routes**:\
`POST /user` - create a user\
`GET /user` - get all users\


## ⁉️ Error Handling

The app has a centralized error handling mechanism.

Controllers should try to catch the errors and forward them to the error handling middleware (by calling `next(error)`). For convenience, you can also wrap the controller inside the catchAsync utility wrapper, which forwards the error.

The error handling middleware sends an error response, which has the following format:

```json
{
  "status": 404,
  "message": "Not found"
}
```

## 🪝 Validation

Request data is validated using [Express-Validator](https://express-validator.github.io/docs/).
The validation schemas are defined in the `src/validations` directory and are used in the routes by providing them as parameters to the `validate` middleware.

## 🤸 Authentication

To require authentication for certain routes, you can use the `auth` middleware.

```javascript
const express = require('express');
const requireAuth = require('../../middlewares/requireAuth');
const { addUser } = require('../../controllers/user');

const router = express.Router();

router.post('/users', requireAuth, addUser);
```

These routes require a valid JWT access token in the Authorization request header using the Bearer schema. If the request does not contain a valid access token, an Unauthorized (401) error is thrown.

** 🉑 Generating Access Tokens**:

An access token can be generated by making a successful call to the register or login (`POST /login`) endpoint. The response of this also contains refresh tokens and access token (explained below).

An access token is valid for 1 day. You can modify this expiration time by changing the `expiresIn` property .

**Refreshing Access Tokens**:

After the access token expires, a new access token can be generated, by making a call to the refresh token endpoint (`POST /refreshTokens`) and sending along a valid refresh token in the request body. This call returns a new access token and a new refresh token.

A refresh token is valid for 30 days. You can modify this expiration time by changing the `expiresIn` property.

## 🦽 Authorization

The `auth` middleware can also be used to require certain rights/permissions to access a route.

```javascript
const express = require('express');
const roleAuth = require('../../middlewares/roleAuth');
const { addUser } = require('../../controllers/user');

const router = express.Router();

router.post('/users', roleAuth(['admin', 'tpa_admin']), addUser);
```

In the example above, an authenticated user can access this route only if that user has the `manageUsers` permission.

The permissions are role-based. You can view the permissions/rights of each role in the `src/config/roles.js` file.

If the user making the request does not have the required permissions to access this route, a Forbidden (403) error is thrown.


## ☑️ Linting

Linting is done using [ESLint](https://eslint.org/) and [Prettier](https://prettier.io).

In this app, ESLint is configured to follow the [Airbnb JavaScript style guide](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base) with some modifications. It also extends [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier) to turn off all rules that are unnecessary or might conflict with Prettier.

To modify the ESLint configuration, update the `.eslintrc.json` file. To modify the Prettier configuration, update the `.prettierrc.json` file.

To prevent a certain file or directory from being linted, add it to `.eslintignore` and `.prettierignore`.

To maintain a consistent coding style across different IDEs, the project contains `.editorconfig`
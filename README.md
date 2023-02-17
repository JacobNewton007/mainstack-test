# mainstack-test

> [[Technologies](#technologies-used) &middot; [Testing Tools](#testing-tools) &middot; [Installations](#installations) &middot; [API Endpoints](#api-endpoints) &middot; [Tests](#tests) &middot; [Author](#author)


## Technologies Used

[node]: (https://nodejs.org)

- [Node.js](node)
- [Mongodb](node)
- [Express.js](https://expressjs.com).
- [ESLint](https://eslint.org/).
- [Mongoode](https://www.npmjs.com/package/mongoose).



## Installations

#### Getting started

- You need to have Node and NPM installed on your computer.
- Installing [Node](node) automatically comes with npm.

#### Clone

- Clone this project to your local machine `https://github.com/JacobNewton007/mainstack-test`

#### Setup

- Installing the project dependencies
  > Run the command below
  ```shell
  $ npm install
  ```
- Start your node server
  > run the command below
  ```shell
  $ npm run dev:mac for mac user
  $ npm run dev:win for window user
  ```
### Develop
- Use `http://localhost:3303/api/v1` as base url for endpoints
### Staging
- Use `https://mainstack-test.onrender.com/api/v1` as base url for endpoints

## API Endpoints

| METHOD | DESCRIPTION                             | ENDPOINTS                 |
| ------ | --------------------------------------- | ------------------------- |
| POST   | Create Product                           | `/products`    |
| GET   | Get a Product                            | `/products/:product_id`      |
| GET    | Get Products                            | `/products`|
| PATCH    | Update Product                              | `/products/:product_id`         |
| DELETE   | Delete product                        | `/products/:product_id`    |



## Author

   Kehinde Jacob

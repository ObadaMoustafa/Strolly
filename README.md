<p align="center">

<img src="https://user-images.githubusercontent.com/55986532/147880982-d828d16b-b795-4e7e-bb12-2fe93dfa9dae.png" />

</p>

![laptop](https://user-images.githubusercontent.com/55986532/150634955-1c8743ea-a456-459f-bee7-baaed697c2cd.png)
![mobile](https://user-images.githubusercontent.com/55986532/150634958-da4926b4-f09b-4b31-89b4-1560cdece697.png)

## Color Palette

![color-palette](https://user-images.githubusercontent.com/55986532/147879490-197e126a-612c-4112-ab02-a4a5a058021e.png)

# Class 33 final project

This is the final project for the HackYourFuture curriculum we did as a class using the MERN stack by following the agile methodology with our team and a group of mentors. A quick guide to what we built:

Strolly is a App created to help parents or caretakers to rent a stroller in the Amsterdam, Denventer, Groningen and Den Haag area.

[Click here for the Demo version](https://strolly-hyf.netlify.app/)

## 1. Setup Locally

First, clone the repo and run these commands _**in main directory**_:

`npm install`

`npm run setup`

The first command will install `cypress` and some small libraries needed for running the rest of the commands. The second will go into the `client` and `server` directories and set those up to be ran.

In the `client` and `server` directory there are two `.env.example` files. Create a copy and rename that to `.env`. Then follow the instructions in those files to fill in the right values.

after filling the right values specially the mongoDB connection string in server side you should run `npm run seed:db` then your database has been seeded with initial data and ready to use.

To run the app in dev mode you can run `npm run dev`
Then the app gonna work in http://localhost:8080/

## 2. Code structure

```
client
├── public
└── src
|   └── components
|   └── hooks
|   └── pages
|   └── util
|   index.jsx
cypress
|   └── fixtures
|   └── integration
server
└── src
    └── __testUtils__
    └── controllers
    └── db
    └── ini_DB
    └── models
    └── routes
    └── util
    index.js
```

### 2.1 Client structure

- `public` || public facing client code
- `__tests__` || any `jest` tests for specific components will be in a `__tests__` folder on the same level
- `__testUtils__` || any code that is only being used in the tests is put in the `__testUtils__` folder to separate that away from the rest of the code
- `components` || all of our shared components that are used over multiple pages
- `hooks` || all of our custom hooks
- `pages` || the page components of our app, any routing will go between these components
- `util` || any utility functions that can be used anywhere on the client side
- `index.jsx` || the start point of the client

### 2.2 Cypress structure

- `fixtures` || any data/files that `cypress` needs can be placed here
- `integration` || all of our tests are in here, separated in folders based on the pages in our app

### 2.3 Server structure

- `__testUtils__` || any code that is only being used in the tests is put in the `__testUtils__` folder to separate that away from the rest of the code
- `controllers` || all of our controller functions that interact with the database
- `db` || all of our configuration for the database
- `ini_DB` || all of our necessary initial data to be ready to seed in database and can be modified any time
- `models` || all of our `mongoose` models will be placed here
- `routes` || code to match up the API with our controllers
- `util` || any utility functions that can be used anywhere on the server side
- `index.js` || the start point of the server

## 3. Stack / external libraries

The base stack of the app is a MERN stack (Mongoose, Express, React, Node). Next to that we make use of the following extras:

### 3.1 Configuration libraries

- `dotenv` || To load the .env variables into the process environment. See [docs](https://www.npmjs.com/package/dotenv)
- `webpack` / `html-webpack-plugin` || To bundle our React app and create a static app to host. See [docs](https://webpack.js.org/)
- `eslint` || To check our code. We have different configurations for frontend and backend. You can check out the configuration in the `.eslintrc.(c)js` files in the respective `client` and `server` folders. See [docs](https://eslint.org/)
- `prettier` || To automatically format our code. See [docs](https://prettier.io/)
- `concurrently` || To run commands in parallel. See [docs](https://github.com/open-cli-tools/concurrently#readme)

For more information on how these work together including the automatic deployment to heroku, have a look at our detailed [DEV](./DEV.md) file.

### 3.2 Client-side libraries

- `@testing-library/*` || We use React Testing Library to write all of our tests. See [docs](https://testing-library.com/docs/react-testing-library/intro/)
- `jest` || To run our tests and coverage. See [docs](https://jestjs.io/)
- `jest-fetch-mock` || To mock out the backend for our testing purposes. See [docs](https://github.com/jefflau/jest-fetch-mock#readme)
- `prop-types` || To type-check our components. See [docs](https://github.com/facebook/prop-types)

### 3.3 Server-side libraries

- `nodemon` || To automatically restart the server when in development mode. See [docs](https://nodemon.io/)
- `jest` || To run our tests and coverage. See [docs](https://jestjs.io/)
- `supertest` || To more easily test our endpoints. See [docs](https://github.com/visionmedia/supertest#readme)
- `mongodb-memory-server` || To mock out our database in our backend tests. See [docs](https://github.com/nodkz/mongodb-memory-server)
- `cors` || To open up our API. See [docs](https://github.com/expressjs/cors#readme)
- `mongoose` || To add schemas to our database. See [docs](https://mongoosejs.com/)

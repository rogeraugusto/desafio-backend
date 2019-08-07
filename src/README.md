<h1 align="center">
CredPago - Backend Challenge
</h1>

<p align="center">In this code challenge, I developed a REST API in Node.js and MongoDB, using Express and Mongoose.</p>

<hr>

## Dependencies

- [Node.js](https://nodejs.org/en/) >= v10.16.1
- [Yarn](https://yarnpkg.com/pt-BR/docs/install)
- [MongoDB](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/) >= v4.0.10

## Getting started

1. Clone this repository<br />
2. Move to the appropriate directory<br />
3. Run `yarn` to install dependencies<br />
4. Run `mongod` to start MongoDB<br />
5. Run `yarn start`

## Testing

 - Import the Insomnia's Workspace requests file called ````Insomnia_Requests.json```` found on this project root folder

## Features

 - MVC Pattern
 - Object schema validation with **Joi**
 - Paginated response with **mongoose-paginate**
 - Some *filters* and *validations* implemented on *Product*, *History* and *Cart* controllers
 - Auth middleware with **JWT authentication** to *users* and *sessions* routes (but commented, not requested on this challenge)

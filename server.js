const express = require('express');
const expressGraphQL = require('express-graphql');

const schema = require('./schema/schema');

const app = express();

// app.use is used to fire up middleware application in express
app.use(
  '/graphql',
  expressGraphQL({
    schema,
    graphiql: true
  })
);

app.listen(4000, () => {
  console.log('listening port 4000');
});

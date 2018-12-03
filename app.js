const express = require('express');
const expressGraphQL = require('express-graphql');
const schema = require('./schema');

const app = express();

app.use("/graphql", expressGraphQL({
    schema,
    graphiql: true
}));

app.listen(5000, () => {
    console.log("http://www.kodevreni.com Ready tarafından örnek amaçlı geliştirilmiştir!");
    console.log("http://localhost:5000/graphql adresinden yazılımı test edebilirsiniz!");
});
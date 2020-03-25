const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('.'));

app.listen(process.env.PORT || port, () => console.log(`Example app listening on port ${port}!`));
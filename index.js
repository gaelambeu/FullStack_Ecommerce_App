const express = require("express");
const routes = require("./src/routes/crmRoutes");


const app = express();
const PORT = 3000
app.use(routes);

app.get('/', (req, res) => {
    res.send("I am Happy")
})



app.listen(PORT, ()=> {
    console.log(`your server is listen on port ${PORT} `);
})
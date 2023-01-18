const express = require("express");
const payment = require("./routes/payment")
const app = express();
const port = process.env.PORT || 3006;

// middlewares
app.use(express.json({ extended: false }));

//route included
app.use("/payment", payment)


app.listen(port, () => console.log(`server started on port ${port}`));
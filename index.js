const express = require("express");
const cors = require("cors");
const path = require("node:path")


const app = express();

app.use(cors({ origin: "https://getmomentum.vercel.app" }));

app.use((req, res, next) => {
  console.log("Request received:", req.method, req.url);
  next();
});

const quoteRoutes = require("./routes/quotes");
app.use("/api/quotes", quoteRoutes);



const PORT = 5001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

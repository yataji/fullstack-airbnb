const express = require("express");
const { server } = require("./config/all.config");
const app = express();
const authRoutes = require("./routes/auth.routes");
const cors = require("cors");
// const usersRoutes = require("./routes/users.routes");
// const productsRoutes = require("./routes/products.routes");
const { mongoose } = require("./config/mongoos.config");

// app.use(cookieParser());
// app.use(express.static("public/images"));
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
// const corsOptions = {
//   origin: "http://localhost:3000/api/auth/register", // Allow requests only from this origin
//   methods: ["GET", "POST"], // Allow only GET and POST requests
//   allowedHeaders: ["Content-Type", "Authorization"], // Allow only specific headers
// };

// app.use(cors(corsOptions));
app.use(cors());

mongoose;

app.use("/api/auth", authRoutes);
// app.use("/api/profile", usersRoutes);
// app.use("/api/products", productsRoutes);

app.listen(server.port, (req, res) => {
  console.log(`App runing on port ${server.port}`);
});

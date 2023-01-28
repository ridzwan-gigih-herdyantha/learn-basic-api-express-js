require("dotenv").config();
const PORT = process.env.PORT || 5000;

const express = require("express");

const middlewareLogRequest = require("./middleware/log");
const upload = require("./middleware/multer");

const usersRoutes = require("./routes/users.js");

const app = express();

// routing
// app.method(path, handler)
// app.use("/", (req, res) => {
//   res.send("hello world");
// })
// routing end

//http method
// app.get("/", (req, res) => {
//   res.send("hello get method");
// });
//http method end

//middlewarke
// app.use(middlewareLogRequest);

// app.use((req, res, next) => {
//   console.log("middleware pertama");
//   next(); //jika tidak memakai next mka akan loading di postman
// });

// app.use((req, res, next) => {
//   console.log("middleware kedua");
//   next();
// });
//middleware end

// app.use("/users", usersRoutes);

// app.post("/", (req, res) => {
//   res.send("hello post method");
// });

//response
// app.get("/", (req, res) => {
//   // res.send('hello'); // -> response text
//   // res.send("<h1> tes </h1>"); //-> response tag html
//   res.json({
//     nama: "Ridzwan",
//     no: 1,
//   }); // -> response json
// });

//create dummy
app.use(middlewareLogRequest);

app.use(express.json());

app.use("/users", usersRoutes);

app.use("/picture", express.static("public/images"));

app.post('/upload', upload.single('photo'), (req, res) => {
  res.json({
      message: "Upload Image Succeed"
    })
})


app.use((err,req,res,next) => {
  res.json({
      message:err.message
  })
});

app.listen(PORT, () => {
  console.log(`Server berhasil di running di port: ${PORT}`);
});

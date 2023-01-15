const express = require("express")
const mongoose = require("mongoose")
const app = express()
const articleRouter = require("./routes/articles")

mongoose.set("strictQuery", true)
mongoose.connect("mongodb://localhost/articleBlog", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

app.set("view engine", "ejs")

app.use(express.urlencoded({ extended: false }))

app.get("/", (req, res) => {
  const articles = [
    {
      title: "Test Article",
      createdAt: new Date(),
      description: "test description",
    },
    {
      title: "Test Article",
      createdAt: new Date(),
      description: "test description",
    },
  ]
  res.render("articles/index", { articles: articles })
})
app.use("/articles", articleRouter)

app.listen(5000, () => {
  console.log("Server started")
})

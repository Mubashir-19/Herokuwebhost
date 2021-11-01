import express from 'express';
const app = express();
const port = process.env.PORT || 3000

app.get("/", (req, res) => {
    res.send("Here is your server");
});

app.get("/profile", (req, res) => {
    res.send("Here is your profile");
});

app.get("/about", (req, res) => {
    res.send("Here is your about");
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

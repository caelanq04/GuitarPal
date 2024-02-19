import express from "express";
import path from "path";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
	res.render("./index.html");
});

app.listen(port, () => {
	console.log(`Server running on port ${port}`);
});

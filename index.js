const express = require("express");
app = express();
app.get("*", (req, res) => {
	console.log(JSON.stringify({ msg: "response sent", v: 1, query:req.path }));
	res.send("Yes!! we are there!");
});
app.listen(3000, () => {
	console.log(JSON.stringify({ msg: "App listening on 3000", v: 1 }));
})
console.log(JSON.stringify({ msg: "Heloo wordl", v: 1 }));

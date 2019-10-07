const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('public'));

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + "/views/index.html"));
})

app.listen(port, () => {
    console.log(`app is running on ${port}`);
})

console.log("Java Script Linked Up");


app.get('/', (req, res) => {
	  console.log('Your on the homepage');
	  res.sendFile(path.join(__dirname + '/views/index.html'));
	})









(function(){
	"use strict";

	console.log("fired");

	var button = document.querySelector("#button");
	var burgerCon = document.querySelector("#burgerCon");

	function hamburgerMenu() {
		burgerCon.classList.toggle("slideToggle");
		button.classList.toggle("expanded");
	}

	button.addEventListener("click", hamburgerMenu, false);
});

app.listen(port, () => {
	  console.log(`Server running at ${port}`);
	});

var path = require("path");
var express = require("express");
var logger = require("morgan");
var bodyParser = require("body-parser");
var app = express(); 
var port = process.env.PORT || 3000;
var server = require('http').createServer(app); 
app.set("views", path.resolve(__dirname, "assets")); 
app.set("view engine", "ejs");
app.use(express.static(__dirname + '/assets'));
var entries = [];
app.locals.entries = entries;
app.use(logger("dev")); 

app.use(bodyParser.urlencoded({ extended: false }));
// GETS
app.get("/", function (request, response) {
    response.sendFile(__dirname+"/assets/Home.html");
});
app.get("/home", function (request, response) {
    response.sendFile(__dirname+"/assets/Home.html");
});
app.get("/about", function (request, response) {
    response.sendFile(__dirname+"/assets/Chandaluri_NaveenKumar.html");
});
app.get("/student", function (request, response) {
    response.sendFile(__dirname+"/assets/student.html");
});
app.get("/contact", function (request, response) {
    response.sendFile(__dirname+"/assets/Contact.html");
});
app.get("/new-entry", function (request, response) {
    response.render("new-entry");
});
app.get("/guestbook", function (request, response) {
    response.render("index");
});
// POSTS
app.post("/new-entry", function (request, response) {
    if (!request.body.title || !request.body.body) {
    response.status(400).send("Entries must have a title and a body.");
    return;
    }
    entries.push({ 
    title: request.body.title,
    content: request.body.body,
    published: new Date()
    });
    response.redirect("/guestbook");
    });
app.post("/contact", function (request, response) {
    var api_key = 'key-e21f6557b765d0f83d72f5b657b9ea55';
    var domain = 'sandbox7616977ce6614cca9d39746fde6b4fcd.mailgun.org';
    var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});
     
    var data = {
      from: 'Naveen Kumar C <postmaster@sandbox7616977ce6614cca9d39746fde6b4fcd.mailgun.org>',
      to: 'naveenkumarchandaluri@gmail.com',
      subject: request.body.firstname,
      text: request.body.subject
    };
     
    mailgun.messages().send(data, function (error, body) {
      console.log(body);
      if(!error)
        {
        //    response.redirect("/contact");       
        }
        else
        response.send("false"+error);
    });
});
// 404
app.use(function (request, response) {
    response.status(404).render("404");
    });
// Listen for an application request on port 8081
server.listen(port);
//Alle globale variabele opstellen
var http = require('http');
var fs = require('fs');

//Luisteren op poort 8000. 
http.createServer(onrequest).listen(8000)


function onrequest(req, res) {

//Als about.html opgevraagd wordt is het ok
  if (req.url === "/about.html")
  {
    res.writeHead(200,{"Content-Type": "text/html"});
    fs.createReadStream("./files/about.html").pipe(res);
  }

//Anders als avatar afbeelding gevraagd wordt
  else if(req.url === "/images/avatar.png")
  {
    res.writeHead(200,{"Content-Type": "image/png"});
    fs.createReadStream("./files/images/avatar.png").pipe(res);
  }

//Anders als de map assets gevraagd word
  else if(req.url === "/assets")
  {
    res.writeHead(200,{"Content-Type": "text/html"});
    fs.createReadStream("./files/assets/index.html").pipe(res);
  }

//Of als iemand rechtstreeks index.html wilt bereiken
  else if(req.url === "/assets/index.html")
  {
    res.writeHead(200,{"Content-Type": "text/html"});
    fs.createReadStream("./files/assets/index.html").pipe(res);
  }

//Als er ook maar iets anders gevraagd wordt krijgen we een error
  else {
    res.writeHead(404,{"Content-Type": "text/html"});
    fs.createReadStream("./files/error.html").pipe(res);
  }

}
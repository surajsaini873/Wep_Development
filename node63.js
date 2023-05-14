// console.log(" Hello Suraj ");
const http = require("http");

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader(`Content-Type`, `text/html`);
  res.end(`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Pseudo selectors & more Designing</title>
    <style>
        .container{
            border: 2px solid red;
            background-color: rgb(223, 245, 201); 
            padding: 34px;
            margin:  34px auto;
            width: 666px;
        }
        a:hover{
            color: black;
            background-color: rgb(221, 166, 38);
        }
        a:visited{
            background-color: yellow;
        }
        a:visited{
           background-color:darkblue;
        }
        a{
            text-decoration: none;
        }
        .btn{
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background-color: crimson;
            font-weight: bold;
            padding: 6px;
            border: none;
            cursor: pointer;
            font-size: 13px;
            border-radius: 4px;
        }
        .btn.hover{
            color: darkgoldenrod;
            background-color: rgb(228, 214, 214);
            border: solid black;
        }
    </style>
  </head>
  <body>
    <div class="container" id="cont1">
      <h2>This is my heading</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex
        voluptatibus possimus distinctio quos ea a expedita, corrupti ipsa vel
        consequatur quam, asperiores necessitatibus laboriosam amet, error
        architecto quidem minus tempore pariatur porro? Cupiditate, ea.
      </p>
      <a href="https://facebook.com" class="btn">Read more</a>
      <button href="" class="btn">Contact us</button>

    </div>
  </body>
</html>
`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

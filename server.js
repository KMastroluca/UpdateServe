const express = require('express');
const fs = require('fs');

const app = express();



const css = fs.readFileSync('./bundle.css');
const js = fs.readFileSync('./bundle.js');

const template = `
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Account Recovery</title>
    <style>
    ${css}
    </style>
    <script type="module">
    ${js}
    </script>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>

`

console.log(template);


app.listen(3000, ()=>{
    console.log('Server Running...');
});
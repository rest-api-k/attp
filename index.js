var express = require('express'),
    cors = require('cors'),
    secure = require('ssl-express-www');
const PORT = process.env.PORT || 5000 || 8080 || 3000
const os = require('os');
const Canvas = require('canvas')
const canvasGif = require('canvas-gif')
require('express-group-routes')
const path = require('path');

var app = express()
app.enable('trust proxy');
app.set("json spaces",2)
app.use(cors())
app.use(secure)
app.use(express.static("public"))



app.listen(PORT, () => {
console.log('\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n')
console.log('\n ================================================')
console.log(` │ + Owner    : Sr.Bruxo.Mp4 ?`)
console.log(` │ + Version  : 1.0`)
console.log(` │ + Host     : ${os.hostname()}`)
console.log(` │ + Port     : ${PORT}`)
console.log(` │ + Platfrom : ${os.platform()}`)
console.log('===============================================\n\n')
})


app.get('/attp1', async (req, res, next) => {
  const query = req.query.query;

  if (!query) {
    return res.json({ status: 400, message: "[ ! ] Insira o parâmetro QUERY" });
  }

  try {
    const fontNumber = 1;
    const file1 = ("./mark/gif/attp.gif");
    const length = query.length;
    let font = 90;
    const fontName = `attp${fontNumber}`;
    const fontPath = path.join(__dirname, './mark/font', fontName + '.otf');

    if (length > 12) { font = 68; }
    if (length > 15) { font = 58; }
    if (length > 18) { font = 55; }
    if (length > 19) { font = 50; }
    if (length > 22) { font = 48; }
    if (length > 24) { font = 38; }
    if (length > 27) { font = 35; }
    if (length > 30) { font = 30; }
    if (length > 35) { font = 26; }
    if (length > 39) { font = 25; }
    if (length > 40) { font = 20; }
    if (length > 49) { font = 10; }

    Canvas.registerFont(fontPath, { family: 'SF-Pro' });

    const buffer = await canvasGif(
      file1,
      (ctx) => {
        const couler = ["#ffe100", "#33ff00", "#0033ff", "#00ffcc", "#9500ff", "#ff00ff", "#ff0000"];

        const jadi = couler[Math.floor(Math.random() * couler.length)];

        function drawStroked(query, x, y) {
          ctx.lineWidth = 5;
          ctx.font = `${font}px 'SF-Pro'`;
          ctx.fillStyle = jadi;
          ctx.strokeStyle = 'black';
          ctx.textAlign = 'center';
          ctx.strokeText(query, x, y);
          ctx.fillText(query, x, y);
        }

        drawStroked(query, 290, 300);
      },
      {
        coalesce: false,
        delay: 0,
        repeat: 0,
        algorithm: 'octree',
        optimiser: false,
        fps: 7,
        quality: 100,
      }
    );

    res.set({ 'Content-Type': 'gif' });
    res.send(buffer);
  } catch (err) {
    console.error(`\n${err}\n\n`);
  }
});
app.get('/attp2', async (req, res, next) => {
  const query = req.query.query;

  if (!query) {
    return res.json({ status: 400, message: "[ ! ] Insira o parâmetro QUERY" });
  }

  try {
    const fontNumber = 1;
    const file1 = ("./mark/gif/attp.gif");
    const length = query.length;
    let font = 90;
    const fontName = `attp${fontNumber}`;
    const fontPath = path.join(__dirname, './mark/font', fontName + '.otf');

    if (length > 12) { font = 68; }
    if (length > 15) { font = 58; }
    if (length > 18) { font = 55; }
    if (length > 19) { font = 50; }
    if (length > 22) { font = 48; }
    if (length > 24) { font = 38; }
    if (length > 27) { font = 35; }
    if (length > 30) { font = 30; }
    if (length > 35) { font = 26; }
    if (length > 39) { font = 25; }
    if (length > 40) { font = 20; }
    if (length > 49) { font = 10; }

    Canvas.registerFont(fontPath, { family: 'SF-Pro' });

    const buffer = await canvasGif(
      file1,
      (ctx) => {
        const couler = ["#ffe100", "#33ff00", "#0033ff", "#00ffcc", "#9500ff", "#ff00ff", "#ff0000"];

        const jadi = couler[Math.floor(Math.random() * couler.length)];

        function drawStroked(query, x, y) {
          ctx.lineWidth = 5;
          ctx.font = `${font}px 'SF-Pro'`;
          ctx.fillStyle = jadi;
          ctx.strokeStyle = 'black';
          ctx.textAlign = 'center';
          ctx.strokeText(query, x, y);
          ctx.fillText(query, x, y);
        }

        drawStroked(query, 290, 300);
      },
      {
        coalesce: false,
        delay: 0,
        repeat: 0,
        algorithm: 'octree',
        optimiser: false,
        fps: 7,
        quality: 100,
      }
    );

    res.set({ 'Content-Type': 'gif' });
    res.send(buffer);
  } catch (err) {
    console.error(`\n${err}\n\n`);
  }
});
app.get('/attp3', async (req, res, next) => {
  const query = req.query.query;

  if (!query) {
    return res.json({ status: 400, message: "[ ! ] Insira o parâmetro QUERY" });
  }

  try {
    const fontNumber = 1;
    const file1 = ("./mark/gif/attp.gif");
    const length = query.length;
    let font = 90;
    const fontName = `attp${fontNumber}`;
    const fontPath = path.join(__dirname, './mark/font', fontName + '.otf');

    if (length > 12) { font = 68; }
    if (length > 15) { font = 58; }
    if (length > 18) { font = 55; }
    if (length > 19) { font = 50; }
    if (length > 22) { font = 48; }
    if (length > 24) { font = 38; }
    if (length > 27) { font = 35; }
    if (length > 30) { font = 30; }
    if (length > 35) { font = 26; }
    if (length > 39) { font = 25; }
    if (length > 40) { font = 20; }
    if (length > 49) { font = 10; }

    Canvas.registerFont(fontPath, { family: 'SF-Pro' });

    const buffer = await canvasGif(
      file1,
      (ctx) => {
        const couler = ["#ffe100", "#33ff00", "#0033ff", "#00ffcc", "#9500ff", "#ff00ff", "#ff0000"];

        const jadi = couler[Math.floor(Math.random() * couler.length)];

        function drawStroked(query, x, y) {
          ctx.lineWidth = 5;
          ctx.font = `${font}px 'SF-Pro'`;
          ctx.fillStyle = jadi;
          ctx.strokeStyle = 'black';
          ctx.textAlign = 'center';
          ctx.strokeText(query, x, y);
          ctx.fillText(query, x, y);
        }

        drawStroked(query, 290, 300);
      },
      {
        coalesce: false,
        delay: 0,
        repeat: 0,
        algorithm: 'octree',
        optimiser: false,
        fps: 7,
        quality: 100,
      }
    );

    res.set({ 'Content-Type': 'gif' });
    res.send(buffer);
  } catch (err) {
    console.error(`\n${err}\n\n`);
  }
});
app.get('/attp4', async (req, res, next) => {
  const query = req.query.query;

  if (!query) {
    return res.json({ status: 400, message: "[ ! ] Insira o parâmetro QUERY" });
  }

  try {
    const fontNumber = 1;
    const file1 = ("./mark/gif/attp.gif");
    const length = query.length;
    let font = 90;
    const fontName = `attp${fontNumber}`;
    const fontPath = path.join(__dirname, './mark/font', fontName + '.otf');

    if (length > 12) { font = 68; }
    if (length > 15) { font = 58; }
    if (length > 18) { font = 55; }
    if (length > 19) { font = 50; }
    if (length > 22) { font = 48; }
    if (length > 24) { font = 38; }
    if (length > 27) { font = 35; }
    if (length > 30) { font = 30; }
    if (length > 35) { font = 26; }
    if (length > 39) { font = 25; }
    if (length > 40) { font = 20; }
    if (length > 49) { font = 10; }

    Canvas.registerFont(fontPath, { family: 'SF-Pro' });

    const buffer = await canvasGif(
      file1,
      (ctx) => {
        const couler = ["#ffe100", "#33ff00", "#0033ff", "#00ffcc", "#9500ff", "#ff00ff", "#ff0000"];

        const jadi = couler[Math.floor(Math.random() * couler.length)];

        function drawStroked(query, x, y) {
          ctx.lineWidth = 5;
          ctx.font = `${font}px 'SF-Pro'`;
          ctx.fillStyle = jadi;
          ctx.strokeStyle = 'black';
          ctx.textAlign = 'center';
          ctx.strokeText(query, x, y);
          ctx.fillText(query, x, y);
        }

        drawStroked(query, 290, 300);
      },
      {
        coalesce: false,
        delay: 0,
        repeat: 0,
        algorithm: 'octree',
        optimiser: false,
        fps: 7,
        quality: 100,
      }
    );

    res.set({ 'Content-Type': 'gif' });
    res.send(buffer);
  } catch (err) {
    console.error(`\n${err}\n\n`);
  }
});
app.get('/attp5', async (req, res, next) => {
  const query = req.query.query;

  if (!query) {
    return res.json({ status: 400, message: "[ ! ] Insira o parâmetro QUERY" });
  }

  try {
    const fontNumber = 1;
    const file1 = ("./mark/gif/attp.gif");
    const length = query.length;
    let font = 90;
    const fontName = `attp${fontNumber}`;
    const fontPath = path.join(__dirname, './mark/font', fontName + '.otf');

    if (length > 12) { font = 68; }
    if (length > 15) { font = 58; }
    if (length > 18) { font = 55; }
    if (length > 19) { font = 50; }
    if (length > 22) { font = 48; }
    if (length > 24) { font = 38; }
    if (length > 27) { font = 35; }
    if (length > 30) { font = 30; }
    if (length > 35) { font = 26; }
    if (length > 39) { font = 25; }
    if (length > 40) { font = 20; }
    if (length > 49) { font = 10; }

    Canvas.registerFont(fontPath, { family: 'SF-Pro' });

    const buffer = await canvasGif(
      file1,
      (ctx) => {
        const couler = ["#ffe100", "#33ff00", "#0033ff", "#00ffcc", "#9500ff", "#ff00ff", "#ff0000"];

        const jadi = couler[Math.floor(Math.random() * couler.length)];

        function drawStroked(query, x, y) {
          ctx.lineWidth = 5;
          ctx.font = `${font}px 'SF-Pro'`;
          ctx.fillStyle = jadi;
          ctx.strokeStyle = 'black';
          ctx.textAlign = 'center';
          ctx.strokeText(query, x, y);
          ctx.fillText(query, x, y);
        }

        drawStroked(query, 290, 300);
      },
      {
        coalesce: false,
        delay: 0,
        repeat: 0,
        algorithm: 'octree',
        optimiser: false,
        fps: 7,
        quality: 100,
      }
    );

    res.set({ 'Content-Type': 'gif' });
    res.send(buffer);
  } catch (err) {
    console.error(`\n${err}\n\n`);
  }
});


module.exports = app



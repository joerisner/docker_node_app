const express = require('express');
const bodyParser = require('body-parser');

const app = express();

let userVal = 'Get Good';

app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <link rel="stylesheet" href="styles.css">
      </head>
      <body>
        <section>
          <h2>Docker Noob</h2>
          <h3>${userVal}</h3>
        </section>
        <form action="/store-goal" method="POST">
          <div class="form-control">
            <label>Enter Something:</label>
            <input type="text" name="val">
          </div>
          <button>Set Goal</button>
        </form>
      </body>
    </html>
  `);
});

app.post('/store-goal', (req, res) => {
  const enteredVal = req.body.val;
  console.log(enteredVal);
  userVal = enteredVal;
  res.redirect('/');
});

app.listen(80);

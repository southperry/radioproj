var express = require('express');
var layouts = require('express-ejs-layouts');

var app = express();

app.use(express.static('assets'));
app.use(layouts);

app.set('view engine', 'ejs');
app.set('layout', 'layouts/default');

app.get(['/', '/producer'], function (req, res) {
  res.render('pages/producer', {
    role: "Producer",
    currentSong: "The producer song!",
  });
});

app.get('/dj', function (req, res) {
  res.render('pages/dj', {
    role: "DJ",
    currentSong: "Techno Bop"
  });
});

app.get('/listener', function (req, res) {
  res.render('pages/listener', {
    role: "Listener",
    currentSong: "Miley Cyrus - Party in the USA"
  });
});

app.listen(8080);
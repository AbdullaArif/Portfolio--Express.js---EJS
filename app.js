const express = require('express');
const path = require('path');

const app = express();

// EJS təyin et
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Static fayllar üçün path
app.use(express.static(path.join(__dirname, 'public')));

// Ana səhifə routu
app.get('/', (req, res) => {
  res.render('pages/index');
});

// Serveri işə sal
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started on http://localhost:${PORT}`));

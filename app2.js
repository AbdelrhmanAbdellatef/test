const express = require('express');
const app = express();
const path = require('path'); // تأكد من تضمين هذا السطر

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public'))); // تأكد من إغلاق القوس هنا

app.get('/', (req, res) => {
    res.render('home.ejs'); 
});

app.listen(3000, () => {
    console.log('التطبيق يعمل على المنفذ 3000');
});

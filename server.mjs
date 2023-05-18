import express from 'express';
import nunjucks from 'nunjucks';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import * as path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

// set default express engine and extension
app.engine('html', nunjucks.render);
app.set('view engine', 'html');

app.use('/', express.static(path.join(__dirname, '/public')))

app.get('/', (req, res) => {
  res.render('index');
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});

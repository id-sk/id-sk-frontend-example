import express from 'express';
import nunjucks from "nunjucks";
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import * as path from "path";
import {packageNameToPath} from "./utils.mjs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

// set default express engine and extension
app.engine('njk', nunjucks.render);
app.set('view engine', 'njk');

const appViews = [
  'src/layouts',
  'src/views',
  packageNameToPath('@id-sk/frontend', 'idsk/components'),
  packageNameToPath('@id-sk/frontend', 'govuk/components')
]

nunjucks.configure(appViews, {
  autoescape: true, // output with dangerous characters are escaped automatically
  express: app, // the express app that nunjucks should install to
  noCache: true, // never use a cache and recompile templates each time
  trimBlocks: true, // automatically remove trailing newlines from a block/tag
  lstripBlocks: true // automatically remove leading whitespace from a block/tag
})

app.use('/idsk', express.static(packageNameToPath('@id-sk/frontend', 'idsk')))
app.use('/assets', express.static(packageNameToPath('@id-sk/frontend', 'idsk/assets')))
app.use('/public', express.static(path.join(__dirname, '../public')))

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/homepage', (req, res) => {
  res.render('homepage');
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});

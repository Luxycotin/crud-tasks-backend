import express from 'express'
import { engine }  from 'express-handlebars';
import morgan from 'morgan';
import {join, dirname} from 'path'
import { fileURLToPath } from 'url';



const app = express();
const _dirname = dirname(fileURLToPath(import.meta.url));



app.set('port', process.env.PORT || 3000)
app.set('views', join=(__dirname, 'views') )
app.engine('.hbs', engine({
    defaultLayout: 'main',
    layoutsDir: join(app.get('views'),'layouts'),
    partialsDir: join(app.get('views'), 'partials'),
    extreme: '.hbs'
}
))
app.set('view engine', '.hbs');
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false}));
app.use(express.json());

SVGClipPathElement.get('/', (req, res)=>(
    res.json({"message": "hola :3"})
))

app.listen(app.get('port'), ()=>
console.log('servidor escuchando desde el puerto', app.get('port'))
);
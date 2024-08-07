import express from 'express'


const app = express();;;;

app.set('port', process.env.PORT || 3000)

app.set('views', )



app.listen(app.get('port'), ()=>
console.log('servidor escuchando desde el puerto', app.get('port'))
);
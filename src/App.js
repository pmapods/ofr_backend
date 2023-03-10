const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const response = require('./helpers/response')
const morgan = require('morgan')

const app = express()
const server = require('http').createServer(app)

const { APP_PORT, APP_URL } = process.env

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(morgan('dev'))
app.use(cors())

const authRoute = require('./routes/auth')
// masterdata
const userRoute = require('./routes/user')
const depoRoute = require('./routes/depo')
const coaRoute = require('./routes/coa')
const bankRoute = require('./routes/bank')
const approveRoute = require('./routes/approve')
const menuRoute = require('./routes/menu')
const reasonRoute = require('./routes/reason')
const docRoute = require('./routes/document')
const rekRoute = require('./routes/rekening')
// transaksi
const klaimRoute = require('./routes/klaim')
const opsRoute = require('./routes/operasional')
const ikkRoute = require('./routes/ikk')

const authMiddleware = require('./middlewares/auth')

app.use('/uploads', express.static('assets/documents'))
app.use('/masters', express.static('assets/masters'))
app.use('/download', express.static('assets/exports'))

app.use('/auth', authRoute)
// masterdata
app.use('/user', authMiddleware, userRoute)
app.use('/depo', authMiddleware, depoRoute)
app.use('/coa', authMiddleware, coaRoute)
app.use('/bank', authMiddleware, bankRoute)
app.use('/approve', authMiddleware, approveRoute)
app.use('/menu', authMiddleware, menuRoute)
app.use('/reason', authMiddleware, reasonRoute)
app.use('/document', authMiddleware, docRoute)
app.use('/rekening', authMiddleware, rekRoute)
// transaksi
app.use('/klaim', authMiddleware, klaimRoute)
app.use('/ops', authMiddleware, opsRoute)
app.use('/ikk', authMiddleware, ikkRoute)

app.get('*', (req, res) => {
  response(res, 'Error route not found', {}, 404, false)
})

server.listen(APP_PORT, () => {
  console.log(`App is running on port ${APP_URL}`)
})

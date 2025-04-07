const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const http = require('http');
const socketIo = require('socket.io');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const logger = require('./logger');
const prometheusMiddleware = require('express-prometheus-middleware');
const authRoutes = require('./routes/auth');
const orderRoutes = require('./routes/orders');

dotenv.config();

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(cors());
app.use(express.json());
app.use(helmet());
app.use(rateLimit({ windowMs: 15 * 60 * 1000, max: 100 }));
app.use(prometheusMiddleware({
  metricsPath: '/metrics',
  collectDefaultMetrics: true,
  requestDurationBuckets: [0.1, 0.5, 1, 1.5],
}));

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => logger.info('Conectado ao MongoDB'))
  .catch(err => logger.error('Erro ao conectar ao MongoDB:', err));

app.use('/api/auth', authRoutes);
app.use('/api/orders', orderRoutes);

io.on('connection', (socket) => {
  logger.info('Novo cliente conectado');
  socket.on('disconnect', () => {
    logger.info('Cliente desconectado');
  });
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => logger.info(`Servidor rodando na porta ${PORT}`));

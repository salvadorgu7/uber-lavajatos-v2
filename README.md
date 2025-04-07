# 🚗 Uber dos Lavajatos

[![Build](https://img.shields.io/github/actions/workflow/status/salvadorgu7/uber-lavajatos-v2/ci-cd.yml?branch=main)](https://github.com/salvadorgu7/uber-lavajatos-v2/actions)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)
[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/salvadorgu7/uber-lavajatos-v2)

Aplicativo estilo Uber para serviços de lavagem de carro. Lavadores parceiros aceitam pedidos via app com geolocalização, chat e pagamento integrado.

---

## ✨ Funcionalidades

- Cadastro e login com JWT
- Pedido com geolocalização
- Lista de lavadores disponíveis
- Chat em tempo real com Socket.IO
- Pagamento via Stripe (em progresso)
- Painel de avaliações
- Cache com Redis / AsyncStorage
- Monitoramento com Prometheus

---

## 🚀 Deploy no Heroku

Clique no botão abaixo e siga as instruções para hospedar seu backend online:

[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/salvadorgu7/uber-lavajatos-v2)

---

## 📦 Como rodar localmente

### Backend (Node.js)

```bash
cd backend
cp .env.example .env
npm install
npm start
```

### Frontend (React Native)

```bash
cd frontend/UberLavajato
npm install
npx expo start
```

---

## 🧪 Testes

```bash
# Backend
cd backend
npm test

# Frontend (Detox)
cd frontend/UberLavajato
npx detox test -c ios.sim.debug
```

---

## ⚙️ CI/CD

- Automatizado com GitHub Actions
- Rodando testes no push para `main`

---

## 👨‍💻 Autor

Feito com 💜 por [@salvadorgu7](https://github.com/salvadorgu7)

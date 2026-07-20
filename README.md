# Pancity User App

The consumer-facing VTU app (airtime, data, cable, electricity, wallet, Airtime2Cash).

## Run locally

```
npm install
cp .env.example .env
# edit .env to point at your backend (see pancity-backend/README.md)
npm run dev
```

Opens at http://localhost:5173

## Deploy / import elsewhere

This is a standard Vite + React project — works in CodeSandbox (import from GitHub),
Vercel, Netlify, or any static host after `npm run build` (output in `dist/`).

Set the `REACT_APP_API_BASE` environment variable wherever you deploy it, to your
backend's URL + `/api` (e.g. `https://your-backend.onrender.com/api`).

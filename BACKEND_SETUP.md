# Backend API Setup Instructions

CORS issue fix karne ke liye backend API server create kiya hai.

## How to Run:

### Option 1: Run Both Server and React App Together (Recommended)
```bash
npm run dev
```
Ye command dono server (port 5000) aur React app (port 3000) ek saath start karega.

### Option 2: Run Separately

**Terminal 1 - Backend Server:**
```bash
npm run server
```
Backend server port 5000 par start hoga.

**Terminal 2 - React App:**
```bash
npm start
```
React app port 3000 par start hoga.

## Environment Variables:

Project root me `.env` file create karein (optional, API key already hardcoded hai):
```
RESEND_API_KEY=re_LCgDksyB_2ii31xZcbNvJy8LoN5AxKwx3
PORT=5000
```

## API Endpoint:

- **Email Endpoint:** `POST http://localhost:5000/api/send-email`
- **Health Check:** `GET http://localhost:5000/api/health`

## Important Notes:

- Backend server port 5000 par run hoga
- React app port 3000 par run hoga  
- Dono ek saath run karna zaroori hai
- API key server-side me secure hai (browser me expose nahi hoga)

## Testing:

1. Dono servers start karein (`npm run dev`)
2. Browser me `http://localhost:3000/contact` open karein
3. Form fill karein aur submit karein
4. Emails dono addresses par jayengi:
   - support@macroencoder.com
   - amankk0007@gmail.com


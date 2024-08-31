import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import * as FirebaseAuthService from "./authService/FirebaseAuthService.ts";

FirebaseAuthService.serviceInit();

createRoot(document.getElementById('root')!).render(
    <App />
)

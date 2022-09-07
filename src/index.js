import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import { createRoot } from 'react-dom/client';
import App from './App';
import './css/app.css';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(App());

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css'
//import App from './App.jsx'
import JsonFormat from './pages/formato.jsx';
import Home from './pages/home.jsx';

const routes = [
  {
    path:"/",
    element: <Home />
  },
  {
    path: "/formato",
    element: <JsonFormat />,
  }
];

const router = createBrowserRouter(routes);

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
import Header from './components/Header/Header.jsx';
import Hero from './components/Hero/Hero.jsx';
import Qyote from './components/Qyote/Qyote.jsx';
import Mainitems from './components/MainItems/MainItems.jsx';
import Favourite from './components/Favorite/Favourite.jsx';
import Footer from './components/Footer/Footer.jsx'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Hero />
    <Qyote />
    <Mainitems />
    <Favourite />
    <Footer/>
  </StrictMode>,
)

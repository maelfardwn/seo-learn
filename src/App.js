import logo from './logo.svg';
import './App.css';
import Routes from './routes'
import Navbar from './pages/Navbar'
import ReactGa from 'react-ga'
import { useEffect } from 'react';
import {Helmet} from 'react-helmet';

import { BrowserRouter, Route, Switch } from 'react-router-dom'
import london from './assets/london.jpg'
import { Link } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import About from './pages/About';
function App() {

  useEffect(()=>{
    ReactGa.initialize('UA-207998390-1')
    ReactGa.pageview('/')
  })

  return ( 
  <BrowserRouter>
       <Helmet>
       <title>this is homepage index</title>
    <meta name="image" content='https://assesmenttestridwan.herokuapp.com/assets/london.jpg'/>
    <meta name="description" content="Description this Home"/>
    
    <meta property="og:title" content='opengraph test homepage'/>
    <meta property="og:description" content='This is homepage using opengraph for testing'/>
    <meta property="og:description" content="Description this"/>
    <meta property="og:image" content='https://assesmenttestridwan.herokuapp.com/assets/london.jpg'/>
    <meta property="og:url" content='https://assesmenttestridwan.herokuapp.com/'/>
    
    <meta name="twitter:card" content="summary_large_image"/>
    <meta name="twitter:image:alt" content='London Pict With Twitter image alt'/> 
    <meta property="twitter:description" content="Description this"/>
    </Helmet>
    <Switch>
    <Route exact path='/about' component = { About } />
    <Route exact path='/projects' component = { Projects } />
    <Route exact path='/contact' component = { Contact }/>
    <Route exact path='/' component={Home} />
  </Switch>
  </BrowserRouter>
  );
}

export default App;

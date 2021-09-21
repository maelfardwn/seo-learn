import React from 'react'
import '../App.css';
import Routes from '../routes'
import OpenGraph from 'opengraph-react'
import Navbar from './Navbar'
import ReactGa from 'react-ga'
import Helmet from 'react-helmet'
import london from '../assets/about.png'
export default function About(){
  return(
   
    <div className="App">
        <Helmet>
            
          <title>About Title</title>
          <meta name="title" content="About Title"/>
          <meta name="description" content="This is descripttion of About page"/>
          {/* 
          <!-- Open Graph / Facebook --> */}
          <meta property="og:type" content="website"/>
          <meta property="og:url" content="https://assesmenttestridwan.herokuapp.com/About"/>
          <meta property="og:title" content="About Title OG"/>
          <meta property="og:description" content="This is descripttion of About page OG"/>
          <meta property="og:image" content="https://assesmenttestridwan.herokuapp.com/assets/About.png"/>
          {/* 
          <!-- Twitter --> */}
          <meta property="twitter:card" content="summary_large_image"/>
          <meta property="twitter:url" content="https://assesmenttestridwan.herokuapp.com/About"/>
          <meta property="twitter:title" content="About Title Twitter"/>
          <meta property="twitter:description" content="This is descripttion of About page Twitter"/>
          <meta property="twitter:image" content="https://assesmenttestridwan.herokuapp.com/assets/About.png"/>
        </Helmet>
        
        <Navbar/>
        <header className="App-header">
      <div style={{width:'400px',height:'200px'}}>
      <img width='200px' height='100px' src={london}/>
          <h1>Hello, This is the About Page</h1>
          <p>This is About page . and you will see more information from another page</p>
      </div>
        </header>
    </div>
  )
}
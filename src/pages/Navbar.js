import React from 'react'

import { BrowserRouter, Route, Link } from "react-router-dom";

export default function Navbar() {
  return (
    
    <header className="header">
    <h1 class="logo"><a href="#">TEST</a></h1>
    <ul className="main-nav">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/contact">Contact</Link></li>
    </ul>
    </header>
    )
}
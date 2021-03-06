import React from "react";
import {link} from 'react-router-dom';

function Header() {

    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <link rel = "App"></link>
    <a class="navbar-brand" href="#">Happy Paws</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"/>
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">

          <a class="nav-link active" aria-current="page" href="/home">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/add">Create Iteam</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/inventory">All Inventory Table</a>
        </li>

      </ul>
    </div>
  </div>
</nav>
    )
    
}

export default Header;
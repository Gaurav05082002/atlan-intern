
import React from 'react'
import './Nav2.css'
export default function Nav() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-dark" >
  <div class="container-fluid">
    <a class="navbar-brand" href="#" style={{color:"white"}}>ATLAN</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#" style={{color:"white"}}>Home</a>
        </li>
        
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search in whole page" aria-label="Search"></input>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
      
    </div>
  </div>
</nav>
</div>
  )
}
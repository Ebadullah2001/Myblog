import React, { Component } from 'react'
import './nav.css'

class Navbar extends React.Component {
  render() {
    return (
      <React.Fragment>
        <nav class="navbar fixed-top navbar-expand-lg">
          <div class="container-fluid">
            <a class="navbar-brand">MyBlog</a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link " aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Categories
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Bookmark
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Profile
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Sign in
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </React.Fragment>
    )
  }
}

export default Navbar

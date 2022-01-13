import React, { Component } from 'react'
import Navbar from './navbar'
import './home.css'

class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div class="container-fluid">
          <Navbar />
        </div>
        <div class="container-fluid" id="image">
          <img src={require('./123.jpg')} class="img-fluid" />
          <h3 class="content">
            "Reading is the Gateway skill that makes all the possible learning"
          </h3>
        </div>
        <div class="container-fluid" id="blog">
          <div class="oneblog">
            <div>
              <span class="heading">Anthony's Story</span>
              <span>
                <img src={require('./bookmark.png')} class="icon" />
              </span>
            </div>

            <div>
              <h6 class="material">
                After Years Of Using Drugs, One Morning Anthony Realized He Was
                In The Fierce Grip Of Addiction— And It Was Getting Worse.
                Before Long, Everything That He Had Worked For Was Falling
                Apart… He Found Himself Hopeless And Spiritually Bankrupt. “I
                Knew I Needed Help. As A Self-Employed Electrician......
              </h6>
            </div>
            <div>
              <button class="btn btn-primary">Read more</button>
            </div>
          </div>
          <div class="oneblog">
            <div>
              <span class="heading">Anthony's Story</span>
              <span>
                <img src={require('./bookmark.png')} class="icon" />
              </span>
            </div>

            <div>
              <h6 class="material">
                After Years Of Using Drugs, One Morning Anthony Realized He Was
                In The Fierce Grip Of Addiction— And It Was Getting Worse.
                Before Long, Everything That He Had Worked For Was Falling
                Apart… He Found Himself Hopeless And Spiritually Bankrupt. “I
                Knew I Needed Help. As A Self-Employed Electrician......
              </h6>
            </div>
            <div>
              <button class="btn btn-primary">Read more</button>
            </div>
          </div>
          <div class="oneblog">
            <div>
              <span class="heading">Anthony's Story</span>
              <span>
                <img src={require('./bookmark.png')} class="icon" />
              </span>
            </div>

            <div>
              <h6 class="material">
                After Years Of Using Drugs, One Morning Anthony Realized He Was
                In The Fierce Grip Of Addiction— And It Was Getting Worse.
                Before Long, Everything That He Had Worked For Was Falling
                Apart… He Found Himself Hopeless And Spiritually Bankrupt. “I
                Knew I Needed Help. As A Self-Employed Electrician......
              </h6>
            </div>
            <div>
              <button class="btn btn-primary">Read more</button>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default Home

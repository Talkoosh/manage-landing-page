import React from 'react';


export function Footer() {
  return (
    <footer className="footer">
      <div className="logo-and-socials">
        <img src="./assets/images/logo.svg" alt="" />
        <div className="socials">
          <a href=""><img src="./assets/images/icon-facebook.svg" alt="" /></a>
          <a href=""><img src="./assets/images/icon-youtube.svg" alt="" /></a>
          <a href=""><img src="./assets/images/icon-twitter.svg" alt="" /></a>
          <a href=""><img src="./assets/images/icon-pinterest.svg" alt="" /></a>
          <a href=""><img src="./assets/images/icon-instagram.svg" alt="" /></a>
        </div>
      </div>
      <div className="page-links">
        <div className="col">
          <a href="">Home</a>
          <a href="">Pricing</a>
          <a href="">Products</a>
          <a href="">About Us</a>
        </div>
        <div className="col">
          <a href="">Careers</a>
          <a href="">Community</a>
          <a href="">Privacy Policy</a>
        </div>
      </div>
      <div className="updates-and-copyrights">
        <div>
          <input type="text" placeholder="Updates in your inbox..." />
          <button>Go</button>
        </div>
        <p>Copyrights 2020. All Rights Reserved</p>
      </div>
    </footer>
  )
}

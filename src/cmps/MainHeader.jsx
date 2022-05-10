import React from 'react'

export function MainHeader() {
  return (
    <section className="main-header">
      <img src="./assets/images/logo.svg" alt="" />
      <div className="header-links">
        <a href="">Pricing</a>
        <a href="">Product</a>
        <a href="">About Us</a>
        <a href="">Careers</a>
        <a href="">Community</a>
      </div>
      <button>Get Started</button>
    </section>
  )
}

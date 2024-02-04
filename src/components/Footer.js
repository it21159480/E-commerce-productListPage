import React from 'react'
import '../styles/Footer.css' // import the CSS file

function Footer() {
  return (
    <div className="footer">
      <p>Copyright &copy; 2023 My E-Commerce Store. All rights reserved.</p>
      <nav>
        <ul>
          <li>
            <a href="/privacy-policy">Privacy Policy</a>
          </li>
          <li>
            <a href="/terms-of-service">Terms of Service</a>
          </li>
          <li>
            <a href="/contact-us">Contact Us</a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Footer
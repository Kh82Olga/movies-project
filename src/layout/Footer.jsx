import React from 'react'

function Footer(){
  return (
    <footer className="page-footer teal darken-4">
          <div className="footer-copyright">
            <div className="container">
            © {new Date().getFullYear()} React Movies
            
            </div>
          </div>
        </footer>
  )
}

export {Footer}
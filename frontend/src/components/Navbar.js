import React from 'react'
import './Navbar.css'

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid Pbackground">
                <a className="navbar-brand" href="/#">IIT-J Token System</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="/#">{}</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/#">{}</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/#">{}</a>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
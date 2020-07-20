import React from 'react'
import { Link } from 'react-router-dom'


export default function Navbar() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <div class="container">
                    <Link to="/">
                        <a class="navbar-brand" href="#">Pantry App</a>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                    </Link>

                    <div class="collapse navbar-collapse" id="navbarResponsive">
                        <ul class="navbar-nav ml-auto">

                            <Link to="/">

                                <li class="nav-item active">
                                    <a class="nav-link" href="#">Dashboard
                                         <span class="sr-only">(current)</span>
                                    </a>
                                </li>
                            </Link>


                            <Link to="/about">
                                <li class="nav-item">
                                    <a class="nav-link" href="#">About</a>
                                </li>
                            </Link>

                            <Link to="/login">
                                <li class="nav-item">
                                    <a class="nav-link" href="#">LogIn</a>
                                </li>
                            </Link>


                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

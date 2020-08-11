import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <div>

            <footer class="py-5 bg-dark">
                <div class="container">
                    
                    <p class="m-0 text-center text-white">Copyright &copy; Team Beteleguese 2020</p>

                    <Link to="/about">
                                <li class="nav-item">
                                    <a class="nav-link" href="#">About</a>
                                </li>
                            </Link>
                    

                </div>
            </footer>
        </div>
    )
}

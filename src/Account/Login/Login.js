import React, { Component } from 'react'
import './login.css'

export default class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: ''
        }
    }


    handelEmailChange = (e) => {
        this.setState({ email: e.target.value })
        console.log(e.target.value)
    }

    handelPasswordChange = (e) => {
        this.setState({ password: e.target.value })
        console.log(e.target.value)

    }


    handelSubmit(e) {
        e.preventDefault()
        //implement auth 
    }



    render() {

        return (
            <div id="main-container">
                <div class="container login-container">
                    <div class="row">
                        <div class="col-md-6 login-form-1">
                            <h3>Login</h3>
                            <form onSubmit={this.handelSubmit}>
                                <div class="form-group">
                                    <input
                                        type="email"
                                        class="form-control"
                                        placeholder="Your Email *"
                                        name="email"
                                        onChange={this.handelEmailChange}
                                    />
                                </div>
                                <div class="form-group">
                                    <input
                                        type="password"
                                        class="form-control"
                                        placeholder="Your Password *"
                                        name="password"
                                        onChange={this.handelPasswordChange}
                                    />
                                </div>
                                <div class="form-group">
                                    <input type="submit"
                                        class="btnSubmit"
                                    />
                                </div>
                                <div class="form-group">
                                    <a href="#" class="ForgetPwd">Forget Password?</a>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

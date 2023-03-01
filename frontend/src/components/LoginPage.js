import React from 'react'
import './LoginPage.css'
function LoginPage() {
    return (
        <div className="card text-center Psize container">
            <div className="card-header">
                IIT-J Token System
            </div>
            <div className="card-body">
                <h5 className="card-title">Enter your LDAP credentials to proceed</h5>
                <div className='userName'>
                    <input type={Text} placeholder="Username"/>
                </div>
                <div className='password'>
                    <input type={'password'} placeholder="Password"/>
                </div>
                <a href="/#" className="btn btn-info">Log In</a>
            </div>
            <div className="card-footer text-muted">
                ~ DevlUp Labs
            </div>
        </div>
    )
}

export default LoginPage
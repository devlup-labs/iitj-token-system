import React from 'react'
import './LoginPage.css'
import Navbar from './Navbar'
import {Link} from 'react-router-dom'
function LoginPage() {
    return (
        <>
        <Navbar links={[]}/>
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
                <Link to={"/student"} className="btn btn-info">Log In</Link>
            </div>
            <div className="card-footer text-muted">
                ~ DevlUp Labs
            </div>
        </div>
        </>
    )
}

export default LoginPage
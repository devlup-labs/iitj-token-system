import React from 'react'
import './TransactionPage.css'
import Navabar from './Navbar'


function TransactionPage() {
  const links = [
    { id: 1, name: "Coupon Bazaar", link: "/couponbazaar" },
    { id: 3, name: "ledger", link: "/ledger" },
    { id: 2, name: "student Dashboard", link: "/student" },
]
  return (
    <>
    <Navabar links={links} />
    <div className='myForm' >
      <div className="form-floating mb-3">
        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
        <label for="floatingInput">Email address</label>
      </div>
      <div className="form-floating mb-3">
        <input type="number" className="form-control" id="floatingInput" placeholder="tokens" />
        <label for="floatingInput">Tokens To Share</label>
      </div>
      
      <div className="form-floating">
        <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
        <label for="floatingPassword">Password</label>
      </div>
    <button type="button" class="btn btn-info btn-lg" style={{height:"5rem",width:"12rem", marginTop: "2rem", marginLeft: "10.5rem"}}>Pay</button>
    </div>

    </>
  )
}

export default TransactionPage
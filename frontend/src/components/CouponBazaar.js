import React from 'react'
import Navbar from './Navbar'

function CouponBazaar() {
    const links=[
        {id:1, name: "Ledger", link: "/ledger"},
        {id:2, name: "Transaction", link: "/transaction"},
        {id:3, name: "Student Dashboard", link: "/student"}
    ]
    return (
        <>
        <Navbar links={links}/>
        <div>CouponBazaar</div>
        </>
    )
}

export default CouponBazaar
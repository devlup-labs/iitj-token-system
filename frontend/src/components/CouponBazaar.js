import React from 'react'
import Navbar from './Navbar'
import { useState } from 'react'
import BuyConfirmation from './BuyConfirmation';

function CouponBazaar() {
    const [couponData, setCouponData] = useState([
        { id: 1, available: 50, name: 'Food Coupon', Tokens: 100, buyed: 0 },
        { id: 2, available: 40, name: 'Food Coupon 2', Tokens: 200, buyed: 0 },
        { id: 3, available: 12, name: 'canteen Coupon', Tokens: 180, buyed: 0 },
        { id: 4, available: 8, name: 'cloth Coupon', Tokens: 109, buyed: 0 },
        ]);

    const links = [
        { id: 1, name: "Ledger", link: "/ledger" },
        { id: 2, name: "Transaction", link: "/transaction" },
        { id: 3, name: "Student Dashboard", link: "/student" }
    ]

    const handleBuyClick = (id) => {
        setCouponData((prevCouponData) =>
            prevCouponData.map((item) =>
            item.id === id ? { ...item, buyed: 1 } : item
            )
        );
        };
    return (
        <>

            <Navbar links={links} />
            <div className="container " >
                <ul class="list-group w-25" style={{marginLeft:"60rem", marginTop:"2rem"}}>
                    {couponData.map((item) => (
                        item.buyed<1 &&
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                        {item.name}
                        <span className="badge bg-primary rounded-pill">{item.available}</span>
                        <BuyConfirmation/>
                        {/* <button type="button" className="btn btn-info btn-sm" onClick={()=>{handleBuyClick(item.id)}}>Buy</button> */}
                    </li>
                    ))}

                    </ul>
                </div>
        </>
    )
}

export default CouponBazaar

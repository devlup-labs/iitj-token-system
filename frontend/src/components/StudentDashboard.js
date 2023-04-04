import React from 'react';
import Navbar from './Navbar';
import UserProfileCard from './UserProfileCard';
import { useState } from 'react';

import Last5transactions from './Last5transactions';
import { Link } from 'react-router-dom';
import Analytics from './Analytics';


const StudentDashboard = () => {
    const links = [
        { id: 1, name: "Coupon Bazaar", link: "/couponbazaar" },
        { id: 3, name: "ledger", link: "/ledger" },
        { id: 2, name: "Transaction", link: "/transaction" },
    ]
    const [numberOfTokens] = useState(0)
    return (
        <>
            <Navbar links={links} />
            <div className="container" style={{ display: "flex", marginLeft: "-0.75rem" }}>
                <UserProfileCard name="Piyush Jhamnani" rollNum="B21ME.." />
                <div className="card" style={{ width: "18rem", height: "5rem", marginTop: "5rem", marginLeft: "4rem" }}>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item" style={{ textAlign: "center" }}>Tokens Available <div className='container' style={{ fontSize: "1.5rem", fontWeight: "bold" }}>{numberOfTokens}</div></li>
                    </ul>
                </div>
                <button type="button" class="btn btn-secondary btn-lg" style={{height:"5rem", marginTop: "5rem", marginLeft: "14rem"}}><Link to="/transaction" style={{textDecoration:"none", color:"black"}}>Transaction Page</Link></button>

            </div>

            <Last5transactions />
            <div className='analytics-container' style={{width:"65rem",height:"28rem",marginLeft:"25rem", marginTop:"-20rem",border:"4px solid black"}}>
                <div className='analytics' style={{display:"flex", justifyContent:"center"}}>
                <Analytics />
                </div>
            </div>
        </>
    );
};

export default StudentDashboard;

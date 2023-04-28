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

    //!  this data would come from backend 
    const [numberOfTokens] = useState(0)

    const user = {
        name: "Piyush Jhamnani",
        rollNum: "B21ME..",
        arg3: "",
        arg4: "",
        arg5: "",
        Image: "imageLink"
    }

    const dataTransaction = [
        {id:1, date:"2021-01-01", toPerson:"Piyush"},
        {id:2, date:"2021-04-01", toPerson:"Piyush1"},
        {id:3, date:"2021-01-06", toPerson:"Piyush2"},
        {id:4, date:"2021-12-07", toPerson:"Piyush3"},
    ]

    //!
    return (
        <>
            <Navbar links={links} />
            <div className="container" style={{ display: "flex", marginLeft: "-0.75rem" }}>
                {/* <UserProfileCard name="Piyush Jhamnani" rollNum="B21ME.." /> */}
                <UserProfileCard name={user.name} rollNum={user.rollNum} arg3={user.arg3} arg4={user.arg4} arg5={user.arg5} Image={user.Image} />
                <div className="card" style={{ width: "18rem", height: "5rem", marginTop: "5rem", marginLeft: "4rem" }}>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item" style={{ textAlign: "center" }}>Tokens Available <div className='container' style={{ fontSize: "1.5rem", fontWeight: "bold" }}>{numberOfTokens}</div></li>
                    </ul>
                </div>
                <button type="button" class="btn btn-secondary btn-lg" style={{height:"5rem", marginTop: "5rem", marginLeft: "14rem"}}><Link to="/transaction" style={{textDecoration:"none", color:"black"}}>Transaction Page</Link></button>

            </div>

            <Last5transactions  dataTransaction={dataTransaction} />
            <div className='analytics-container' style={{width:"65rem",height:"28rem",marginLeft:"25rem", marginTop:"-20rem",border:"4px solid black"}}>
                <div className='analytics' style={{display:"flex", justifyContent:"center"}}>
                <Analytics />
                </div>
            </div>
        </>
    );
};

export default StudentDashboard;

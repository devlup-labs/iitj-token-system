import React from 'react';
import Navbar from './Navbar';
import UserProfileCard from './UserProfileCard';

import Last5transactions from './Last5transactions';



const StudentDashboard = () => {
    const links = [
        {id:1, name: "Coupon Bazaar", link: "/couponbazaar"},
        {id:3, name: "ledger", link: "/ledger"},
        {id:2, name: "Transaction", link: "/transaction"},
    ]
    return (
        <>
            <Navbar links={links}/>
            <UserProfileCard name="Piyush Jhamnani" rollNum="B21ME.."/>
            <Last5transactions/>
        </>
    );
};

export default StudentDashboard;

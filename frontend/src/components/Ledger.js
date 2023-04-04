import React from 'react'
import LedgerTable from './LedgerTable'
import Navbar from './Navbar'
function Ledger() {
  const links = [
    {id:1, name: "Coupon Bazaar", link: "/couponbazaar"},
    {id:2, name: "Transaction", link: "/transaction"},
    {id:3, name: "Student Dashboard", link: "/student"}
  ]
  const allColumns = [
    {id:0, Header: "#"},
    {id:1, Header: "Date"},
    {id:2, Header: "Transaction ID"},
    {id:3, Header: "Amount"},
    {id:4, Header: "ToPerson"},
  ]
  const data = [
    {id:1, date:"2021-01-01", transaction_id:"123", amount:"100", toPerson:"Piyush"},
    {id:2, date:"2021-04-01", transaction_id:"23", amount:"10", toPerson:"Piyush1"},
    {id:3, date:"2021-01-06", transaction_id:"152", amount:"1000", toPerson:"Piyush2"},
    {id:4, date:"2021-12-07", transaction_id:"1234", amount:"10", toPerson:"Piyush3"},
  ]
  return (
    <div className='container-fluid'>
      <Navbar links={links}/>
      <div className='container ledgeTable'>
        <LedgerTable allColumns={allColumns} data={data}/>
      </div>
    </div>
  )
}

export default Ledger
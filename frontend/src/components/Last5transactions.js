import React from 'react'
import './Last5transactions.css'
function Last5transactions(props) {

    return (
        <div class="card PCardSizeLast5">
            <div class="card-header">
                Last 5 Transactions
            </div>
            <ul class="list-group list-group-flush">
                {props.dataTransaction.map((item)=>(
                    <li class="list-group-item">{item.date}<span>    </span> <b>{item.toPerson}</b></li>
                ))}
            </ul>
        </div>
    )
}

export default Last5transactions
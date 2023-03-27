import React from 'react'
import './Last5transactions.css'
function Last5transactions() {
    return (
        <div class="card PCardSizeLast5">
            <div class="card-header">
                Last 5 Transactions
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Transaction 1</li>
                <li class="list-group-item">Transaction 2</li>
                <li class="list-group-item">Transaction 3</li>
            </ul>
        </div>
    )
}

export default Last5transactions
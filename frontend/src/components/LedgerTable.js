import React from 'react'

function LedgerTable({allColumns, data}) {
    return (
        <table className="table table-striped">
            <thead>
                <tr>
                    {allColumns.map((column) => (
                        <th scope="col">{column.Header}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.map((entry)=>(
                    <tr>
                        <th scope="row">{entry.id}</th>
                        <td>{entry.date}</td>
                        <td>{entry.transaction_id}</td>
                        <td>{entry.amount}</td>
                        <td>{entry.toPerson}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default LedgerTable
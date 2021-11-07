import React from 'react'

const UdhariQuotaDetails = ({balance, currency}) => {
    return (
        <div className="flex flex-col border-2 m-4 p-4">
            <h3 className="border-2">Udhari Quota Details</h3>
            <p className="border-2"><span className="font-bold">Current Amount:</span> {balance} {currency}</p>
            <button className="border-2 bg-gray-300 p-2 rounded-full mb-1 w-64">Add Balance</button>
            <button className="border-2 bg-gray-300 p-2 rounded-full mt-1 w-64">Withdraw Balance</button>
        </div>
    )
}

export default UdhariQuotaDetails

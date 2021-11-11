import React from 'react'

const AccountDetails = ({Details}) => {
    return (
        <div className="flex flex-col border-2 m-4 mt-0 p-4" id="account-details">
            <h3 className="border-2">My Details</h3>
            <p className="border-2"><span className="font-bold">Name:</span> {Details.name}</p>
            <p className="border-2"><span className="font-bold">Email:</span> {Details.email}</p>
            <p className="border-2"><span className="font-bold">Phone:</span> {Details.phone}</p>
            <p className="border-2"><span className="font-bold">Room Number:</span> {Details.room_no}</p>
            <p className="border-2"><span className="font-bold">Hostel:</span> {Details.hostel}</p>
            <p className="border-2"><span className="font-bold">ID:</span> {Details.id}</p>
        </div>
    )
}

export default AccountDetails
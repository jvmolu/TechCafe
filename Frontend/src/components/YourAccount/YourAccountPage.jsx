import React from 'react'
import AccountDetails from './AccountDetails/AccountDetails'
import LoginAndSecurityDetails from './LoginAndSecurityDetails/LoginAndSecurityDetails';
import OrderHistory from './OrderHistory/OrderHistory';
import UdhariQuotaDetails from './UdhariQuotaDetails/UdhariQuotaDetails'

export default function YourAccountPage() {
    
    let accountDetails = {
        name: 'John Doe',
        email: 'john@gmail.com',
        phone: '+1 (123) 456-7890',
        room_no: '123',
        hostel: 'Dio',
        id: '123456789'
    }

    let balance = 297.5;
    let currency = "INR";

    let orders = [
        {
            id: 'orderID-012',
            date: '12/12/2019',
            product: 'Aloo Paratha',
            productID: 'pID-011',
            amount: 40,
            currency: 'INR',
            paymentMethod: 'Cash / UdhariQuota / Etherium',
            quantity: 1,
            status: 'Completed'
        },
        {
            id: 'orderID-013',
            date: '13/12/2019',
            product: 'Chatpata Potato Sandwich',
            productID: 'pID-013',
            amount: 50,
            currency: 'INR',
            paymentMethod: 'Cash / UdhariQuota / Etherium',
            quantity: 2,
            status: 'Completed'
        },
        {
            id: 'orderID-014',
            date: '14/12/2019',
            product: 'Chole Bhature',
            productID: 'pID-015',
            amount: 70,
            currency: 'INR',
            paymentMethod: 'Cash / UdhariQuota / Etherium',
            quantity: 4,
            status: 'Completed'
        }
    ]
    

    return (
        <div className="flex p-2">
            <div className="flex flex-col border-2 w-2/12">
                <a className="m-2" href="#account-details">Account Details</a>
                <a className="m-2" href="#udhari-quota">Udhari Quota Details</a>
                <a className="m-2" href="#order-history">Order History</a>
                <a className="m-2" href="#security-details">Login And Security Details</a>
            </div>
            <div className="flex flex-col border-2 px-4 w-10/12">
                <AccountDetails Details={accountDetails}/>
                <UdhariQuotaDetails balance={balance} currency={currency} />
                <OrderHistory orders={orders}/>
                <LoginAndSecurityDetails />
            </div>
        </div>
    )
}

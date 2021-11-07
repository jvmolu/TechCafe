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
        <div className="flex p-4">
            <AccountDetails Details={accountDetails}/>
            <UdhariQuotaDetails balance={balance} currency={currency} />
            <OrderHistory orders={orders}/>
            <LoginAndSecurityDetails />
        </div>
    )
}

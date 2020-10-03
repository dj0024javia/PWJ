import { Button } from '@material-ui/core'
import React from 'react'
import './PaymentPage.css'
import axios from './axios.js'
import { Link, useHistory } from 'react-router-dom'
function PaymentPage() {
    const history = useHistory()
    const sendPayment = async () => {
        const formData = {
            appId: "351920d27c46526be724da7cb29153",
            secretKey:"c125df6971e7bda4f257e698e085092f7cf2f357",
            orderId:"12311a1617s1a660a16199sf",
            customerEmail:"dj@gmail.com",
            customerPhone:"9033196940",
            orderAmount:"1",
            returnUrl: 'http://localhost:5001/api-function-webapp/us-central1/apiv1/paymentConfirmation',
            notifyUrl: ''
        }

        // appId: '351920d27c46526be724da7cb29153',
        //     orderId: 'asfasfasgsad',
        //     orderAmount: '1',
        //     orderCurrency: 'INR',
        //     orderNote: '',
        //     customerName: 'Dhaval Javia',
        //     customerEmail: 'dj0024javia@gmail.com',
        //     customerPhone: '9033196940',
        //     returnUrl: 'http://localhost:3000/response',
        //     notifyUrl: ''

        await axios.post('/reqURL', formData).then((res) => {
            console.log(res.data.responseURL)
            window.location.href = res.data.responseURL;
            // history.push(res.data.responseURL)
        }).catch((err) => {
            console.log(err)
        })

    }

    return (
        <div>
            <h1>Hello </h1>

            <form id="redirectForm" method="post" action="<ACTION_URL>">
                <input type="hidden" name="appId" value="<YOUR_APP_ID>" />
                <input type="hidden" name="orderId" value="<ORDERID>" />
                <input type="hidden" name="orderAmount" value="<ORDERAMOUNT>" />
                <input type="hidden" name="orderCurrency" value="<ORDER_CURRENCY>" />
                <input type="hidden" name="orderNote" value="<ORDERNOTE>" />
                <input type="hidden" name="customerName" value="<CUSTOMER_NAME>" />
                <input type="hidden" name="customerEmail" value="<CUSTOMER_EMAIL>" />
                <input type="hidden" name="customerPhone" value="<CUSTOMER_PHONE>" />
                <input type="hidden" name="returnUrl" value="<RETURN_URL>" />
                <input type="hidden" name="notifyUrl" value="<NOTIFY_URL>" />
                <input type="hidden" name="signature" value="<GENERATED_SIGNATURE>" />
                
            </form>

            <Button variant="contained" color="secondary" onClick={sendPayment}>
                    Secondary
        
                </Button>

        </div >
    )
}

export default PaymentPage

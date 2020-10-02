const functions = require('firebase-functions');
// Importing
const express = require("express");
const mongoose = require('mongoose');
const axios = require("axios");
// Imported Schema
// import Messages from './dbMessages.js'
// import Pusher from "pusher"
const cors = require('cors');
// import Users from './dbUsers.js'
const crypto = require('crypto');
// const request = require('request-promise');

// App config
const app = express()
// const port = process.env.PORT || 9000
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

// app.listen(port, () => console.log(`Listening on localhost port : ${port}`))


// Middleware


app.use(cors({ origin: true }))
app.use(express.json())
// Allow from any headers
// app.use((req, res, next) => {
//     res.setHeader("Access-Control-Allow-Origin", "*")
//     res.setHeader("Access-Control-Allow-Headers", "*")
//     next();
// })

// DB Config
// const conn_url = "mongodb+srv://admin:KyXUVQ0KGWFLrfjA@cluster0.gehq2.mongodb.net/whatsappdb?retryWrites=true&w=majority"

// mongoose.connect(conn_url, {
//     useCreateIndex: true,
//     useUnifiedTopology: true,
//     useNewUrlParser: true,
// })

// const db = mongoose.connection

// db.once("open", () => {
//     console.log("DB Connected")
//     const msgCollection = db.collection("messagecontents")
//     // const userCollection = db.collection("users")

//     const changeStream = msgCollection.watch()

//     changeStream.on('change', (change) => {
//         console.log(change)
//         // Working with pusher here
//         if (change.operationType === "insert") {
//             // Something Inserted. Active pusher.
//             const msgDetails = change.fullDocument
//             pusher.trigger("whatsapp-backend", "inserted", {
//                 user: msgDetails.user,
//                 message: msgDetails.message,
//             })
//         }
//         else {
//             console.log('Error triggering Pusher')
//         }

//     })
// })




// Api routes

app.get('/', (req, res) => res.status(200).send("Hello, it works!!"))

// Message Sync Api
// app.get()

app.get('/paymentConfirmation', (req, res) => {
    console.log("Response Received from CASHFREE::", req)
    res.status(201).send("OK")
})

app.post('/reqURL', (request, response) => {
    const formData = request.body
    const signatureData = "";

    formData["appId"] = "351920d27c46526be724da7cb29153"
    formData["secretKey"] = "c125df6971e7bda4f257e698e085092f7cf2f357"

    // let sortedkeys = Object.keys(formData)

    // for (var i = 0; i < sortedkeys.length; i++) {
    // 	k = sortedkeys[i];
    // 	signatureData += k + formData[k];
    // }
    // var signature = crypto.createHmac('sha256', secretKey).update(signatureData).digest('base64');
    // formData['signature'] = signature;

    let urldata = Object.keys(formData).map((k) => {
        return encodeURIComponent(k) + '=' + encodeURIComponent(formData[k])
    }).join('&')

    console.log('https://test.cashfree.com/api/v1/order/create?' + urldata)
    // let content = new FormUrlEncodedContent(formData);
    // console.log(content)
    let responseURL = ''
    axios.post('https://test.cashfree.com/api/v1/order/create?' + urldata)
        .then((res) => {
            // response.status(200).send(res.data.paymentLink)
            console.log(res.data.paymentLink)
            responseURL = res.data.paymentLink
            response.status(201).send({ responseURL: res.data.paymentLink })
            return
        })
        .catch((err) => {
            response.status(202).send(err.data)
            console.log(err)
        })


    // request(options)
    //     .then(function (response) {
    //         res.status(200).json(response);
    //     })
    //     .catch(function (err) {
    //         console.log(err);
    //     })

})


exports.apiv1 = functions.https.onRequest(app)
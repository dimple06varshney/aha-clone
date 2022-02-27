require("dotenv").config();
const express = require("express");
const Razorpay = require("razorpay");
const crypto = require('crypto');
const router = express.Router();
router.post("/orders/:id", async (req,res)=>{
    try{
         
        const instance = new Razorpay({
            key_id: "rzp_test_w2Db3IVWnj9nLm",
            key_secret: "atQwIR6PaOcrP46VsBYOWPx2"
        })

        const options = {
            amount: req.params.id*100,
            currency: "INR",
            receipt: "receipt_order_74394",
        }
        const order = await instance.orders.create(options);
        if(!order) return res.status(500).send("Some error occured");
        res.json(order);
    }
    catch(err){
        console.log("orders err:",err);
        res.status(500).send(err);
    }
})


//success path

router.post('/success', async (req, res) => {
    try {
      const {
        orderCreationId,
        razorpayPaymentId,
        razorpayOrderId,
        razorpaySignature,
      } = req.body;
  
      const shasum = crypto.createHmac('sha256', 'atQwIR6PaOcrP46VsBYOWPx2');
      shasum.update(`${orderCreationId}|${razorpayPaymentId}`);
      const digest = shasum.digest('hex');
  
      if (digest !== razorpaySignature)
        return res.status(400).json({ msg: 'Transaction not legit!' });
  
    //   const newPayment = PaymentDetails({
    //     razorpayDetails: {
    //       orderId: razorpayOrderId,
    //       paymentId: razorpayPaymentId,
    //       signature: razorpaySignature,
    //     },
    //     success: true,
    //   });

    //   await newPayment.save();
  
    console.log("orderCreationId",orderCreationId,razorpayPaymentId,
    razorpayOrderId,
    razorpaySignature);

      res.json({
        msg: 'Payment successfully done. Enjoy aha',
        orderId: razorpayOrderId,
        paymentId: razorpayPaymentId,
      });
    } catch (error) {
      res.status(500).send(error);
    }
  });

//###success###
module.exports = router;
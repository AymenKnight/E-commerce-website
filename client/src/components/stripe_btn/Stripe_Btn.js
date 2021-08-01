import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
import axios  from "axios"

export default function Stripe_Btn({price}) {

    const onToken=token=>{     
      axios({
        url:'/payment',
        method:"post",
        data :{
          token,
          amount :priceForStripe
        }
       
      }).then(res=>{
                alert("Payment Successful !");
      }).catch(error=>{
        console.log("error is : ",JSON.parse(error))
        alert("There was an issus in your Payment process, Please make sure you use the provided credit cart !! ")
      })
    }

    const priceForStripe=price*100;
    const publishKey =
      "pk_test_51IpBxhK3UtJvSv5b7SB16EQ8boz0fhthNqBMPLOPgN9CuE3GplzgdiVCor7onm1aK8k5RBX0OFAey0Nu1LmaFP5v000c3vgnAu";
    return (
      <StripeCheckout
        amount={priceForStripe}
        label="Pay Now"
        panelLabel="Pay Now"
        currency="USD"
        billingAddress
        shippingAddress
        stripeKey={publishKey}
        description={`Your Total is ${price} dz`}
        token={onToken}
      />
    );
}

import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

export default function Stripe_Btn({price}) {

    const onToken=token=>{
        console.log("PAy Operation with Token = ", token)
        alert("Payment Successful !")
    }

    const priceForStripe=price*100;
    const publishKey =
      "pk_test_51IpBxhK3UtJvSv5b7SB16EQ8boz0fhthNqBMPLOPgN9CuE3GplzgdiVCor7onm1aK8k5RBX0OFAey0Nu1LmaFP5v000c3vgnAu";
    return (
      <StripeCheckout
        amount={priceForStripe}
        label="Pay Now"
        panelLabel="Pay Now"
        currency="DZ"
        billingAddress
        shippingAddress
        stripeKey={publishKey}
        description={`Your Total is ${price} dz`}
        token={onToken}
      />
    );
}

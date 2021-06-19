import React, { useEffect, useRef, useState} from 'react';

export default function Paypal(props) {
    const [loaded, setLoaded] = useState(false);
    let paypalRef = useRef();

    useEffect(() => {
       const script = document.createElement('script');
       script.src=
       "https://www.paypal.com/sdk/js?client-id=AeDRWReijwjdAfI3Y3mm1j4vdqL2GVqLKvq8oW7ZCtxeeIXi1-tpknGhxUfKzxOAFnPBxOPINRo44K1q&currency=USD" 
        script.addEventListener("load", () => setLoaded(true));
        document.body.appendChild(script);

        if(loaded) {
            setTimeout(() =>{
                window.paypal
                    .Buttons({
                        createOrder: (data, actions) => {
                            return actions.order.create({   
                                purchase_units: [
                                    {
                                        description: props.description,
                                        amount: {
                                            currentcy_code: "USD",
                                            value: props.price
                                        }
                                    }
                                ]
                            })
                        },
                        onApprove: async (data,actions) => {
                            const order = await actions.order.capture();
                            console.log(order);
                        },
                    })
                    .render(paypalRef);
            });
        }
    },[loaded]);

    return (
        <div ref={paypalRef}></div>
    )
}

//export default Paypal
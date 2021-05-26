import React, {useState, useEffect} from 'react';
import { usePaystackPayment } from 'react-paystack';
import { Button, Input } from 'antd';




const MakePayment = () => {
  const [amount, setAmount] = useState("")

  const config = {
    reference: (new Date()).getTime(),
    // email: "user@example.com",
    amount: amount,
    publicKey: 'pk_test_d632bf4b9aa1e74745eb158cec8034961dc13b18'
};


const onSuccess = (reference) => {
  console.log(reference);
};
const onClose = () => {
  console.log('closed')


    const initializePayment = usePaystackPayment(config);
    return (
      <div>
        <Input
          placeholder="How much do you wabt to support us with"
          value={amount}
          onChange={(e)=>{
            setAmount(e.target.value)
          }}
        />
          <Button 
          type="primary"
          onClick={() => {
              initializePayment(onSuccess, onClose)
          }}>Paystack Hooks Implementation</Button>
      </div>
    );
};

function PaymentComponent() {
  return (
    <div>    
      <MakePayment />
    </div>
  );
}}

export default PaymentComponent;
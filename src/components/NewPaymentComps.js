import { Button, Input } from 'antd';
import React, {useState, useEffect} from 'react';
 
  import { usePaystackPayment } from 'react-paystack';

  

  const MakePayment = () => {
    const [amount, setAmount] = useState("")


    const config = {
      reference: (new Date()).getTime(),
      email: "user@example.com",
      amount: amount,
      publicKey: 'pk_test_dsdfghuytfd2345678gvxxxxxxxxxx',
  };
  

  const onSuccess = (reference) => {
    // Implementation for whatever you want to do with reference and after success call.
    console.log(reference);
  };


  const onClose = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
    console.log('closed')
  }

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
            style={{
              marginBottom:"30px", width:"300px", fontWeight:"bold"
            }}
            type="primary"
            onClick={() => {
                initializePayment(onSuccess, onClose)
            }}>Support Our Work</Button>
        </div>
      );
  };
  
  function NewPaymentComps() {
    return (
      <div>
        
        <MakePayment />
      </div>
    );
  }
  
  export default NewPaymentComps;
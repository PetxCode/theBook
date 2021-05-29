import { Button, Input } from 'antd';
import React, {useState, useEffect} from 'react';
 
  import { usePaystackPayment } from 'react-paystack';
import { useHistory } from 'react-router';
import { app } from '../base';

  

  const MakePayment = ({id}) => {
    const [amount, setAmount] = useState("")
const hist = useHistory()
    
  const [view, setView] = useState([])

  const viewDoc = async() => {
    await app.firestore().collection("books").doc(id).get()
    .then(show => {
      setView(show.data())
    })
  }

  useEffect(()=>{
      viewDoc()
  }, [])


    const config = {
      reference: (new Date()).getTime(),
      email: "user@example.com",
      amount: view.cost*100,
      publicKey: 'pk_test_d632bf4b9aa1e74745eb158cec8034961dc13b18',
  };
  

  const onSuccess = (reference) => {
    // Implementation for whatever you want to do with reference and after success call.
    hist.push('/')
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
          placeholder={view && view.cost}
          disabled={true}
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
  
  function NewPaymentComps({id}) {
    return (
      <div>
        <div>ID: {id}</div>
        <MakePayment id= {id} />
      </div>
    );
  }
  
  export default NewPaymentComps;
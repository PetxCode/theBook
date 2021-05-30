import { Button } from 'antd'
import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router'
import { app } from '../base'
import NewPaymentComps from "./NewPaymentComps"

export const BookDetail = () => {
  const {id} = useParams()

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

  return (
    <div
    style={{
      display:"flex",
      flexWrap:"wrap",
      justifyContent:"center",
      marginTop:"50px"
    }}
    >
     

      <div
      style={{
        display:"flex",
        flexDirection:"column",

      }}
      >
        <div> This is the Detail Page for Product selected: <br/> {id} </div>
        <div>

                  <img 
                    src={view && view.bookCover}
                    style={{
                      width:"300px",
                      height:"350px",
                      objectFit:"cover",
                      borderRadius:"10px 10px 0 0",
                      backgroundColor:"lightblue",
                    }}
                  />
                  <br/>
        </div>
        <br/>
        <div>book title: {view && view.name}</div>
        <div>book cost is: {view && view.cost}</div>

        <Button
                type='primary'
                danger
                style={{
                  width:"300px"
                 }}
                    onClick={()=>{
                      console.log("download")
                    }}

                >
                <a href={view && view.book} download="My_File.pdf" target={"_blank"} rel = "noopener noreferrer"> Download Here </a>
                </Button>
              
              <div
              style={{
                width:"100%",
                marginTop:"60px"
              }}
              >
                <NewPaymentComps id={id}/>
              </div>
      </div>
    </div>
  )
}



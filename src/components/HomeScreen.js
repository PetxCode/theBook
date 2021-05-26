import { Button } from 'antd'
import React, {useState, useEffect} from 'react' 
import moment from "moment"
import { app } from '../base'
import NewPaymentComps from './NewPaymentComps'


const HomeScreen = () => {

  const [viewBook, setViewBook] = useState([])
  const [toggle, setToggle] = useState(false)

  const handleToggle = (id) => {
    setToggle(!toggle)
  }

  const viewAllBook = async() => {
    await app.firestore().collection("books")
    .orderBy("createdAt", "desc")
    .onSnapshot(snapShot => {
      const r =[]
      snapShot.forEach(doc => {
        r.push({...doc.data(), id:doc.id})
      })
      setViewBook(r)
    })
  }


  useEffect(()=>{
    viewAllBook()
  },[])

  return (
    <div>
      
<div
          style={{
            marginTop:"40px",
            display:"flex",
            flexWrap:"wrap",
            justifyContent:"center"
          }}
          >
           {
              viewBook.map(({bookCover, book, id, name, createdAt})=>(
                <div key={id}
                style={{
                  width:"300px",
                  height:"400px",
                  borderRadius: "5px",
                  backgroundColor:"lightblue",
                  margin:"10px",
                  marginBottom:"40px"
                }}
                >  
                <div> 
                  <img 
                    src={bookCover}
                    style={{
                      width:"100%",
                      height:"350px",
                      objectFit:"cover",
                      borderRadius:"10px 10px 0 0"
                    }}
                  />
                   </div>
                   
                <div
                style={{
                  fontWeight:"bold",
                  fontSize:"20px",
                  justifyContent:"center",
                  display:"flex"
                }}
                > {name} </div>

                <div
                style={{
                  fontWeight:"bold",
                  fontSize:"10px",
                  justifyContent:"center",
                  display:"flex"
                }}
                >Uploaded  {
                  createdAt === null ? createdAt : moment(createdAt.toDate()).fromNow()
                } </div>
                <Button
                type='primary'
                danger
                style={{
                  width:"100%"
                 }}
                    onClick={()=>{
                      console.log("download")
                    }}

                >
                <a href={book} download="My_File.pdf" target={"_blank"} rel = "noopener noreferrer"> Download Here </a>
                </Button>
               <div>
              <Button
              style={{
                width:"100%"
              }}
              onClick={()=>{handleToggle(id)}}>
                {
                  toggle ? "I have change my mind" : "Click to Suppot us"
                }
              </Button>

{
  toggle ? <NewPaymentComps/> : null
}

                 
               </div>
             </div>
             
              ))
            }
          </div>
  
    </div>
  )
}

export default HomeScreen

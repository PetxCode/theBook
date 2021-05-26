import React,{useState, useEffect} from 'react'
import { app } from '../base'
import firebase from "firebase"
import { Button, Input } from 'antd'

const AddBooks = () => {
  const[name, setName] = useState("")
  const [bookCover, setBookCover] = useState(null)
  const [book, setBook] = useState(null)
  const [viewBook, setViewBook] = useState([])

  const uploadBook = async(e) => {
    const file = e.target.files[0]
    const storageRef = app.storage().ref()
    const fileRef = storageRef.child(file.name)
    await fileRef.put(file)
    setBook(await fileRef.getDownloadURL())
  }

  const uploadBookCover = async(e) => {
    const file = e.target.files[0]
    const storageRef = app.storage().ref()
    const fileRef = storageRef.child(file.name)
    await fileRef.put(file)
    setBookCover(await fileRef.getDownloadURL())
  }


  const uploadBooksTOCloud = async() => {
    await app.firestore().collection("books").doc().set({
      book,
      bookCover,
      name,
      createdAt: firebase.firestore.FieldValue.serverTimestamp()     
    })
  }

  return (
    <div
    style={{
      display:"flex",
      justifyContent:"center",
      flexWrap:"wrap",
      marginTop:"100px"
    }}
    >
      <div
      style={{
        display:"flex",
        flexDirection:"column"
      }}
      >
        <div
        style={{
          display:"flex",
          width:":300px",
          justifyContent:"center",
          marginBottom:"20px",
          fontWeight:"bold",
          fontSize:"20px",
          textTransform:"uppercase"
        }}
        >Add a Book</div>
        <div
         style={{
        display:"flex",
        flexDirection:"column",
        width:"300px"
      }}
        >
          <Input 
            type="file"
            onChange={uploadBook}
          />
          <Input 
            type="file"
            onChange={uploadBookCover}
          />
          <Input 
            placeholder="Book title"
            value={name}
            onChange={(e)=>{
              setName(e.target.value
                
                )
            }}
          />
          <Button
          type= "primary"
          danger
          onClick={uploadBooksTOCloud}
          >Uplad</Button>
</div>
      </div>
    </div>
  )
}

export default AddBooks

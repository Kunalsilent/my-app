import React , {useState} from 'react'
import Covid from './components/covid'

export const App = () => {
  const [image, setImage] = useState("")
  const submitImage=() =>{
    const data = new FormData()
    data.append("file", image)
    data.append("upload_preset", "rkbetzk1")
    data.append("cloud_name", "dsseuy4i2")

    fetch("https://api.cloudinary.com/v1_1/dsseuy4i2/image/upload", {
  method:"post",
  body:data
})
.then((res)=>res.json())
.then((data)=>{
  console.log(data);
})
.catch((err)=>{
  console.log(err)
})

  }
  return (
    <>
    <Covid/ >
    <div>
      <div>
        <input type="file" onChange={(e)=>setImage(e.target.files[0])} />
        <button onClick={submitImage}> upload</button>
      </div>
    </div>
    </>
  )
}
export default App
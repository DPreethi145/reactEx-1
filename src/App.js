import React, { useState } from 'react'

 const App = () => {

const[name,setName]=useState("XYZ")
const[data,setData]=useState(0)
const [user, setUser] = useState({name: "John", age:32 , salary:'40k' })

const changeState=()=>{
   setName("ABC")
}

const updateObjState = () => {
    setUser(prevState=>{
        return({
            ...prevState,
            name: 'jenni',
            age : 50,
            salary:'60k'
        })
    })
}
  return (
  <>
  <center>
    <h1>HOOKS : useState()</h1>
  <h4>state variable : {name}</h4>
  <button onClick={changeState}>Click here to update state </button>
  <h4>state variable : {data}</h4>
  <button onClick={()=>setData(data+1)}>Click here for inline state</button>
  <p>State as an object. {user.name}</p>
  <p>State as an object. {user.age}</p>
  <p>State as an object. {user.salary}</p>
  <button onClick={updateObjState}>Click to update object state variable value</button>
  </center>
  </>
  )
}
export default App
import React , {useState} from "react"
import { Task } from "./Task"



function Home() {
  const [task, setTask] = useState([])
  const [title , settitle] = useState("")
  const [description , setdescription] = useState("")
  console.log(title, description)

  const submitHandler = (e) => {
    e.preventDefault();
  }
  return (
    <div className="container">
        <h1>DAILY GOALS </h1>
        <form onSubmit={submitHandler}>
            <input type="text" placeholder="Title"  value={title} onChange={(e)=>settitle(e.target.value)}/>
            <textarea placeholder="description" value={description} onChange={(e)=>setdescription(e.target.value)}></textarea>


            <button type="submit"> ADD</button>
        </form>

        {task.map(()=>(
          <Task />
        ))
        }

    </div>
  )
}

export {Home}
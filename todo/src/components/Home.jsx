import React , {useEffect, useState} from "react"
import { Task } from "./Task"



function Home() {

  const intialArr = localStorage.getItem("task")?JSON.parse(localStorage.getItem("task")): [];
  const [tasks, setTasks] = useState(intialArr);
  const [title , setTitle] = useState("");
  const [description , setdescription] = useState("");

  const deleteTask = (index)=>{
  const filteredArr = tasks.filter((val , i)=>{
        return i !== index;
    });
    console.log(filteredArr);
    setTasks(filteredArr);  

  };
  useEffect(()=>{
    localStorage.setItem("tasks", JSON.stringify(tasks));
  },[tasks])

  

  const submitHandler = (e) => {
    e.preventDefault()

    setTasks  ([...tasks , { title, description},]);
    setTitle(" ");
    setdescription(" ");

  };
  return (
    <div className="container">
        <h1>DAILY GOALS </h1>
        <form onSubmit={submitHandler} >
            <input type="text" placeholder="Title"  value={title} onChange={(e)=>setTitle(e.target.value)}/>
            <textarea placeholder="description" value={description} onChange={(e)=>setdescription(e.target.value)}></textarea>


            <button type="submit"> ADD</button>
        </form>

        {tasks.map((item, index)=>(
          <Task key={index}
           Title={item.title}
           description={item.description}
           deleteTask={deleteTask}
           index={index} />
        ))
        }

    </div>
  )
}

export {Home}
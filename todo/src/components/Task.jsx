import React from 'react'

function Task({ Title , description ,deleteTask,index}) {
  return (
    <div className='task'> 

    <div className='title'> 
        <p>
          {Title}
        </p>
        
        <span> {description} </span>
    </div>

    <div >
    <button onClick={()=>{ deleteTask(index)} }   >
        -
    </button>
    </div>
     

    </div>
  )
}

export {Task}
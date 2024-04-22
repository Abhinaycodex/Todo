import React from 'react'

function Task({ Title , description}) {
  return (
    <div className='task'> 

    <div className='title'> 
        <p>
          {Title}
        </p>
        
        <span> {description} </span>
    </div>

    <div >
    <button >
        -
    </button>
    </div>
     

    </div>
  )
}

export {Task}
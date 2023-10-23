"use client";
import React,{ useState } from 'react'

const page = () => {
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  const [mainTask, setmainTask] = useState([]);
 

  const submitHandler = (e) =>{
    e.preventDefault()
    setmainTask([...mainTask,{ title,desc}])
    setdesc("")
    settitle("")
    console.log(mainTask);
  }

  const deleteHandler = (i) =>{
    let copyTask = [...mainTask]
    copyTask.splice(i,1)
    setmainTask(copyTask)
     
  }
  let renderTask = <h2> No Task Availabale</h2> 


  if(mainTask.length>0){
    renderTask = mainTask.map((t,i)=>{
      return(
        <li key={i} className='flex items-center justify-between'>
          <div className=' flex items-center justify-between mb-5 w-2/3'>
          <h5 className=' text-2xl font-semibold'>{t.title}</h5>
          <h6 className="text-xl font-medium">{t.desc}</h6>
          </div>
          <button 
          onClick={()=>{deleteHandler(i)}} className=' bg-red-400 rounded font-bold text-2xl px-1 py-1  text-white m-2'>Delete</button>
          
        </li>
        
        )
      
    })

  }

  

  return (
    <>
    
    <h1 className=' bg-black text-white text-center font-bold text-5xl p-5 font-serif' > Vignesh's Todolist</h1>
    <form onSubmit={submitHandler}>
      <input required type='text' className=' border-zinc-800 border-4 m-8  py-4 px-4  mt-6  ml-52'
      placeholder='Enter Task'
      value={title}
      onChange={(e)=>{
        settitle(e.target.value)

      }}/>
      <input type='text' className=' border-zinc-800 border-4   py-4 px-4  mt- ml-5'
      placeholder=' Enter description'
      value={desc}
      onChange={(e)=>{
        setdesc(e.target.value)

      }}
      />
      <button className=' bg-black px-6 py-4 ml-5 text-white rounded text-2xl font-bold top-2 mt-16' > 
        Add task
      </button>
       
    </form>
    <hr/>
    <div className=' p-8  bg-slate-300'>
      <ul >
        {renderTask}
      </ul>

    </div>
    </>
    
  )
}

export default page
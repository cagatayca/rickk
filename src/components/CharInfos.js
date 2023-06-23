import React from 'react'

function charInfos({ messages ,searchName }) {
  return (
    
    <div className="divide-gray-200 flex flex-wrap mx-1 lg:-mx-4 rounded-xl">
        {messages.filter((item) => {
          return searchName.toLowerCase() === "" ? item : item.name.toLowerCase().includes(searchName)
        }).map((person) => (
          <div key={person.id} className="max-w-sm rounded-3xl  dark:bg-gray-800 mx-auto my-4 shadow-[0_0_16px_8px_rgba(0,0,0,0.3)] hover:shadow-lime-500 shadow-indigo-500 rounded-xl">
            
            <img className="m-10 rounded-t-lg shadow-[0_0_16px_8px_rgba(0,0,0,0.3)] shadow-indigo-500 rounded-3xl" src={person.image} alt="" />
            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{person.name}</h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{person.species}</p>
            </div>
        </div>
          
        ))}
      

       
      </div>
    
  )
}

export default charInfos
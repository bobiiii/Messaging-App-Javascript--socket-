/* eslint-disable react/prop-types */

import { useState } from "react";

// eslint-disable-next-line no-unused-vars
function UsersList({ people, selectPeople }) {
const [activeChat, setActiveChat]= useState(null)

  const handleUserClick = (selectedPerson) => {
    selectPeople(selectedPerson);
    setActiveChat(selectedPerson)
  }

  return (
    <div>
<h4 className="text-center font-bold text-xl my-2">Select Conversation</h4>
      <div >
        {people.map((item) => {
          return (
            <div onClick={() => handleUserClick(item.id)} key={item.id} className={`flex m-4 bg-slate-200 rounded-md p-2  ${activeChat ===  item.id ? 'border border-blue-700 bg-blue-600 text-white' : 'border border-transparent hover:border-blue-300' }`}  >
              <span className="text-3xl">{item.img}</span>
              <h3 className="ms-3">{item.name}</h3>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default UsersList;

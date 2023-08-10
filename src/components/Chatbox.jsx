 import UsersList from "../components/UsersList"
 import Messages from "../components/Messages"
import { useState } from "react"


const peopleList = [{
id:1 ,
name:"Mamoun",
img:"💆🏻",
messages:[
  "abc", "xyz", "123"
]

},{
id:2 ,
name:"Usman",
img:"👯🏻",
messages:[
  "uhuhk", "hucgb", "xbc"
]
},{
id:3 ,
name:"Babar",
img:"💆🏻",
messages:[
  "xfgfxg", "hjfgh", "ftyhf"
]
},{
id:4 ,
name:"Areesh",
img: "👮🏼",
messages:[
  "efg", "wdas", "sadasd"
]
},
]




function Chatbox() {
  const [people, setPeople] = useState(peopleList)
  const [currUser, setCurrUser] = useState(peopleList[0])
  
  const [messages, setMessages] = useState(peopleList[0].messages)
  

  const handlePeopleClick= (selectedUserId)=>{
    
    const selectedUser = people.find(person => person.id == selectedUserId);
    console.log(selectedUser)
    if (selectedUser) {
      setMessages(selectedUser.messages);
      setCurrUser(selectedUser)
    }
  }
  return (
    <div className="h-screen  bg-stone-700">
        <div className="text-center text-white fw-bolder  text-3xl py-2">ChatBox</div>
        <div className="flex h-3/4">
        <div className="w-1/4 bg-neutral-300">
            <UsersList selectPeople={handlePeopleClick} people={people} setPeople={setPeople} setMessages={setMessages}/>
        </div>
        <div className="w-3/4 bg-neutral-200">
            <Messages messages={messages} currUser={currUser} />
        </div>

        </div>

        </div>
  )
}

export default Chatbox
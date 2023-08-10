import {Link} from "react-router-dom" 

function Main() {
    return (
      <div className="h-screen flex flex-col justify-center items-center bg-slate-300">
        <h3 className="text-3xl fw-bolder my-2 ">Main Page</h3>
        <Link to="/chatbox">
        <button  className=" bg-blue-500 text-white p-3 rounded-md ">Goto Chatbox</button>
        </Link>
      </div>
    )
  }
  
  export default Main
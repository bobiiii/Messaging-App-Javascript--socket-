/* eslint-disable react/prop-types */

// eslint-disable-next-line react/prop-types
function Messages({messages, currUser}) {
  return (
    <div className=" w-full">
      <div className="bg-zinc-300  py-3 border-b-2 border-blue-700">
        <div className="text-black">
          <h3 className="font-semibold text-lg ms-10">
          {currUser.name}
          &nbsp;
          (<span className="text-green-500 text-sm font-normal"> active now </span>)
          </h3>
        </div>
      </div>
      <div className="w-11/12 mx-auto">
        {messages.map((item, i)=>{
          return(
          <div key={i} className="bg-slate-100 px-3 py-2 rounded-md my-4 max-w-[600px]">
          <p>{item}</p>
          </div>)
        })}
      </div>
    </div>
  )
}

export default Messages

const Footer = () => {
  return (
    <footer className="h-auto e ">
        <div className="h-[25rem] w-full grid-rows-2 relative ">
            <div className=" bg-red-500 h-1/2 w-full"></div>
            <div className=" bg-blue-500 h-1/2 w-full"></div>
            <div className="absolute top-0 h-full flex justify-center items-center w-full  border-2">
                <div className="w-[90%] shadow-lg  flex gap-4 flex-col  items-center py-3 rounded-lg lg:w-[70%]">
                    <h2 className="text-center lg:text-2xl">Interested in working together? We should queue up a time to chat</h2>
                    <p>
                    Let'd do this!!!.   
                    </p>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer
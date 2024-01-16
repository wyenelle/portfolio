import NavDesktop from './nav-desktop'
import { NavMobile } from './nav-mobile'
import ReactJpg from '../../assets/react.jpg'

 const Navigation = () => {
  return (
    <nav className=" h-auto fixed top-0  py-3   right-0 left-0 bg-black text-white z-10 lg:py-0 ">
      <div className="flex justify-between items-center  w-[90%] mx-auto ">
        <div className='lg:flex gap-4 items-center'>
          <div className=" h-[2.5rem] w-[2.5rem] rounded-full lg:w-[3rem] lg:h-[3rem]  ">
            <img
              src={ReactJpg}
              alt="portfolio photo"
              className="h-full w-full object-cover border-2 border-blue-500 rounded-full"
            />
          </div>
          <h1 className="hidden lg:block font-[700]">Favour Timothy</h1>
        </div>
        <NavDesktop />
        <NavMobile />
      </div>
    </nav>
  )
}
export default Navigation
import {FaXTwitter, FaLinkedin,FaGithub,} from 'react-icons/fa6'
import {SiGmail} from 'react-icons/si'
import {BsFillTelephoneFill} from 'react-icons/bs'

const PersonalInfo = () => {
  return (
    <div className='col-span-2 lg:col-span-1  flex flex-col gap-[2rem] justify-center  h-[30rem] lg:gap-[2.5rem]'>
        <div className="">
            <h1 className='text-2xl font-[700] mb-[0.8rem] lg:text-3xl'>Favour Timothy</h1>
            <div className='flex flex-col  justify-between w-1/2 lg:flex-row '>
            <p className='text-sm text-gray-400'>Frontend Developer </p>
            
            

            </div>
        </div>
        <p className=' w-11/12'>
        👋 Hello, i'm a passionate web development based in Nigeria. With a keen interest in Frontend web development, I bring creativity and a solutions-driven mindset to every project.
        </p>
        <div className='hidden italic lg:flex shrink-0 gap-7 flex-wrap rounded-lg w-11/12'>
            <p className='text-gray-400 text-xl font-[600] border px-3'>HTML</p>
            <p className='text-gray-400 text-xl font-[600] border px-3'>CSS</p>
            <p className='text-gray-400 text-xl font-[600] border px-3'>TailwindCSS</p>
            <p className='text-gray-400 text-xl font-[600] border px-3'>Javascript</p>
            <p className='text-gray-400 text-xl font-[600] border px-3'>React</p>
            <p className='text-gray-400 text-xl font-[600] border px-3'>Typescript</p>
            <p className='text-gray-400 text-xl font-[600] border px-3'>Vue</p>
            <p className='text-gray-400 text-xl font-[600] border px-3'>Node</p>
        </div>
        <div className='flex items-center justify-between w-1/2 '>
            <a href="https://twitter.com/shunnode">
                <FaXTwitter size={20}/>
            </a>
            <a href="mailto:favourkcb@gmail.com">
                <SiGmail size={20}/>
            </a>
            <a href="https://www.linkedin.com/in/favour-timothy-234a07182/">
                <FaLinkedin size={20}/>
            </a>
            <a href="https://github.com/wyenelle">
                <FaGithub size={20}/>
            </a>
            <div className='hidden lg:block'>
             <BsFillTelephoneFill/>
            <address className='text-gray-400 hidden '> +2348126866823 </address>
            </div>

        </div>
    </div>
  )
}

export default PersonalInfo
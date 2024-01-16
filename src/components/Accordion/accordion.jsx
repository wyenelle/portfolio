import { motion } from 'framer-motion';
import { useState } from 'react';

const tabs = [
    {id: 'lagos',label: 'lagos'},
    {id: 'abuja',label: 'abuja'},
    {id: 'Beenue',label: 'Beenue'},
    {id: 'Abia',label: 'Abia'},
]
const Tabs = () => {
    const [isActive,setIsActive] = useState(tabs[0].id)

  return (
        <div>
            <div className='flex space-x-1'>
                {
                    tabs.map(tab => (
                        <button key={tab.id} 
                            onClick={() => setIsActive(tab.id)}
                            className={`${isActive === tab.id ? "bg-blue-500 ": "hover:opacity-50"} rounded-full px-3 py-1.5  text-sm font-medium text-white outline-2 outline-sky-400 focus-visible:outline`}
                        >
                            {tab.label} </button>
                    ))
                }
            </div>
            <div className='flex justify-start'>
                <motion.div layoutId="red" className='h-5 w-5 rounded-full bg-red-500' />

                
            </div>
        </div>
  );
};

export default Tabs;

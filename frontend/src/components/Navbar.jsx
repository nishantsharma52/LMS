import { School } from 'lucide-react'
import React from 'react'

const Navbar = () => {
    return (
        <div
            div className=' h-16 dark:bg-[#0A0A0A] bg-white border-b dark:border-b-gray-800 border-b-gray-200 fixed top-0 left-0 right-0 duration-300 z-10 '>
            {/* desktop */}
            <div className=' max-w-7xl mx-auto hidden md:flex justify-between items-center h-full gap-10'>
                <div className='flex items-center gap-2'>
                    <School size={"30"} />
                    <h1 className='hidden md:block font-extrabold texy-2xl'>E-Learning</h1>
                </div>
                {/* user icons and dark mode icon */}
                <div>
                    
                </div>

            </div>

        </div>
    )
}

export default Navbar
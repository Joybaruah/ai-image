import Image from 'next/image'
import React from 'react'

function Header() {
    return (
        <header className='flex p-4 justify-between sticky top-0 bg-white z-50 shadow-md'>
            {/* left */}
            <div className='flex space-x-2 items-center' >

                <Image
                    src={"https://seeklogo.com/images/O/open-ai-logo-8B9BFEDC26-seeklogo.com.png"}
                    alt='logo'
                    width={30}
                    height={30}
                />

                <div>
                    <h1 className='font-bold'>
                        <span className='text-violet-500'>AI</span> Image Generator
                    </h1>
                    <h2 className='text-xs'>Powered by DALL·E 2 and Chat GPT</h2>
                </div>
            </div>

        </header>
    )
}

export default Header
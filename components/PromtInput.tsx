'use client'

import React, { useState } from 'react'

function PromtInput() {

    const [input, setInput] = useState('')

    return (
        <div className='m-10'>
            <form className='flex flex-col lg:flex-row shadow-md shadow-slate-400/10 border rounded-md lg:divide-x' >

                <textarea
                    value={input}
                    placeholder={"Enter a promt..."}
                    onChange={(e) => setInput(e.target.value)}
                    className='flex-1 px-4 py-2 rounded-md outline-none' />

                <button
                    type='submit'
                    disabled={!input}
                    className={`px-4 py-2 ${input ? 'bg-violet-500 text-white transition-colors duration-200' : 'text-gray-300 cursor-not-allowed'}`}>
                    Generate
                </button>

                <button
                    type='button'
                    className='px-4 py-2 bg-violet-400 text-white transition-colors duration-200 font-bold
                disabled:text-gray-300 disabled:cursor-not-allowed disabled:bg-gray-400'>Use Suggestion</button>

                <button
                    type='button'
                    className='px-4 py-2 bg-white text-violet-500 border-none transition-colors duration-200 
                rounded-b-md md:rounded-r-md md:rounded-bl-none font-bold'>New Suggestion</button>

            </form>
        </div>
    )
}

export default PromtInput
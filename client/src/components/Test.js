import React, { useState } from 'react'

function Test() {

    const [value, setvalue] = useState("");

    const changeuppercase = () => {
        setvalue(value.toUpperCase());
    }
    const changeValue = (event) => {
        setvalue(event.target.value)
    }

    const resetFunction=()=>{
        setvalue("")
    }

    return (
        <div>
    

    

            {/* <div className="max-w-md mx-auto my-4">
                <label htmlFor="comment" className="block text-gray-700 font-bold mb-2">
                    Function Code
                </label>
                <textarea
                    value={value}
                    onChange={changeValue}
                    id="comment"
                    name="comment"
                    rows="4"
                    className="w-full px-12 py-5 text-gray-700 border rounded-lg focus:outline-none focus:shadow-outline border-cyan-400"
                    placeholder="Enter your Text..."
                />
                <button onClick={changeuppercase}
                 className="px-4 py-2 bg-white text-black font-medium rounded-md shadow-md transition-all duration-300 hover:shadow-lg hover:scale-105 border-2 border-transparent hover:border-pink-500 bg-gradient-to-r from-pink-300 via-purple-300 to-orange-300">
                    Convert UpperCase
                </button>

                <button className="mx-2 px-4 py-2 bg-white text-black font-medium rounded-md shadow-md transition-all duration-300 hover:shadow-lg hover:scale-105 border-2 border-transparent hover:border-pink-500 bg-gradient-to-r from-pink-300 via-purple-300 to-orange-300">
                    Convert UpperCase
                </button>
            </div> */}
            <textarea  id=""  value={value} onChange={changeValue}></textarea>
            <button onClick={changeuppercase}>Upper</button>
                <button onClick={resetFunction}>Reset</button>

        </div>
    )
}

export default Test

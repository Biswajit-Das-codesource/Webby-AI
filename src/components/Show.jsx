import React, { useState } from "react";
import run from "./gemini";

function Show() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false); // New loading state
    const [welcome,setwelcome]=useState(true)
  // Function to handle sending the prompt
  async function sendMessage() {
    setwelcome(false)
    setLoading(true); // Show the loading spinner when the data is being fetched
    const data = await run(input); // Await the result of the run function

    // Bold key points (anything surrounded by **)
    const boldData = data.replace(
      /\*\*(.*?)\*\*/g,
      '<strong class="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">$1</strong>'
    );

    setResult(boldData); // Set the result state with the returned data
    setLoading(false); // Stop the loading spinner
  }

  return (
    <div className="h-[91vh] flex justify-center items-center flex-col bg-black overflow-auto">
        {
            welcome ?<h2 className="text-4xl font-bold tracking-tight text-white text-center mt-14 p-4">
           Start Your Journey
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
              With AI (Artificial Intelligence)
            </span>
          </h2>: ""
        }
      <div className="w-[90%] md:w-1/2 mb-4 absolute bottom-0 flex bg-black border-2 border-white rounded-4xl">
        <input
          type="text"   
          className="w-full h-12 rounded-4xl bg-black text-white md:px-4 focus:outline-none focus:ring-2font-light "
          onChange={(e) => setInput(e.target.value)} // Set input value on change
          placeholder="Enter your prompt here"
        />  
        <button
          className="bg-white text-gray-800 px-6 py rounded-full hover:bg-gray-200 transition duration-300 font-bold"
          onClick={sendMessage}
        >
          Send
        </button>
      </div>
      <div className="w-full h-screen bg-gray-black text-white md:px-40 rounded-xl shadow-lg flex  flex-col items-center  pb-20 sm:w-full px-10">
        <div className="h-fit w-full flex justify-center items-center pb-40 pt-10 sm:px-40">
          {loading ? (
            <div className="flex justify-center items-center h-auto ">
              <div className="w-full h-8 rounded-full">
                <img src="https://i.redd.it/ubbi1p7z7euc1.gif"/>
              </div>
            </div>
          ) : (
            result && (
              <p
                className="whitespace-pre-line font-medium"
                dangerouslySetInnerHTML={{ __html: result }}
              ></p>
            )
          )}
        </div>

        {/* Input and button */}

        <div className="flex justify-center"></div>
      </div>
    </div>
  );
}

export default Show;

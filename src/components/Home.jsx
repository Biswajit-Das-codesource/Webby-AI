import React from "react";
import { Link } from "react-router";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center p-8 relative">
      {/* Background Lines */}
      <div className="absolute inset-0 bg-[radial-gradient(circle, rgba(0,0,0,1) 60%, rgba(45,45,58,1) 100%)]">
        <div className="absolute inset-0 bg-grid-line opacity-10"></div>
      </div>

      {/* Header */}

      {/* Main Section */}
      <main className="flex flex-col items-center text-center mt-20 space-y-6 z-10">
        <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
          Power Your World
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
            With AI Intelligence
          </span>
        </h2>
        <p className="text-gray-400 max-w-3xl">
          Discover the limitless potential of artificial intelligence. Empower your ideas and elevate your projects with cutting-edge AI technology tailored for you.
        </p>
        <div className="flex space-x-4">
          <button className="bg-gradient-to-r from-green-400 to-blue-500 px-6 py-3 rounded-full font-medium hover:shadow-lg hover:from-blue-500 hover:to-green-400">
            <Link to="/show">Get Started</Link>       
          </button>
          <button className="border border-gray-700 px-6 py-3 rounded-full font-medium hover:bg-gray-800">
          <Link to="/about">Learn More</Link>        
          </button>
        </div>
      </main>

      {/* Offers Section */}
      <section className="mt-20 w-full max-w-6xl space-y-8 z-10">
        <h3 className="text-xl font-semibold text-left">AI-Powered Solutions 🚀</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="p-6 bg-gradient-to-r from-blue-900 to-black rounded-lg border border-gray-700 shadow-md space-y-4">
            <h4 className="text-lg font-bold">Creative Content Generation</h4>
            {/* <p className="text-gray-400 text-sm">
              Generate unique, engaging, and high-quality content for blogs, social media, and more with the power of AI.
            </p> */}
            {/* <button className="text-blue-500 text-sm font-medium hover:underline">
              Discover More →
            </button> */}
          </div>
          {/* Card 2 */}
          <div className="p-6 bg-gradient-to-r from-purple-900 to-black rounded-lg border border-gray-700 shadow-md space-y-4">
            <h4 className="text-lg font-bold">Intelligent Automation</h4>
            {/* <p className="text-gray-400 text-sm">
              Streamline workflows and enhance productivity with AI-driven automation solutions tailored to your needs.
            </p> */}
            {/* <button className="text-blue-500 text-sm font-medium hover:underline">
              Discover More →
            </button> */}
          </div>
          {/* Card 3 */}
          <div className="p-6 bg-gradient-to-r from-blue-800 to-black rounded-lg border border-gray-700 shadow-md space-y-4">
            <h4 className="text-lg font-bold">Data Insights & Analysis</h4>
            {/* <p className="text-gray-400 text-sm">
              Unlock actionable insights from complex data with AI-powered analytics and visualization tools.
            </p> */}
            {/* <button className="text-blue-500 text-sm font-medium hover:underline">
              Discover More →
            </button> */}
          </div>
        </div>
      </section>
    </div>
  );
}

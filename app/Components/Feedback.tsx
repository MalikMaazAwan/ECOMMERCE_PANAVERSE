import React from 'react'

export default function Feedback() {
  return (
    <div>
    <div
      className="flex items-center  mx-auto leading-8  h-screen  bg-stone-500"
      id="contact"
      >
      <div className="text-gray-500 px-10 mt-32 mx-auto">
        <h1 className="text-center text-4xl text-white font-bold">Contact</h1>
        <p className="text-center text-white my-5">Get in touch with me</p>

        <form action="https://formspree.io/f/mbjepjew" method="POST">
          <div>
            <input
              required
              placeholder="Your Name "
              type="text"
              name="name"
              className="p-2 w-80 bg-transparent border-2 rounded-md  focus:outline-none text-white"
            />
            <div/>
            
            <div>
              <input
                required
                placeholder="Your Email "
                type="email"
                name="email"
                className=" my-3 p-2 w-80 bg-transparent border-2 rounded-md  focus:outline-none text-white"
              />
            </div>

            <div>
              <textarea
                required
                rows={6}
                placeholder="Give your feedback on this website..."
                name="message"
                className="p-2  w-80 bg-transparent border-2 rounded-md  focus:outline-none text-white"
              />
            </div>
            <button
              className="hover:bg-white  active:bg-white active:text-red-700 hover:text-stone-700 text-white font-bold py-1 px-4 ml-1  mt-10 w-80 rounded transition-colors duration-300"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  )
}

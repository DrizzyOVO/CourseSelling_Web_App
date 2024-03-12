import React from 'react'

const Landing = () => {
  return (
    <div className="mt-32" style={{justifyContent: "center" }}>
        <h1 style={{  fontWeight: 600, display: "flex", justifyContent: "center" }} className="sm:text-2xl md:text-4xl lg:text-5xl xl:text-7xl">
            Welcome to <span className='text-indigo-500'>&nbsp;coursera Admin!</span>
        </h1>
        <h3 style={{ fontWeight: 600, display: "flex", justifyContent: "center" }} className="sm:text-xl md:text-3xl lg:text-4xl xl:text-5xl mt-7">
            Go to the <span className='text-indigo-500'>&nbsp;create course&nbsp;</span> section and create em!!!
        </h3>
    </div>
  )
}

export default Landing
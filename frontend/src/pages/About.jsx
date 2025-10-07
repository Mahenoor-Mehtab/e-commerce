import React from 'react'
import Titles from '../component/Titles'
const About = () => {
  return (
    <>
      <div className="bg-[#121212] text-white py-20 px-4 sm:px-6 lg:px-8 font-sans ">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl  text-center mb-12 uppercase tracking-wider text-teal-300">
            <Titles text1={"ABOUT"} text2={"US"} />
          </h2>


          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2 w-full relative">

              <div className="w-full aspect-[4/3] bg-gray-700 rounded-lg overflow-hidden shadow-2xl">
                <img
                  src="https://imgs.search.brave.com/5MC9YdKwnjs7fYL7Hza1blSox0WTApb0ye6miwioKTc/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9m/YXNoaW9uLWNsb3Ro/aW5nLWhhbmdlcnMt/c2hvd18xMTUzLTYy/OTguanBnP3NlbXQ9/YWlzX2h5YnJpZCZ3/PTc0MCZxPTgw"
                  alt="Fashion clothing hangers show"
                  className="w-full h-full object-cover"
                />

              </div>
            </div>
            <div className="md:w-1/2 w-full space-y-6 text-gray-300">
              <p className="leading-relaxed">
                <span className="font-bold text-white">OneCart</span> born for smart, seamless shopping—created to deliver quality products,
                trending styles, and everyday essentials in one place. With reliable service, fast delivery,
                and great value, OneCart makes your online shopping experience simple, satisfying,
                and stress-free.
              </p>

              <p className="leading-relaxed">
                modern shoppers—combining style, convenience, and affordability. Whether it’s
                fashion, essentials, or trends, we bring everything you need to one trusted platform
                with fast delivery, easy returns, and a <span className="font-bold text-white">customer-first experience</span> you’ll love.
              </p>

              <div>
                <h3 className="text-xl font-semibold mt-6 mb-3 text-white">
                  Our Mission
                </h3>
                <p className="leading-relaxed">
                  Our mission is to redefine online shopping by delivering quality, affordability, and
                  convenience. OneCart connects customers with trusted products and brands, offering a
                  seamless, customer-focused experience that saves time, adds value, and fits every
                  lifestyle and need.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='w-[100%] flex items-center justify-center flex-col gap-[10px]'>
          <Titles text1={"WHY "} text2={"CHOOSE US"} />
          <div className='w-[80%] flex items-center justify-center lg:flex-row flex-col py-[40px] '>
            <div className='lg:w-[33%] w-[90%] h-[250px] border-[1px] border-gray-100 flex items-center justify-center gap-[20px] flex-col px-[40px] py-[10px] text-white backdrop:blur-[2px] bg-[#ffffff0b] '>

              <b className='text-[20px] font-semibold text-[#bff1f9] '>Quality Assurance

              </b>
              <p>
                We Guarantee quality through strict checks , relieable sourcing , and a commitment to customer Satisfaction always
              </p>

            </div>
            <div className='lg:w-[33%] w-[90%] h-[250px] border-[1px] border-gray-100 flex items-center justify-center gap-[20px] flex-col px-[40px] py-[10px] text-white backdrop:blur-[2px] bg-[#ffffff0b] '>

              <b className='text-[20px] font-semibold text-[#bff1f9] '>Convenience

              </b>
              <p>
                Shop easily with fast delivery, simple navigation secure checkout , and everything you need in one place.
              </p>

            </div>
            <div className='lg:w-[33%] w-[90%] h-[250px] border-[1px] border-gray-100 flex items-center justify-center gap-[20px] flex-col px-[40px] py-[10px] text-white backdrop:blur-[2px] bg-[#ffffff0b] '>

              <b className='text-[20px] font-semibold text-[#bff1f9] '>Exceptional Customer Services

              </b>
              <p>
                Our dedicated support team ensures quick responses , helpful solution , and a smooth shooping experience every time.
              </p>

            </div>

          </div>

        </div>

      </div>

    </>
  )
}

export default About
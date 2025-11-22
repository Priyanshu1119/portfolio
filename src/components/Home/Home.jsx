export default function Home() {
    return (
         
        <div className="mx-auto w-full max-w-7xl">
                <h1 className='text-center text-5xl font-bold text-gray-500  underline underline-offset-4'>WELCOME To My World</h1>
            <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
                <div className="relative z-10 max-w screen-xl px-4  pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
                    <div className="max-w-xl sm:mt-1 mt-80 space-y-8 text-center sm:text-right sm:ml-auto">
                        <h2 className="text-4xl font-bold sm:text-5xl">
                            <span className="hidden sm:block text-4xl"></span>
                        </h2>
                            <br /><br /><br /><br />
                        {/* <Link
                            className="inline-flex text-white items-center px-6 py-3 font-medium bg-orange-700 rounded-lg hover:opacity-75"
                            to="/"
                        >
                            <svg
                                fill="white"
                                width="24"
                                height="24"
                                xmlns="http://www.w3.org/2000/svg"
                                fillRule="evenodd"
                                clipRule="evenodd"
                            >
                                <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
                            </svg>
                        </Link> */}
                    </div>
                </div>

                <div className="absolute inset-0 w-full sm:my-20 sm:pt-1 pt-12 h-full ">
                    <img className="w-96 mb-3" src="https://portfolio-akash-chaursiya.vercel.app/assets/bg1.png" alt="image1" />
                  
                </div>
                <div>
                    <br />
                     <h2>"I am a learner in the stream of Computer science. I basically try to learn new things in this field. 
                        As per the course curriculum I have learnt certain languages.As PYTHON PROGRAMMING LANGUAGE and JAVA makes one a good programmer 
                        I have resorted to learn WEB DEVELOPEMENT as well as DSA Using Java.
                        My vision is to have knowledge of Highest utility possible and mission is to become an asset for my company.
                         That is I want my contribution to be worthy.
                        My strength is Perseverance which makes me get going in my bad times. 
                        In addition to being passionate about programming, I am eager to challenge myself to do things I've never accomplished before and 
                        I strive to learn and improve on my skills every day (for example, if you have constructive criticism and suggestion or improvement about me, 
                        I'd be very glad to hear them:)."<br/>Priyanshu Dubey</h2>
                        
                </div>
              
            </aside>
            <br />
            <div className="grid  place-items-center sm:mt-20">
                <img className="sm:w-96 w-48" src="https://online.usc.edu/wp-content/uploads/2025/03/Software-Engineer.png" alt="image2" />
            </div>

            <h1 className="text-center text-2xl sm:text-5xl py-10 font-medium"></h1>
        </div>
    );
}

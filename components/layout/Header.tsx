import HeroCard from "../common/HeroCard";

const Header = () => {
    return (

        <div className="bg-hero-pattern bg-cover mix-blend-normal relative">
            {/* <!-- MENU  --> */}
            <nav className="flex justify-between items-center container mx-auto py-0">
                <a href="#"><img src="./assets/logo.svg" alt="logo" className="w-36" /></a>
                <div>
                    <ul className="hidden lg:flex justify-between gap-24 font-bold transition duration-700 ease-in-out">

                        <li className="flex items-center hover:scale-105 transition duration-700 ease-in-out hover:text-[#CB5050]" ><div className="rect__nav mr-1"></div><a href="">HOME</a></li>
                        <li className="hover:scale-105 transition duration-700 ease-in-out hover:text-[#CB5050]"><a href="./about.html">ABOUT</a></li>
                        <li className="hover:scale-105 transition duration-700 ease-in-out hover:text-[#CB5050]"><a href="./services.html">SERVICES</a></li>
                        <li className="hover:scale-105 transition duration-700 ease-in-out hover:text-[#CB5050]"><a href="">CONTACT US</a></li>
                    </ul>
                </div>
                {/* <!-- MOBILE MENU-- > */}
                <div className="md:hidden flex items-center mr-4">
                    <button className="outline-none mobile-menu__button">
                        <svg
                            className="w-8 h-8 text-[#CB5050]"
                            x-show="!showMenu"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>
                <div className="hidden mobile-menu bg-white absolute w-full mt-72">
                    <ul className="">
                        <li className="active"><a href="./index.html" className="block text-sm px-2 py-4 text-white bg-[#CB5050] font-semibold">HOME</a></li>
                        <li><a href="#" className="block text-sm px-2 py-4 hover:bg-[#CB5050] transition duration-300">ABOUT</a></li>
                        <li><a href="./services.html" className="block text-sm px-2 py-4 hover:bg-[#CB5050] transition duration-300">SERVICES</a></li>
                        <li>
                            <a href="#contact" className="block text-sm px-2 py-4 hover:bg-[#CB5050] transition duration-300">CONTACT US</a>
                        </li>
                    </ul>
                </div>
            </nav >

            {/* < !--END MENU-- > */}

            {/* < !--HERO TEXT-- > */}

            <h1 className="container mx-auto text-6xl lg:text-8xl xl:text-9xl my-16 lg:my-32 font-bold pl-8 lg:pl-0">Think Beyond <br /> Audit<span className="text-[#CB5050]">.</span></h1>
            {/* <!-- </div> -- > */}
            <div className="grid lg:grid-cols-3 gap-4 xl:gap-6 pb-20 container mx-auto">
                <div className="flex flex-col justify-around w-screen lg:w-full h-[460px] bg-[#CB5050] mix-blend-multiply p-6 xl:p-10 shadow-lg rounded-sm">
                    <div className="flex items-center">
                        <div className="rect mr-12 ml-4"></div>
                        <h2 className="text-xl xl:text-4xl font-bold text-white">LEVEL 1 <br />B-BBEE</h2>
                    </div>
                    <p className="text-white mt-4 xl:mt-12">We are proud to say that our firm is a level 1 B-BBEE Contributor in terms of the Broad-based Black Economic Empowerment scorecard rating system and our B-BBEE Recognition Level is 135%.</p>
                    <div className="flex flex-row-reverse text-white font-bold mt-4 xl:mt-12">
                        <a href=""> FIND OUT MORE {'>'}</a>
                    </div>
                </div>
                <div className="flex flex-col justify-around w-screen lg:w-full h-[460px] bg-[#FCD583] mix-blend-multiply  p-6 xl:p-10 shadow-lg rounded-sm">
                    <div className="flex items-center ">
                        <div className="rect mr-12 ml-4"></div>
                        <h2 className="text-xl xl:text-4xl font-bold text-white">OVER 7 <br />YEARS <br /> EXPERIENCE</h2>
                    </div>
                    <p className="text-white mt-4 xl:mt-12">With over 7 years of experience in the financial industry, we believe that we can cater for all your financial, audit and advisory needs.</p>
                    <div className="flex flex-row-reverse text-white font-bold mt-4 xl:mt-12">
                        <a href=""> FIND OUT MORE {'>'}</a>
                    </div>
                </div>
                <div className="flex flex-col justify-around w-screen lg:w-full h-[460px] bg-[#3CBCC3] mix-blend-multiply  p-6 xl:p-10shadow-lg rounded-sm">
                    <div className="flex items-center">
                        <div className="rect mr-12 ml-4"></div>
                        <h2 className="text-xl xl:text-4xl font-bold text-white">CLIENT <br />FOCUSED</h2>
                    </div>
                    <p className="text-white mt-4 xl:mt-12">The success of our brand name is the result of a combination of hard work, creativity and highly trained professionals. Our company aims to be client focused. That means we'll go out of our way for you and help meet your goals</p>
                    <div className="flex flex-row-reverse text-white font-bold mt-4 xl:mt-12">
                        <a href=""> FIND OUT MORE {'>'}</a>
                    </div>
                </div>
            </div>

            {/* <!-- END HERO TEXT  --> */}
        </div>

    );
}

export default Header
function HeroCard() {
    return (
        <div className="flex flex-col justify-around w-screen lg:w-full h-[460px] bg-[#CB5050] mix-blend-multiply p-6 xl:p-10 shadow-lg rounded-sm">
            <div className="flex items-center">
                <div className="rect mr-12 ml-4"></div>
                <h2 className="text-xl xl:text-4xl font-bold text-white">LEVEL 1 <br />B-BBEE</h2>
            </div>
            <p className="text-white mt-4 xl:mt-12">We are proud to say that our firm is a level 1 B-BBEE Contributor in terms of the Broad-based Black Economic Empowerment scorecard rating system and our B-BBEE Recognition Level is 135%.</p>
            <div className="flex flex-row-reverse text-white font-bold mt-4 xl:mt-12">
                <a href=""> FIND OUT MORE `{'>'}`</a>
            </div>
        </div>
    );
}

export default HeroCard
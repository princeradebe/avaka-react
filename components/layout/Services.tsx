import ServicesCard from "../common/ServicesCard";

const Services = () => {

    return (
        <section title="Services" className="container mx-auto relative">
            <div className="lg:w-[408px] h-[97px] bg-[#CB5050] text-2xl lg:text-3xl font-bold text-white text-center flex items-center justify-center -mt-12 mb-12">OUR SERVICES</div>
            <div className="grid lg:grid-cols-3 gap-6">
                <div className="flex flex-col-reverse  lg:h-[400px] xl:h-[520px] hover:scale-105 transition duration-700 ease-in-out rounded-sm bg-service-assurance bg-cover" >
                    <a href="./services/assurance.html" className="card__link"> Audit & Assurance {`>`}</a>
                </div>
                <div className="flex flex-col-reverse lg:h-[400px] xl:h-[520px]  hover:scale-105 transition duration-700 ease-in-out rounded-sm bg-service-advisory bg-cover">
                    <a href="./services/advisory.html" className="card__link"> Business Advisory {`>`}</a>
                </div>
                <div className="flex flex-col-reverse  lg:h-[400px] xl:h-[520px] hover:scale-105 transition duration-700 ease-in-out rounded-sm bg-service-audit bg-cover">
                    <a href="./services/audit.html" className="card__link"> Internal Audit {`>`}</a>
                </div>
                <div className="flex flex-col-reverse lg:h-[400px] xl:h-[520px]  hover:scale-105 transition duration-700 ease-in-out rounded-sm bg-service-ict bg-cover">
                    <a href="./services/ict.html" className="card__link"> Information Technology Audit {`>`}</a>
                </div>
                <div className="flex flex-col-reverse  lg:h-[400px] xl:h-[520px] hover:scale-105 transition duration-700 ease-in-out rounded-sm bg-service-consulting bg-cover">
                    <a href="./services/consulting.html" className="card__link"> Consulting {`>`}</a>
                </div>
                <div className="flex flex-col-reverse lg:h-[400px] xl:h-[520px] hover:scale-105 transition duration-700 ease-in-out rounded-sm bg-service-training bg-cover">
                    <a href="./services/training.html" className="card__link"> Training {`>`}</a>
                </div>
            </div>
            <button className="w-full lg:w-[193px] h-[65px] bg-[#CB5050] hover:bg-[#ab2a2a] text-white mt-6 transition duration-300 ease-in-out">View All</button>

        </section>
    );
}

export default Services;
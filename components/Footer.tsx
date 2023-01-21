function Footer() {
    return (
        <footer className="bg-gradient-to-t from-[#cf5145] to-[#CB5050] mt-16">
            <div className="container mx-auto pt-6 lg:pt-16">
                <div className="lg:flex justify-between">
                    <div className="flex flex-col">
                        <div>
                            <a href="./index.html"><img src="./assets/logo-white.svg" alt="logo" className="w-36" /></a>
                        </div>
                        <p className="text-white w-96 lg:mt-6 px-2 lg:px-0 text-xs lg:text-sm ">
                            AVAKA offers services to meet your internal audit, advisory and consulting needs. Utilizing our team of experienced accounting professionals AVAKA can provide your business with a variety of management consulting and other internal audit and advisory services.
                        </p>
                    </div>

                    <div className="text-white">
                        <h3 className="font-bold text-xl mb-4 pl-2 mt-8 lg:mt-0">Services</h3>
                        <ul>
                            <li><a href="./services/assurance.html" className="hover:bg-black py-1 pl-2 block">Audit and Assurance</a></li>
                            <li><a href="./services/advisory.html" className="hover:bg-black py-1 pl-2 block">Business Advisory</a></li>
                            <li><a href="./services/audit.html" className="hover:bg-black py-1 pl-2 block">Internal Audit </a></li>
                            <li><a href="./services/ict.html" className="hover:bg-black py-1 pl-2 block">Information Technology Audit</a></li>
                            <li><a href="./services/consulting.html" className="hover:bg-black py-1 pl-2 block">Consulting</a></li>
                            <li><a href="./services/training.html" className="hover:bg-black py-1 pl-2 block">Training</a></li>
                            <li><a href="./services/risk.html" className="hover:bg-black py-1 pl-2 block">Risk Management</a></li>
                            <li><a href="./services/asset.html" className="hover:bg-black py-1 pl-2 block">Asset Management</a></li>
                            <li><a href="./services/accounting.html" className="hover:bg-black py-1 pl-2 block">Accounting</a></li>
                        </ul>
                    </div>
                    <div className="text-white">
                        <h3 className="font-bold text-xl mb-4 pl-2 mt-8 lg:mt-0 w-full">Links</h3>
                        <ul>
                            <li><a href="./index.html" className="hover:bg-black py-1 pl-2 block">Home</a></li>
                            <li><a href="./about.html" className="hover:bg-black py-1 pl-2 block">About Us</a></li>
                            <li><a href="./services.html" className="hover:bg-black py-1 pl-2 block">Services</a></li>
                            <li><a href="" className="hover:bg-black py-1 pl-2 block">Contact Us</a></li>
                        </ul>
                    </div>
                    <div className="text-white pl-2">
                        <h3 className="font-bold text-xl mb-4 mt-8 lg:mt-0">Contact Us</h3>
                        <p className="font-bold mb-1">Gauteng</p>
                        <p>114 Summerplace</p>
                        <p>Summerfields Estate</p>
                        <p>Kosmosdal</p>
                        <p>Centurion</p>
                        <p>0157</p>
                        <p className="font-bold mt-4">Email</p>
                        <p>info@avaka.co.za</p>
                    </div>
                </div>
                <div className="flex mt-16 pb-6" title="footer copyright text">
                    <p className="text-white mr-6">2021 (c) AVAKA. All rights reserved</p>
                    <a href="" className="text-white" > Privacy Policy</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer
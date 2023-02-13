interface HeroCardProps {
    title: string;
    descritpion: string;
    link_text: string;
    background_color: string;
}

const HeroCard = ({ title, descritpion, link_text, background_color }: HeroCardProps) => {
    return (
        <div className="flex flex-col justify-around w-screen lg:w-full h-[460px] bg-[{`'background_color'`}] mix-blend-multiply p-6 xl:p-10 shadow-lg rounded-sm">
            <div className="flex items-center">
                <div className="rect mr-12 ml-4"></div>
                <h2 className="text-xl xl:text-4xl font-bold text-white">{title}</h2>
            </div>
            <p className="text-white mt-4 xl:mt-12">{descritpion}</p>
            <div className="flex flex-row-reverse text-white font-bold mt-4 xl:mt-12">
                <a href="">{link_text}</a>
            </div>
        </div>
    );
}

export default HeroCard

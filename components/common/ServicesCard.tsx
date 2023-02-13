interface ServicesCardProps {
    services: string;
    serviceImage: string;
    link: string;
}

const ServicesCard = ({ services, serviceImage, link }: ServicesCardProps) => {
    return (
        <div className="flex flex-col-reverse lg:h-[400px] xl:h-[520px] hover:scale-105 transition duration-700 ease-in-out rounded-sm `{'serviceImage'}` bg-cover">
            <a href="`{link}`" className="card__link"> {services}</a>
        </div>
    );
}

export default ServicesCard;

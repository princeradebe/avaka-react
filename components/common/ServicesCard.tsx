function ServicesCard({ }) {
    return (
        <div className="flex flex-col-reverse lg:h-[400px] xl:h-[520px] hover:scale-105 transition duration-700 ease-in-out rounded-sm bg-service-training bg-cover">
            <a href="./services/training.html" className="card__link"> Training {'>'}</a>
        </div>
    );
}

export default ServicesCard;
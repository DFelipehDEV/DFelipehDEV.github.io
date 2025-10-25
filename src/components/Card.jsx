function Card({ name, description, photo, link }) {
    const Wrapper = link ? "a" : "div";

    return (
        <Wrapper
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className={`bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden shadow-md hover:shadow-lg hover:bg-white/10 transition duration-300 flex flex-col focus:outline-none focus:ring-2 focus:ring-white/20`}
        >
            {photo && (
                <img
                    src={photo}
                    alt={name}
                    className="w-full h-48 object-cover"
                />
            )}

            <div className="p-5 flex flex-col grow">
                <h3 className="text-xl font-semibold text-white mb-2">{name}</h3>
                <p className="text-gray-400 text-sm grow leading-relaxed">
                    {description}
                </p>
            </div>
        </Wrapper>
    );
}

export default Card;

import Image from 'next/image';

interface CardServiceProps {
    id: any;
    icon: string;
    title: string;
    description: string;
}

const CardService = ({ id, icon, title, description }: CardServiceProps) => {
    return (
        <div className="card" id={id}>
            <Image src={icon} alt="Service-icon" width={200} height={200} />
            <div className="info">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default CardService;
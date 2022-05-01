import Image from 'next/image';
import Link from 'next/link';
import data from '../data/headerSection.json';

const Header = () => {

    const onContactUsClick = () => {
        window.document.getElementById("footer")?.scrollIntoView({ behavior: "smooth" });
    }

    return (
        <header>
            <div className="logo">
                <Link href="/">
                    <a>
                        <Image src={data.logo} width={165} height={65} alt="PFaith Logo" />
                    </a>
                </Link>
            </div>
            <div className="btn-try">
                <button onClick={onContactUsClick}>
                    Contact Us
                </button>
            </div>
        </header>
    )
};

export default Header;
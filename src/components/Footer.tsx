import data from '../data/footerSection.json';

const Footer = () => {
    return (
        <footer>
            <div className="header-footer">
                <h3>{data.title}</h3>
                <h5>{data.description}</h5>
            </div>

            <form>
                <div className="form-group">
                    <input type="email" placeholder="name@company.com" />
                    <button type="submit" >Book Demo Class</button>
                </div>
            </form>
        </footer>
    )
};

export default Footer;
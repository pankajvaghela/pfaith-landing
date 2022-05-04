import data from '../data/footerSection.json';

const Footer = () => {
    return (
        <footer id="footer">
            <div className="header-footer">
                <h3>{data.title}</h3>
                <h5>{data.description}</h5>
            </div>

            <form>
                <div className="form-group">
                    <input type="email" placeholder="name@company.com" />
                    <button type="submit" >Enroll Now</button>
                </div>
            </form>
        </footer>
    )
};

export default Footer;
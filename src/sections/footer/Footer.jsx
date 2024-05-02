import "./footer.css";
import { links, socials } from "./data.jsx";

const Footer = () => {
    return (
        <footer>
            <div className="container footer__container">
                <ul className="nav__menu">
                    {links.map((fLink) => (
                        <li key={fLink.id}>
                            <a href={fLink.link}>{fLink.title}</a>
                        </li>
                    ))}
                </ul>
                <div className="footer__socials">
                    {socials.map((social) => (
                        <a
                            key={social.id}
                            href={social.link}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {social.icon}
                        </a>
                    ))}
                </div>
            </div>
            <div className="footer__copyright">
                <small>2024 Huỳnh Minh Duy &copy; All Rights Reserved</small>
            </div>
        </footer>
    );
};

export default Footer;

import "./contact.css";
import data from "./data.jsx";

const Contact = () => {
    return (
        <section id="contact">
            <h2>Get In Touch</h2>
            <p>Shoot me a message via any of the links below!</p>
            <div className="container contact__container" data-aos="fade-up">
                {data.map((contact) => (
                    <a
                        key={contact.id}
                        href={contact.link}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {contact.icon}
                    </a>
                ))}
            </div>
        </section>
    );
};

export default Contact;

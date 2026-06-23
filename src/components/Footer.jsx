import styles from './Footer.module.css';
import instagram_logo from '../assets/instagram_logo.svg';
import second_logo from '../assets/second_logo.svg';
import google_logo from '../assets/google_logo.svg';
import { usePortfolio } from '../hooks/usePortfolio';

function Footer () {
    const { contact } = usePortfolio();

    return (
        <div className={styles.footer_container}>
                <div>
                    <h3>{contact.title}</h3>
                    <p>{contact.email}</p>
                    <p>{contact.phone}</p>
                </div>
                <div>
                    <p>
                        {contact.description}
                    </p>
                </div>
                <div className={styles.logos_footer}>
                    <a href={contact.social.instagram} target='_blank' rel='noreferrer'>
                        <img src={instagram_logo} alt="Instagram"/>
                    </a>
                    <a href={contact.social.linkedin} target='_blank' rel='noreferrer'>
                        <img src={second_logo} alt="LinkedIn"/>
                    </a>
                    <a href={contact.social.email} target='_blank' rel='noreferrer'>
                        <img src={google_logo} alt="Email"/>
                    </a>
                </div>
        </div>
    )
}

export default Footer
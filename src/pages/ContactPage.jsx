import styles from './ContactPage.module.css';
import { usePortfolio } from '../hooks/usePortfolio';

export default function ContactPage() {
  const { contact } = usePortfolio();

  return (
    <section className={styles.contactPage}>
      <div className={styles.card}>
        <p className={styles.kicker}>Contato</p>
        <h1>{contact.title}</h1>
        <p>{contact.description}</p>
        <div className={styles.actions}>
          <a href={`mailto:${contact.email}`}>{contact.email}</a>
          <a href={contact.social.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
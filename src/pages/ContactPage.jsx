import { useState } from 'react';
import styles from './ContactPage.module.css';
import { usePortfolio } from '../hooks/usePortfolio';

const apiBaseUrl = import.meta.env.VITE_API_BASE_URL ?? 'http://localhost:8080/api';

export default function ContactPage() {
  const { contact } = usePortfolio();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [feedback, setFeedback] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((currentData) => ({
      ...currentData,
      [name]: value,
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);
    setFeedback('');
    setError('');

    try {
      const response = await fetch(`${apiBaseUrl}/contact-messages`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorBody = await response.json();
        const message = errorBody.details?.length
          ? errorBody.details.join(' | ')
          : errorBody.message ?? 'Falha ao enviar mensagem.';
        throw new Error(message);
      }

      await response.json();
      setFeedback('Mensagem enviada e salva no banco de dados com sucesso.');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    } catch (requestError) {
      setError(requestError.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className={styles.contactPage}>
      <div className={styles.grid}>
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

        <form className={styles.formCard} onSubmit={handleSubmit}>
          <p className={styles.kicker}>Enviar mensagem</p>
          <h2>Dados salvos no PostgreSQL</h2>
          <div className={styles.fieldGroup}>
            <label>
              Nome
              <input type="text" name="name" value={formData.name} onChange={handleChange} required />
            </label>
            <label>
              E-mail
              <input type="email" name="email" value={formData.email} onChange={handleChange} required />
            </label>
          </div>
          <label>
            Assunto
            <input type="text" name="subject" value={formData.subject} onChange={handleChange} required />
          </label>
          <label>
            Mensagem
            <textarea name="message" rows="6" value={formData.message} onChange={handleChange} required />
          </label>

          <button type="submit" className={styles.submitButton} disabled={loading}>
            {loading ? 'Enviando...' : 'Enviar para a API'}
          </button>

          {feedback ? <p className={styles.successMessage}>{feedback}</p> : null}
          {error ? <p className={styles.errorMessage}>{error}</p> : null}
        </form>
      </div>
    </section>
  );
}
import { Link } from 'react-router-dom';
import styles from './NotFoundPage.module.css';

export default function NotFoundPage() {
  return (
    <section className={styles.notFound}>
      <h1>Página não encontrada</h1>
      <p>Use o menu para voltar para uma das rotas principais da aplicação.</p>
      <Link to="/">Voltar para o início</Link>
    </section>
  );
}
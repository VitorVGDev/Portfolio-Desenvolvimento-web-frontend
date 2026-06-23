import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BackToTopButton from '../components/BackToTopButton';
import { useScrollToTop } from '../hooks/useScrollToTop';
import styles from './MainLayout.module.css';

export default function MainLayout() {
  useScrollToTop();

  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles.mainContent}>
        <Outlet />
      </main>
      <Footer />
      <BackToTopButton />
    </div>
  );
}
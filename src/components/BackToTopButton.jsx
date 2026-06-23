import arrowUpIcon from '../assets/arrow_up.svg';
import { useBackToTop } from '../hooks/useBackToTop';
import styles from './BackToTopButton.module.css';

export default function BackToTopButton() {
  const { visible, scrollToTop } = useBackToTop();

  return (
    <button
      type="button"
      id="back-to-top"
      className={`${styles.backToTop} ${visible ? styles.visible : ''}`}
      onClick={scrollToTop}
      aria-label="Voltar ao topo"
    >
      <img src={arrowUpIcon} alt="Voltar ao topo" />
    </button>
  );
}
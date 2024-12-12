import Header from '@/app/components/Header/Header';
import BigBlock from './components/Header/BigBlock/BigBlock';
import styles from '@/app/page.module.css';

export default function Home() {
  return (
    <div className={styles.app}>
      <Header />
      <BigBlock />
    </div>
  );
}

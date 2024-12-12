import Header from '@/app/components/Header/Header';
import styles from '@/app/page.module.css';

export default function Home() {
  return (
    <div className={styles.app}>
      <Header />
      <div
        style={{
          width: "50px",
          height: "250px"
        }}
      ></div>
    </div>
  );
}

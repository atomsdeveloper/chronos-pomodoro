import styles from './styles.module.css';

export function Cycles() {
  return (
    <div className={styles.cyclesContainer}>
      <span>Ciclos:</span>

      <div className={styles.cyclesDots}>
        <span className={`${styles.cycleDot} ${styles.workCicle}`}></span>
        <span className={`${styles.cycleDot} ${styles.breakShortCicle}`}></span>
        <span className={`${styles.cycleDot} ${styles.workCicle}`}></span>
        <span className={`${styles.cycleDot} ${styles.breakShortCicle}`}></span>
        <span className={`${styles.cycleDot} ${styles.workCicle}`}></span>
        <span className={`${styles.cycleDot} ${styles.breakShortCicle}`}></span>
        <span className={`${styles.cycleDot} ${styles.workCicle}`}></span>
        <span className={`${styles.cycleDot} ${styles.breakLongCicle}`}></span>
      </div>
    </div>
  );
}

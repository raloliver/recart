import styles from './Search.module.scss';

export default function Search() {
  return (
    <div className={styles.search}>
      <input
        type="text"
        className={styles.input}
        placeholder="search..."
      />
    </div>
  );
}

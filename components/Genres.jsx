import Link from "next/link";
import styles from "../styles/components/Genres.module.scss";

function Genres() {

    return (
        <div className={styles.GenresBooks}>
        <ul className={styles.Genres}>
          <li className={styles.GenresItem}>Жанры</li>
          <Link href='/'>
            <li className={styles.GenresItem}>
              <a>комедии</a>
              <span className={styles.GenresCount}>233</span>
            </li>
          </Link>
          <Link href='/'>
            <li className={styles.GenresItem}>
              <a>ужасы</a>
              <span className={styles.GenresCount}>543</span>
            </li>
          </Link>
          <Link href='/'>
            <li className={styles.GenresItem}>
              <a>детективы</a>
              <span className={styles.GenresCount}>764</span>
            </li>
          </Link>
          <Link href='/'>
            <li className={styles.GenresItem}>
              <a>поэзии</a>
              <span className={styles.GenresCount}>123</span>
            </li>
          </Link>
          <Link href='/'>
            <li className={styles.GenresItem}>
              <a>биографии</a>
              <span className={styles.GenresCount}>876</span>
            </li>
          </Link>
        </ul>
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <button className={styles.GenresBtn}>все жанры</button>
        </div>
        
      </div>
    )
}

export { Genres };
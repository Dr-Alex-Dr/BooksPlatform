import { Header } from './Header';
import styles from '../../styles/components/Layout.module.scss';

export default function Layout({children}) {
    return (
        <>
          <Header />
          <div className={styles.Container}>
            {children}
          </div>
        </> 
    )
}


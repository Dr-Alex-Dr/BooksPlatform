import { Header } from "../../components/interface/header";
import styles from "../../styles/pages/home.module.scss";

export default function Home() {
  return (
    <section className={styles.Home}>
      <Header/>
      <div style={{ height: 10000}}></div>
    </section>
  )
}

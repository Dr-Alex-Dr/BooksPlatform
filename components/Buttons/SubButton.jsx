import styles from "../../styles/components/Buttons/SubButton.module.scss";
import { useState } from "react";

function SubButton() {
    const [subscribe, setSubscribe] = useState(false);
    return (
        <>
            <button onClick={() => {setSubscribe(!subscribe)}} className={[styles.Btn, subscribe ? styles.BtnSub : ""].join(" ")}>{subscribe ? "Вы подписаны" : "Подписаться"}</button>
            <p className={styles.CountSubscribers}>2 285 подписчиков</p>
        </>
    )
}

export {SubButton};
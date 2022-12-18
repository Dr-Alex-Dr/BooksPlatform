import styles from "../styles/components/Description.module.scss";

function Description({text}) {
    return (
        // добавить кнопку развернуть, когда тескта много (для мобилок) 
        <>
            
            <section className={styles.Description}>
                <div className={styles.DescriptionBlockContainer}>
                    <h3 className={styles.DescriptionAboutTitle}>Об авторе</h3>
                    <div className={styles.DescriptionText}>
                        {text.map((item, index) => (
                            <p key={index}>{item}</p>
                        ))}
                    </div>
                </div>
            </section>
    </>
    )
}

export {Description};
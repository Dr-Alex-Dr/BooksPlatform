import styles from "../styles/components/AuthorSame.module.scss";
import Link from "next/link";
import Image from "next/image";

function AuthorSame({props}) {
    return (
    <div className={styles.AuthorSame}>
        <h2 className={styles.AuthorSameTitle}>Похожие авторы</h2>
        <div className={styles.AuthorSamePrapper}>    
        {
            props.map((item,  index) => (
                <Link key={index} href='/'>
                    <div className={styles.AuthorSameContainer}>
                        <div className={styles.AuthorSameImgContainer}>
                            <Image className={styles.AuthorSameImg} src={item.image} width={100} height={125}/>                          
                        </div>
                        <h2 className={styles.AuthorSameName}>{item.name}</h2>
                    </div>
                </Link>  
            ))
        }                   
        </div>
    </div>
    )
}

export {AuthorSame};
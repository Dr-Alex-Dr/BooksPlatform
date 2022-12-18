import Link from "next/link";
import Image from "next/image";

function BookItemMobile(props) {
    return (
        <div className={styles.HomeMCategoriesItemContainer}>
            <Link href='/'><a className={styles.HomeMCategoriesName}>{props.nameCategory}</a></Link>
            <div className={styles.HomeMCategoriesBooksContainer}>
              <div className={[styles.HomeMCategoriesBooksItem, props.type].join(' ')}>
                {props.items.map((item, index) => {
                    
                })}
                <Image style={{borderRadius: 8}} src='/home/bookImg/cover-2.jpg' width={120} height={170}/>
                <h3 className={styles.HomeMCategoriesBooksTitle}>Как легко завести разговор с любым человеком</h3>
                <p className={styles.HomeMCategoriesBooksAuthor}>Патрик Кинг</p>

              </div>
            </div>
          </div>
    )
}

export {BookItemMobile};
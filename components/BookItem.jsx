
import styles from "../styles/components/BookItem.module.scss";
import Link from "next/link";
import Image from "next/image";



function BookItem(props) {
      function FindTypeBook(textType, audioType) {
        if (textType == null) {
          return styles.AudioType;
        }
        if (audioType == null) {
          return styles.TextType;
        }
        return styles.TextAudioType;
    }
    return (
        <div className={styles.BooksContainerItem}>
          <Link href='/'>
            <div className={[styles.BooksImgContainer, FindTypeBook(props.type[0], props.type[1])].join(' ')}>
              <Image className={styles.BooksImg} src={props.linkImg} width={160} height={225} objectFit="cover"/> 
            </div>
          </Link>
          <div className={styles.BooksInfoContainer}>
            <Link href='/'><h2 className={styles.BooksInfoTitle}>{props.name}</h2></Link>
            <p className={styles.BooksInfoDesc}>{props.desc}</p>
            <div className={styles.BooksInfoWrapper}>
              <p className={styles.BooksInfoAuthor}><span>Автор:</span><Link href='/'><a>{props.author}</a></Link></p>
              <p style={{display: props.reader ? 'block' : 'none'}} className={styles.BooksInfoReader}><span>Исполнитель:</span><Link href='/'><a>{props.reader}</a></Link></p>
              <p className={styles.BooksInfoGenre}><span>Жанр:</span>{props.genre}</p>
              <p className={styles.BooksInfoRating}><span>Рейтинг:</span>{props.rating}</p>
            </div>
            
            {/* <button onClick={() => {setActiveAddBtn(!activeAddBtn)}} className={[styles.BtnAddBooks, activeAddBtn ? styles.BtnFullAddImg : styles.BtnAddImg].join(' ')}></button> */}
          </div>
        </div>
    )
}

export {BookItem};
import styles from '../styles/components/BookInCategory.module.scss';
import Image from 'next/image';
import Link from 'next/link';

function BookInCategory(props) {
    // проверить, какой тип книги приходит с сервака (текст и аудио)
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
        <div className={styles.BookInCategory}>
            <Link href='/'>
                <div className={[styles.BookInCategoryItem, FindTypeBook(props.textType, props.audioType)].join(' ')}>
                    <Image 
                        style={{borderRadius: 8}} 
                        className={styles.BookInCategoryImg} 
                        src={props.url} 
                        width={200} 
                        height={props.height} />
                </div>
            </Link>         
            <h3 className={styles.BookInCategoryName}>{props.name}</h3>
            <p className={styles.BookInCategoryAuthor}>{props.author}</p>
        </div>
    )
}

export {BookInCategory};

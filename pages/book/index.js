import styles from "../../styles/pages/Book.module.scss";
import repeaters from "../../styles/repeaters/Repeater.module.scss"
import Image from "next/image";
import Link from "next/link";

import { Description } from "components/Description";

export default function Book() {
 
    // 3 аргумент тип элемента: кнопка или значек
    function FindTypeBook(textType, audioType, type) {
        if (textType == null) {
          return type == 'btn' ? styles.VisibleAudioBtn : styles.AudioType;
        }
        if (audioType == null) {
          return type == 'btn' ? styles.VisibileTextBtn : styles.TextType;
        }
        return type === 'btn' ? styles.VisibleTextAudioBtn : styles.TextAudioType;
    }

    return (
        <>
        <div style={{backgroundColor: '#FFE3E1'}} className={repeaters.ColorBack}></div>
        <section className={styles.Book}>
            <div className={repeaters.BlockContainer}>
                <Link href='/'>
                    <button className={repeaters.PageBackBtn}>
                        <Image src="/home/SliderBtnRight.svg" width={30} height={30}/>
                    </button> 
                </Link> 

                <div className={styles.BookInfoContainer}>
                    <div className={[styles.BookInfoImgContainer, FindTypeBook(1, 1)].join(' ')}>
                        <Image className={styles.BookCover} src="/home/bookImg/cover-8.webp" width={400} height={400}/>
                    </div>
                    <div className={styles.BookInfo}>
                        <h2>Инфер 8</h2>
                        <div className={styles.BookInfoText}>
                            <p><span>Автор:</span><Link href='/'><a>Дем Михайлов</a></Link></p>
                            <p><span>Исполнитель:</span><Link href='/'><a>Владимир Хлопов</a></Link></p>
                            <p><span>Издание:</span>2004</p>
                            <p><span>Жанр:</span>научная фантастика, биография</p>
                        </div>
                        <div className={[styles.BookInfoBtns, FindTypeBook(1, 1, 'btn')].join(' ')}>
                            <button className={styles.BookRead}>Читать</button>
                            <button className={styles.BookListen}>Слушать</button>
                        </div>
                        <Link href='/'><h4 className={styles.BookList}>4 часть чего-то там...</h4></Link>
                        <div className={styles.BookCharacteristic}>
                            <div className={styles.BookCharContainer}>
                                <p>4,2 (53)</p>
                                <span>Оценка</span>
                            </div>
                            <div className={styles.BookCharContainer}>
                                <p>РУС</p>
                                <span>Язык</span>
                            </div>
                            <div className={styles.BookCharContainer}>
                                <p>612</p>
                                <span>Страницы</span>
                            </div>
                            <div className={styles.BookCharContainer}>
                                <p>1 ч. 42 мин.</p>
                                <span>Длительность</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>          
        </section>
        <Description 
            text={[
                'Зона Мутатерр. Сомкнутые плавучие острова… А под ними – океаническая тьма, что скрывает в себе то, что однажды постарались забыть…',
                'Движение вниз и вперед – к скрытому под древними плавучими островами подводному городу Эдиториум, что некогда считался новой колыбелью созидательного разума, местом, где лучшие умы изнемогают в напряженной работе по спасению умирающей планеты.',
                'Некогда в Эдиториуме постоянно рождались удивительные проекты… и некоторые из них были настолько… необычны… что их законсервировали и постарались забыть.',
                'Но законсервировать – не значит уничтожить…'
            ]}
        />
        
        </>
    )
    
} 
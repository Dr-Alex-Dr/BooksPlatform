import styles from "../../styles/pages/Author.module.scss";
import category from "../../styles/pages/Category.module.scss";
import repeaters from "../../styles/repeaters/Repeater.module.scss";
import Image from "next/image";
import Link from "next/link";
import { SubButton } from "components/Buttons/SubButton";
import { Description } from "components/Description";
import { BookItem } from "components/BookItem";
import { FilterBooks } from "components/FilterBooks";
import { AuthorSame } from "components/AuthorSame";
import { BookInCategory } from "components/BookInCategory";

export default function Author() {
    return (
        <>
            <div style={{backgroundColor: '#FFE3E1'}} className={repeaters.ColorBack}></div>
            <div style={{background: 'linear-gradient(196.84deg, #FFFFFF 16.31%, #FFFFFF 16.31%, #FFF4D7 47.24%, #FCFCFC 87.15%)'}} className={repeaters.MColorBack}></div>
            <section className={styles.Author}>
                <div className={repeaters.BlockContainer}>
                    <Link href='/'>
                        <button className={repeaters.PageBackBtn}>
                            <Image src="/home/SliderBtnRight.svg" width={30} height={30}/>
                        </button> 
                    </Link> 

                    <div className={styles.AuthorInfoContainer}>
                        <div className={styles.AuthorInfoImgContainer}>
                            <Image className={styles.BookCover} src="/author/author-1.png" width={240} height={255}/>
                        </div>
                        <h2 className={styles.AuthorName}>Теодор Драйзер</h2>
                        <SubButton />
                    </div>
                </div>
            </section>
            <Description 
                text={[
                    'Теодор Драйзер – американский писатель, издатель и общественный деятель. Он внес огромный вклад в развитие американской культуры и мировой литературы. Многие специально изучают английский язык, чтобы читать его произведения без перевода.',
                    'Теодор Драйзер родился 27 августа 1871 года в многодетной немецко-чешской семье, которая скиталась по Америке в поисках лучшей жизни. Будущий писатель рано стал самостоятельным. После школы он поступил в Индианский университет (Блумингтон), но через год его покинул из-за отсутствия денег на оплату учебы. Молодой человек был вынужден зарабатывать на еду низкооплачиваемым трудом. С 1892 по 1895 год Теодор работал репортером газет Чикаго, Сент-Луиса, Питтсбурга и Нью-Йорка. Личный опыт и разочарование в жизни позднее нашли отражение в его произведениях.'
                ]}
            />
            <section className={styles.AuthorBooks}>
                <div className={[repeaters.BlockContainer, styles.AuthorBlockContainer].join(" ")}>
                    <div className={styles.AuthorBooksContainer}>
                        <div className={styles.AuthorBooks}>
                            <div className={styles.AuthorFilterContainer}>
                                <h2 className={styles.MAuthorBooksTitle}>Книги</h2>
                                <h2 className={styles.AuthorBooksTitle}>Книги автора (234)</h2>
                                <FilterBooks/>
                            </div>
                            <div className={styles.AuthorListBooks}>
                            <BookItem
                                linkImg='/home/bookImg/cover-1.jpg'
                                name='Как легко завести разговор с любым человеком'
                                desc='Случалось ли вам прийти в незнакомую компанию и не знать, с чего начать разговор? Вам хотелось 
                                завязать знакомство с противоположным полом, но вы не знали, о чем поговорить? Слова застревали у вас в горле, 
                                а от волнения потели ладони? Разговор ...'
                                author='Патрик Кинг'
                                reader='Иван Иванов'
                                genre='биография, комедия'
                                rating='4,2'
                                type={[1, 1]}
                                id='12'
                                />
                            <BookItem
                            linkImg='/home/bookImg/cover-1.jpg'
                            name='Как легко завести разговор с любым человеком'
                            desc='Случалось ли вам прийти в незнакомую компанию и не знать, с чего начать разговор? Вам хотелось 
                            завязать знакомство с противоположным полом, но вы не знали, о чем поговорить? Слова застревали у вас в горле, 
                            а от волнения потели ладони? Разговор ...'
                            author='Патрик Кинг'
                            reader='Иван Иванов'
                            genre='биография, комедия'
                            rating='4,2'
                            type={[1, 1]}
                            id='12'
                            />
                            </div>
                            <div className={category.CategoryColumnContainer}>
                                <div className={category.CategoryColumn}>
                                    <BookInCategory 
                                        textType={1}
                                        audioType={1}
                                        url='/home/bookImg/cover-6.webp'
                                        name='Лето волонтёра'
                                        author='Сергей Лукьяненко'
                                        height={200}
                                    />
                                    <BookInCategory 
                                        textType={1}
                                        audioType={1}
                                        url='/home/bookImg/cover-5.jpg'
                                        name='Лето волонтёра'
                                        author='Сергей Лукьяненко'
                                        height={290}
                                    />
                                </div>
                                <div className={category.CategoryColumn}>
                                    <BookInCategory 
                                            textType={1}
                                            audioType={1}
                                            url='/home/bookImg/cover-3.webp'
                                            name='Штамм «Андромеда»'
                                            author='Майкл Крайтон'
                                            height={290}
                                        />
                                    <BookInCategory 
                                        textType={1}
                                        audioType={1}
                                        url='/home/bookImg/cover-1.jpg'
                                        name='Как легко завести разговор с любым человеком'
                                        author='Сергей Лукьяненко'
                                        height={270}
                                    />
                                </div>
                                <div className={category.CategoryColumn}>
                                    <BookInCategory 
                                        textType={1}
                                        audioType={1}
                                        url='/home/bookImg/cover-8.webp'
                                        name='Низший 8'
                                        author='Дем Михайлов'
                                        height={200}
                                    />
                                    <BookInCategory 
                                        textType={1}
                                        audioType={1}
                                        url='/home/bookImg/cover-4.webp'
                                        name='Фантомы'
                                        author='Дин Кунц'
                                        height={290}
                                    />
                                </div>
                                <div className={category.CategoryColumn}>
                                    <BookInCategory 
                                        textType={1}
                                        audioType={1}
                                        url='/home/bookImg/cover-3.webp'
                                        name='Штамм «Андромеда»'
                                        author='Майкл Крайтон'
                                        height={290}
                                    />
                                    <BookInCategory 
                                        textType={1}
                                        audioType={1}
                                        url='/home/bookImg/cover-1.jpg'
                                        name='Как легко завести разговор с любым человеком'
                                        author='Сергей Лукьяненко'
                                        height={270}
                                    />
                                </div>                            
                            </div>
                        </div>
                        <AuthorSame
                            props={[
                                {
                                    image: '/author/same-author-2.png',
                                    name: 'Эрнест Хемингуэй'
                                },
                                {
                                    image: '/author/same-author-3.png',
                                    name: 'Александр Солженицын'
                                },
                                {
                                    image: '/author/same-author-1.png',
                                    name: 'Антон Чехов'
                                },
                                {
                                    image: '/author/same-author-2.png',
                                    name: 'Эрнест Хемингуэй'
                                },
                            ]}
                        />
                    </div>
                </div>
            </section>
        </>
    )
}
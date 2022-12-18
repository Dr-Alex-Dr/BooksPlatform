import { Genres } from "components/Genres"
import styles from "../../styles/pages/Category.module.scss";
import Image from "next/image";
import { BookInCategory } from "components/BookInCategory";
import Link from "next/link";


export default function Category() {
    return (
        <section className={styles.Category}>
            <div className={styles.CategoryContainer}>
                <h2 className={styles.CategoryTitle}>Популярное</h2> 
                <Link href='/'>
                    <button className={styles.CategoryBackBtn}>
                        <Image src="/home/SliderBtnRight.svg" width={30} height={30}/>
                    </button> 
                </Link>           
                <div className={styles.CategoryWrapper}>
                    <div className={styles.CategoryColumnContainer}>
                        <div className={styles.CategoryColumn}>
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
                        <div className={styles.CategoryColumn}>
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
                        <div className={styles.CategoryColumn}>
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
                        <div className={styles.CategoryColumn}>
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
                    <Genres/>
                </div>
            </div>
        </section>
    )
}
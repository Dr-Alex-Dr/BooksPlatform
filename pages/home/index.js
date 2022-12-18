import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/pages/Home.module.scss";
import { Genres } from "components/Genres";
import { BookItem } from "components/BookItem";



export default function Home() {
  // состояние прокрутки слайдера
  const [stateSlider, setStateSlider] = useState(0); // ? нужно достать из localStorag
  const [allSizesSliderItems, setAllSizesSliderItems] = useState([]);
  const [shift, setShift] = useState(0);
  const [stopInEnd, setStopInEnd] = useState(0);

  const [activeAddBtn, setActiveAddBtn] = useState(0);
  
  // сдеоать рефакторинг 
  useEffect(() => { 
    var allCategories = document.querySelectorAll('#HomeListItem'); 
    var allCategoriesSize = []; // массив размеров всех элементов категорий
    allCategories.forEach(item => {
      allCategoriesSize.push(item.offsetWidth + 35);
    });
    setAllSizesSliderItems(allCategoriesSize);

    const Wheel = (e) => {
      localShift += e.deltaY;
      setShift(localShift);
      e.preventDefault ? e.preventDefault() : (e.returnValue = false); 
    }
    
    var localShift = 0;
    var containerSLider = document.querySelector('#HomeCategoriesContainer');
    containerSLider.addEventListener('wheel', (e) => {Wheel(e)});

    let wrapperContainer = document.querySelector('#HomeCategoriesWrapper');
    let sumArray = allCategoriesSize.reduce((prev, current) => {return prev + current});
    setStopInEnd(sumArray - wrapperContainer.offsetWidth + 35);

  }, []);

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
    <section className={styles.Home}>
      <div className={styles.Container}>
        <div id="HomeCategoriesContainer" className={styles.HomeCategoriesContainer}>
          {/*кнопки управления слайдером*/}
          <button onClick={() => {setStateSlider(stateSlider - 1); setShift(shift - allSizesSliderItems[stateSlider - 1]);}} style={{left: 25, display: shift <= 0 ? 'none' : 'block'}} className={styles.HomeCategoriesSliderBtn}>
            <Image src="/home/SliderBtnRight.svg" width={30} height={30}/>
          </button>
          <button onClick={() => {setStateSlider(stateSlider + 1); setShift(shift + allSizesSliderItems[stateSlider]);}} style={{right: 25}} className={styles.HomeCategoriesSliderBtn}>
            <Image src="/home/SliderBtnLeft.svg" width={30} height={30}/>
          </button>

            <div id="HomeCategoriesWrapper" className={styles.HomeCategoriesWrapper}>    
              <ul style={{transform: `translateX(${-shift <= 0 ? -shift : 0}px)`}} className={styles.HomeCategoriesList}>
                <li id="HomeListItem" className={styles.HomeCategoriesListItem}>
                  <Link href="/"><a className="HomeCategoriesLink">Новинки</a></Link>
                </li>
                <li id="HomeListItem" className={styles.HomeCategoriesListItem}>
                  <Link href="/"><a className="HomeCategoriesLink">Популярное</a></Link>
                </li>
                <li id="HomeListItem" className={styles.HomeCategoriesListItem}>
                  <Link href="/"><a className="HomeCategoriesLink">Аудиокниги</a></Link>
                </li>
                <li id="HomeListItem" className={styles.HomeCategoriesListItem}>
                  <Link href="/"><a className="HomeCategoriesLink">Новинки</a></Link>
                </li>
                <li id="HomeListItem" className={styles.HomeCategoriesListItem}>
                  <Link href="/"><a className="HomeCategoriesLink">Популярное</a></Link>
                </li>
                <li id="HomeListItem" className={styles.HomeCategoriesListItem}>
                  <Link href="/"><a className="HomeCategoriesLink">Аудиокниги</a></Link>
                </li>
                <li id="HomeListItem" className={styles.HomeCategoriesListItem}>
                  <Link href="/"><a className="HomeCategoriesLink">Новинки</a></Link>
                </li>
                <li id="HomeListItem" className={styles.HomeCategoriesListItem}>
                  <Link href="/"><a className="HomeCategoriesLink">Популярное</a></Link>
                </li>
                <li id="HomeListItem" className={styles.HomeCategoriesListItem}>
                  <Link href="/"><a className="HomeCategoriesLink">Аудиокниги</a></Link>
                </li>
              </ul>
            </div>
        </div>

    
        <div className={styles.HomeMCategoriesContainer}>
          <h2 className={styles.HomeMTitle}>Главная</h2>
          <div className={styles.HomeMCategoriesItemContainer}>
            <Link href='/'><a className={styles.HomeMCategoriesName}>Рекомендации для Вас</a></Link>
            <div className={styles.HomeMCategoriesBooksContainer}>
              <div className={[styles.HomeMCategoriesBooksItem, FindTypeBook(1, 1)].join(' ')}>
                <Image style={{borderRadius: 8}} src='/home/bookImg/cover-2.jpg' width={120} height={170}/>
                <h3 className={styles.HomeMCategoriesBooksTitle}>Как легко завести разговор с любым человеком</h3>
                <p className={styles.HomeMCategoriesBooksAuthor}>Патрик Кинг</p>
              </div>
              <div className={[styles.HomeMCategoriesBooksItem, FindTypeBook(null, 1)].join(' ')}>
                <Image style={{borderRadius: 8}} src='/home/bookImg/cover-3.webp' width={120} height={170}/>
                <h3 className={styles.HomeMCategoriesBooksTitle}>Как легко завести разговор с любым человеком</h3>
                <p className={styles.HomeMCategoriesBooksAuthor}>Патрик Кинг</p>
              </div>
              <div className={[styles.HomeMCategoriesBooksItem, FindTypeBook(null, 1)].join(' ')}>
                <Image style={{borderRadius: 8}} src='/home/bookImg/cover-4.webp' width={120} height={170}/>
                <h3 className={styles.HomeMCategoriesBooksTitle}>Как легко завести разговор с любым человеком</h3>
                <p className={styles.HomeMCategoriesBooksAuthor}>Патрик Кинг</p>
              </div>
              <div className={[styles.HomeMCategoriesBooksItem, FindTypeBook(1, 1)].join(' ')}>
                <Image style={{borderRadius: 8}} src='/home/bookImg/cover-2.jpg' width={120} height={170}/>
                <h3 className={styles.HomeMCategoriesBooksTitle}>Как легко завести разговор с любым человеком</h3>
                <p className={styles.HomeMCategoriesBooksAuthor}>Патрик Кинг</p>
              </div>
            </div>
          </div>
          <div className={styles.HomeMCategoriesItemContainer}>
            <Link href='/'><a className={styles.HomeMCategoriesName}>Новинки</a></Link>
            <div className={styles.HomeMCategoriesBooksContainer}>
              <div className={[styles.HomeMCategoriesBooksItem, FindTypeBook(1, 1)].join(' ')}>
                <Image style={{borderRadius: 8}} src='/home/bookImg/cover-2.jpg' width={120} height={170}/>
                <h3 className={styles.HomeMCategoriesBooksTitle}>Как легко завести разговор с любым человеком</h3>
                <p className={styles.HomeMCategoriesBooksAuthor}>Патрик Кинг</p>
              </div>
              <div className={[styles.HomeMCategoriesBooksItem, FindTypeBook(null, 1)].join(' ')}>
                <Image style={{borderRadius: 8}} src='/home/bookImg/cover-3.webp' width={120} height={170}/>
                <h3 className={styles.HomeMCategoriesBooksTitle}>Как легко завести разговор с любым человеком</h3>
                <p className={styles.HomeMCategoriesBooksAuthor}>Патрик Кинг</p>
              </div>
              <div className={[styles.HomeMCategoriesBooksItem, FindTypeBook(null, 1)].join(' ')}>
                <Image style={{borderRadius: 8}} src='/home/bookImg/cover-4.webp' width={120} height={170}/>
                <h3 className={styles.HomeMCategoriesBooksTitle}>Как легко завести разговор с любым человеком</h3>
                <p className={styles.HomeMCategoriesBooksAuthor}>Патрик Кинг</p>
              </div>
              <div className={[styles.HomeMCategoriesBooksItem, FindTypeBook(1, 1)].join(' ')}>
                <Image style={{borderRadius: 8}} src='/home/bookImg/cover-2.jpg' width={120} height={170}/>
                <h3 className={styles.HomeMCategoriesBooksTitle}>Как легко завести разговор с любым человеком</h3>
                <p className={styles.HomeMCategoriesBooksAuthor}>Патрик Кинг</p>
              </div>
            </div>
          </div>
        </div>

    <div className={styles.HomeBooksPageContainer}>
      <div className={styles.HomeBooksContainer}>
        <BookItem
          linkImg='/home/bookImg/cover-3.webp'
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
          linkImg='/home/bookImg/cover-5.jpg'
          name='Лето волонтёра'
          desc='Мир не меняется в один миг. А иногда все победы могут оказаться поражениями. 
          Вы же не думали, что все будет так просто – придет Высший и наведет порядок?'
          author='Сергей Лукьяненко'
          genre='Научная фантастика'
          rating='4,8'
          type={[1, null]}
          id='13'
        />    
      </div>

      <Genres />
    </div>
      </div>
    </section>
    
  )
}

// touch скролл
// скролл по стрелкам
// скролл колесом мыши
// 1) проверить если все эелементы входт на экран, то убрать стрелки
// 2) если все элементв не входят, рисуем левую стрелку
// 3) если произошел сдвиг, рисуем правую стрелку
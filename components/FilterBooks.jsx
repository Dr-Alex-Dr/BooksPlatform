import styles from "../styles/components/FilterBooks.module.scss";
import { useState } from "react";


function FilterBooks() {
    const [activeBtn, setActiveBtn] = useState(false);
    const [currentState, setCurrentState] = useState(0);
    const categoryFilter = ['По популярности', 'По дате написания', 'По сериям'];

    return (
    <>
        <div className={styles.AuthorFilter}>
            <button onClick={() => {setActiveBtn(!activeBtn)}} className={[styles.AuthorFilterBtn, activeBtn ? styles.AuthorFilterBtnActive : " "].join(' ')}>
                <h3 className={[styles.AuthorFilterStartCategory, activeBtn ? styles.AuthorFilterTitle : " "].join(" ")}>{activeBtn ? 'Сортировка' : categoryFilter[currentState]}</h3>
            </button> 
            <div className={styles.AuthorFilterOtherCategories}>    
                {categoryFilter.map((item, index) => (
                    <button className={[styles.AuthorFilterCategoryBtn, activeBtn ? styles.AuthorFilterCategoryBtnActive : ""].join(" ")} onClick={() => {setCurrentState(index); setActiveBtn(false)}} key={index}>
                        <h3 className={[styles.AuthorFilterNameCategory, index == currentState ? styles.AuthorFilterNameCategoryActive : " "].join(" ")}>{item}</h3>
                    </button>
                ))}           
            </div>
        </div>
    </>
    )
}

export {FilterBooks};
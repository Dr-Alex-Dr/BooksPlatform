import styles from "../../styles/components/Buttons/toggleSwitch.module.scss";

function ToggleSwitch({toggleSwitch, setToggleSwitch}) {
    return (
        <button onClick={() => {setToggleSwitch(!toggleSwitch)}} >
            <div className={[styles.Wrapper, toggleSwitch ? styles.ToggleBtnContainerActive : ''].join(' ')}>
                <div className={[styles.ToggleBtn, toggleSwitch ? styles.ToggleBtnActive : ''].join(' ')}></div>
            </div>
        </button>
    )
}

export {ToggleSwitch};
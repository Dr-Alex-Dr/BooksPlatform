import styles from "../../styles/buttons/toggleSwitch.module.scss";

function ToggleSwitch({toggleSwitch, setToggleSwitch}) {
    console.log(toggleSwitch);
    return (
        <button onClick={() => {setToggleSwitch(!toggleSwitch)}} >
            <div className={[styles.Wrapper, toggleSwitch ? styles.ToggleBtnContainerActive : ''].join(' ')}>
                <div className={[styles.ToggleBtn, toggleSwitch ? styles.ToggleBtnActive : ''].join(' ')}></div>
            </div>
        </button>
    )
}

export default ToggleSwitch;
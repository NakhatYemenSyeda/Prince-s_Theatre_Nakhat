import React from "react";
import styles from './NothingToDisplay.module.css'

export default function NothingToDisplay() {
    return (
        <div className={styles.Container}>
            <div>
                Something went wrong, please try again!
            </div>
            <button>
                Click to reload
            </button>
        </div>
    );
}

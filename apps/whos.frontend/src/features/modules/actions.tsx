import React from 'react';
import styles from './actions.module.scss'

interface IQuickActionsModule {
    value: string | string[]
}

const QuickActionsModule = ({ value }: IQR) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.btn}>Action</div>
            <div className={styles.btn}>Revoke</div>
            <div className={styles.btn}>Next</div>
            <div className={styles.btn}>Bring Now</div>
        </div>
    );
};

export default QuickActionsModule;

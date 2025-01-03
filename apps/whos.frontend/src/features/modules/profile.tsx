import React from 'react';
import styles from './profile.module.scss'

interface IProfileModule {
    value: string | string[]
}

const ProfileModule = ({ value }: IQR) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div>pic</div>
                <div>Name</div>
                <div>Sub</div>
                <div>Sub - </div>
                <div>emails</div>
                <div>card status</div>
            </div>

            <div className={styles.container}>
                tenants info
            </div>
        </div>
    );
};

export default ProfileModule;

import React from 'react';
import {Link} from "react-router-dom";
import { ReactComponent as Back } from '../../assets/back.svg';

import styles from './BackToOverview.module.scss'

const BackToOverview = () => {
    return (
        <div className={styles['back-to-overview']}>
            <Back className={styles.svg}/>
            <Link className={styles['back-link']} to='/'>back to overview</Link>
        </div>
    );
}

export default BackToOverview;
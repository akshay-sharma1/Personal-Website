import React from 'react';
import styles from './Demo.module.css'

const demo = ( props ) => (
    <div className={styles.Demo}>
        <a href={props.reference} alt="" target='_blank'>
            <img src={props.source} alt="" />
        </a>
    </div>
)

export default demo;
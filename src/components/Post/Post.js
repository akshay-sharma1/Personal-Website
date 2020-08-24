import React from 'react';

import styles from './Post.module.css'


const post = ( props ) => (
    <div className={styles.Post}>
        <div className={styles.metaInfo}>
            <div className={styles.Date} style={{backgroundColor: props.color}}>{props.date}</div>
            <p className={styles.ReadTime}>{props.length}</p>
        </div>
        <h1 className={styles.Title}>{props.postTitle}</h1>
        <p className={styles.Subtitle}>{props.subtitle}</p>
        <hr className={styles.Divider}></hr>
    </div>
)

export default post;
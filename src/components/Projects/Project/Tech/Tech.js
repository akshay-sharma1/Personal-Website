import React from 'react';
import styles from './Tech.module.css'

const tech = ( props ) => {
    const result = props.names.map(name => {
    return <span className={styles.Highlight}>{name}</span>
    })

    return (
    <div className={styles.Tech}>
        {result}
    </div>
    )
}
    

export default tech;
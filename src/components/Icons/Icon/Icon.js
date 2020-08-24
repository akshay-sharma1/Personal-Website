import React from 'react';
import styles from './Icon.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationArrow, faFile} from '@fortawesome/free-solid-svg-icons'

const icon = ( props ) => {
    let icon = null

    switch ( props.type ) {
        case('location'):
            icon = 
                <div className={styles.icon}>
                    <FontAwesomeIcon className={styles.awesome} icon={faLocationArrow}/>
                    <span>{props.information}</span>
                </div>
            break;
        case('Resume'):
            icon = 
                <div className={styles.icon}>
                    <FontAwesomeIcon className={styles.awesome} icon={faFile} />
                    <a href={props.information} alt="" target="_blank">{props.type}</a>
                </div>
            break;
        default:
            icon = null
    }

    return icon;
}

export default icon;


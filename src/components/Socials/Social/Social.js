import React from 'react';
import styles from './Social.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faLinkedin, faGithub }  from '@fortawesome/free-brands-svg-icons'


const social = ( props ) => {
    let icon = null

    switch ( props.type ) {
        case('twitter'):
            icon = <FontAwesomeIcon icon={faTwitter} />;
            break;
        case('mail'):
            icon = <FontAwesomeIcon icon={faEnvelope} />;
            break;
        case('linkedin'):
            icon = <FontAwesomeIcon icon={faLinkedin} />;
            break;
        case('github'):
            icon = <FontAwesomeIcon icon={faGithub} />
            break;
        default:
            icon = null;
    }

    return (
        <div className={styles.Social}><a href={props.link} alt="" style={{outline: 'none'}} target='_blank'> {icon}</a></div>
    )
}

// TODO: add prop types


export default social;
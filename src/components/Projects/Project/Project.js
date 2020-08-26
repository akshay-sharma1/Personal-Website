import React from 'react';
import Demo from './Demo/Demo'
import Tech from './Tech/Tech'
import styles from './Project.module.css'

const project = ( props ) => {
    console.log(props.demo)
    return (
        <div className={styles.Project}>
            <Demo source={props.demo} reference={props.link}/>
            <div className={styles.MainContent}>
                {props.title}
                <p className={styles.Description}>{props.description}</p>
                <Tech names={props.technologies}/>
            </div>
            <a className={styles.ProjectLink} href={props.link}>
                <p>
                    View Project
                    <span> > </span>
                </p>
            </a>
        </div>
    )
}

export default project;
import React from 'react'
import ReactMarkdown from 'react-markdown'
import Link from 'next/link'
import styles from './FullPost.module.css'


const FullPost = ( props ) => (
    <div className={styles.FullPost}>
        <Link href='/blog'>
            <a className={styles.BackLink}>
                Back
            </a>
        </Link>

        <h2 className={styles.Title}>{props.title}</h2>
        <p className={styles.Date} style={{backgroundColor: props.color}}> {props.date}</p>
        <img src={props.image}/>
        <ReactMarkdown className={styles.Content} source={props.postContent}/>
        <hr></hr>
        <p className={styles.Thanks}>Thanks for Reading!</p>
    </div>
)

export default FullPost;
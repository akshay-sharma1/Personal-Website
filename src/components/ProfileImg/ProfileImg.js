import React from 'react';
import styles from './ProfileImg.module.css'

const profileImg = ( props ) => (
    <div className={styles.ProfileImg}>
        <img src='/static/profile_img.jpg' alt="profile" style={{background: props.background}}/>
    </div>
)

export default profileImg;
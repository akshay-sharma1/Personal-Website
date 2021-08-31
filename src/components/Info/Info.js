import React, { Component } from 'react';
import ProfileImg from '../../components/ProfileImg/ProfileImg'
import Socials from '../../components/Socials/Socials'
import Icons from '../../components/Icons/Icons'
import styles from './Info.module.css'

class Info extends Component {
    state = {
        socials : {
            mail: 'mailto:akshaysharma2019@gmail.com',
            linkedin: 'https://www.linkedin.com/in/akshay-sharma-186252178/',
            github: 'https://github.com/akshay-sharma1',
            twitter: 'https://www.twitter.com/@null/'
        },
        icons : {
            location: 'Philadelphia, PA',
            Resume: 'https://drive.google.com/file/d/10xDMZfSrViuNSfu8xFrNq3tLVV8-XJbF/view?usp=sharing'
        }
    }

    render () {
        return (
            <div className={styles.Info}>
                <ProfileImg background='background: center;'/>
                <div className={styles.Username}>Akshay Sharma</div>
                <div className={styles.Bio}>Junior at the University of Pennsylvania</div>
                <div className={styles.IconSocials}>
                    <Icons icons={this.state.icons}/>
                    <Socials socials={this.state.socials} />
                </div>
            </div>
        )
    }
}
export default Info;
import React from 'react';
import Social from './Social/Social'

const socials = ( props ) => {
    let providedSocials = Object.keys(props.socials)
        .map(socialKey => {
            return [...Array(props.socials[socialKey])].map((socialLink, _) => {
                return <Social 
                key={socialKey} 
                type={socialKey} 
                link={socialLink}/>
            })
        })
        .reduce((arr, el) => {
            return arr.concat(el)
        }, [])  

    return (
        <div>
            {providedSocials}
        </div>
    )
}

export default socials;
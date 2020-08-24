import React from 'react';
import Icon from './Icon/Icon'

const icons = ( props ) => {
    let providedIcons = Object.keys(props.icons)
        .map(iconKey => {
            return [...Array(props.icons[iconKey])].map((information, _) => {
                return <Icon 
                key={iconKey} 
                type={iconKey} 
                information={information}/>
            })
        })
        .reduce((arr, el) => {
            return arr.concat(el)
        }, [])

    return (
        <div>
            {providedIcons}
        </div>
    )
}

export default icons;
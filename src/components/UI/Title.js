import React from 'react'
import classes from './Titles.module.css'
const Title = (props) => {
    const clss= `${classes.titles} ${props.className}`

    return (
        <div className={clss}> {props.children}</div>

    )
}

export default Title

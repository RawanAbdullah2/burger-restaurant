import React from 'react'
import classes from'./Card.module.css'
const Card = (props) => {
    const clss= `${classes.card} ${props.className}`

    return (
     <div className={clss}> {props.children}</div>
    )
}

export default Card

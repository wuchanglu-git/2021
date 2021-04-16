import React from 'react'

export default function Children(props) {
    return (
        <div>
            {props.children}
            {props.left}
            {props.right}
        </div>
    )
}

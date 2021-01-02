import styles from './CVLayout.module.scss'
import React from 'react'


export default class CVLayout extends React.Component {

    render() {
        return (
            <>
                <p className={styles.header}>Curriculum Vitae</p>
                {this.props.children}
            </>
        )
    }
}
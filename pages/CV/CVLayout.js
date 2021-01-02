import styles from './CVLayout.module.scss'
import React from 'react'
import Link from 'next/link'


export default class CVLayout extends React.Component {

    render() {
        return (
            <>
                <div className={styles.mobile}>
                    <p className={styles.header}>Curriculum Vitae</p>
                    <div className={styles.wrapper}>
                        <ul className={styles.section_links}>
                            <li className={this.props.active == 'education'? styles.active : ''}><Link href='/CV/education'>Education</Link></li>
                            <li className={this.props.active == 'experience'? styles.active : ''}><Link href='/CV/experience'>Experience</Link></li>
                            <li className={this.props.active == 'skills'? styles.active : ''}><Link href='/CV/skills'>Skills</Link></li>
                        </ul>
                        <div className={styles.line} />
                        <div className={styles.content}>
                            {this.props.children}
                        </div>
                    </div>
                </div>
                
            </>
        )
    }
}
import styles from './NavLayout.module.scss'
import Link from 'next/link'
import { motion } from 'framer-motion'
import React from 'react'

import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'

export default class NavLayout extends React.Component {

    targetELement = null;

    constructor(props) {
        super(props);
        this.state = {
            open: false,
        }
        this.toggleMenu = this.toggleMenu.bind(this);
    }

    toggleMenu() {
        this.state.open ? enableBodyScroll(this.targetElement) : disableBodyScroll(this.targetElement);
        this.setState({
            open: !this.state.open
        })
    }

    componentDidMount() {
        this.targetElement = document.getElementById('nav');
    }

    render() {
        return (
            <>
                <div className={styles.hamburger_icon} onClick={this.toggleMenu}>
                    <motion.div initial={{
                            opacity: 1,
                            backgroundColor: '#110058'
                        }} animate={{
                            opacity: this.state.open? 0 : 1,
                            backgroundColor: this.state.open? '#FFFFFF' : '#110058',
                            transition: {
                                duration: 0.5,
                            }
                        }}></motion.div>

                        <motion.div initial={{
                            opacity: 1,
                            backgroundColor: '#110058'
                        }} animate={{
                            rotate: this.state.open? 45 : 0,
                            top: this.state.open? '5px' : '0px',
                            backgroundColor: this.state.open? '#FFFFFF' : '#110058',
                            transition: {
                                duration: 0.5,
                            }
                        }}></motion.div>

                        <motion.div initial={{
                            opacity: 1,
                            backgroundColor: '#FFFFFF',
                        }} animate={{
                            rotate: this.state.open? -45 : 0,
                            top: this.state.open? '-2px' : '0px',
                            backgroundColor: this.state.open? '#FFFFFF' : '#110058',
                            transition: {
                                duration: 0.5,
                            }
                        }}></motion.div>
                </div>

                <motion.div className={styles.mask} onClick={this.toggleMenu}
                    initial={{
                        opacity: 0,
                    }}
                    animate={{
                        opacity: this.state.open? 0.4 : 0,
                        pointerEvents: this.state.open? 'auto' : 'none',
                        transition: {
                            duration: 0.4,
                        }
                    }}
                >

                </motion.div>

                <motion.div id='nav' className={styles.nav_container}
                initial={{
                    opacity: 0.5,
                    left: '-40vw',
                    display: 'none',
                }}
                animate={{
                    opacity: this.state.open? 1 : 0.5,
                    left: this.state.open? 0 : '-40vw',
                    display: 'flex',
                    transition: {
                        duration: 0.7,
                    }
                }}
                >
                    <ul className={styles.nav_list}>
                        <li onClick={this.toggleMenu}><Link href='/'>Home</Link></li>
                        <li onClick={this.toggleMenu}><Link href='/CV/'>CV</Link></li>
                        <li onClick={this.toggleMenu}><Link href='/contact'>Contact</Link></li>
                    </ul>

                </motion.div>


                {this.props.children}
            </>
        )
    }
}
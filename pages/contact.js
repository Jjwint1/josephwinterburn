import styles from '../styles/contact.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import Link from 'next/link'

const Contact = () => (
    <>
        <p className={styles.header}>Contact Me</p>
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <ul className={styles.contact_list}>
                    <li>
                        <FontAwesomeIcon icon={faEnvelope} className={styles.mail_icon}/>
                        <Link href='mailto:jjw79@cam.ac.uk'><a>jjw79@cam.ac.uk</a></Link>
                    </li>

                    <li>
                        <FontAwesomeIcon icon={faGithub} className={styles.gh_icon}/>
                        <Link href='https://github.com/Jjwint1'><a>Jjwint1</a></Link>
                    </li>
                </ul>
            </div>
            
            
        </div>
    </>
)

export default Contact;
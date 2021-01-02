import CVLayout from './CVLayout'
import styles from '../../styles/education.module.scss'
import { motion, AnimatePresence } from 'framer-motion'

const Education = () => (
        <motion.div className={styles.education_container}
            initial={{
                opacity: 0,
            }}
            animate={{
                opacity: 1,
                transition: {
                    duration: 0.7,
                }
            }}
            exit={{
                opacity: 0,
                transition: {
                    duration: 0.7,
                }
            }}
        >
            <div className={styles.section}>
                <p className={styles.title}>
                    <span>University of Cambridge</span>  |  MSCi Natural Sciences (Astrophysics)
                </p>
                <p className={styles.dates}>
                    2017 - Present
                </p>
                <p className={styles.content}>
                    I achieved a 2.i in my undergraduate finals. I am currently studying for an integrated masters, graduating in June 2021.
                </p>
            </div>

            <div className={styles.section}>
                <p className={styles.title}>
                    <span>Uppingham School</span>  |  Academic Scholarship
                </p>
                <p className={styles.dates}>
                    2015 - 2017
                </p>
                <p className={styles.content}>
                    Further Mathematics A Level: A*<br/>
                    Mathematics A Level: A*<br/>
                    Physics Pre-U: D1<br/>
                    Chemistry Pre-U: D1<br/>
                    French AS Level: A<br/>
                    DELF B2
                </p>
            </div>
        </motion.div>
)

Education.Layout = CVLayout;
Education.Name = 'education';

export default Education;
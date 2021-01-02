import CVLayout from './CVLayout'
import styles from '../../styles/skills.module.scss'
import { motion, AnimatePresence } from 'framer-motion'

import Bar from '../../components/bar/Bar'

const Skills = () => (
        <motion.div className={styles.skills_container}
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
            <ul className={styles.skills_list}>
                <li>Python <Bar value={4} /></li>
                <li>Julia <Bar value={3} /></li>
                <li>HTML <Bar value={5} /></li>
                <li>CSS <Bar value={5} /></li>
                <li>JavaScript <Bar value={3} /></li>
                <li>Next.js <Bar value={4} /></li>
                <li>Bash/Zsh <Bar value={5} /></li>
                <li>Java <Bar value={3} /></li>
                <li>PHP <Bar value={3} /></li>
                <li>Swift <Bar value={2} /></li>
            </ul>
        </motion.div>
)

Skills.Layout = CVLayout;
Skills.Name = 'skills';

export default Skills;
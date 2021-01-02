import CVLayout from './CVLayout'
import styles from '../../styles/experience.module.scss'
import { motion, AnimatePresence } from 'framer-motion'

const Experience = () => (
        <motion.div className={styles.experience_container}
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
                    <span>John Locke Institute</span>  |  Faculty
                </p>
                <p className={styles.dates}>
                    July 2020 - August 2020
                </p>
                <p className={styles.content}>
                I developed an online system to manage the Institute’s global essay competition - receiving approximately 2800 entries - ensuring and enforcing consistency between 27 graders. My system reduced costs for the company, and increased consistency, reliability, and integrity of their essay marking.<br/>
                <br/>
                I also taught mathematics as part of the faculty for their summer school, with a particular focus on microeconomics and optimisation techniques, for example Variational Calculus, specialising in Lagrange Multipliers to optimise constrained multivariate functions.<br/>
                <br/>
                In order to build a database of information about schools and their contacts, valuable to the Institute, I produced a web scraping script which collated and stored the information in a desirable format, reducing the company’s monetary and time expenditure.<br/>
                <br/>
                I also developed a system to manage the two-way feedback between students and faculty as part of the Institute’s evaluation after their summer school.
                </p>
            </div>

            <div className={styles.section}>
                <p className={styles.title}>
                    <span>Summer Research Project</span>  |  Cambridge High Energy Physics
                </p>
                <p className={styles.dates}>
                    August 2019 - September 2019
                </p>
                <p className={styles.content}>
                I worked with a researcher in the HEP group at Cambridge University on a project to
                determine the maximum possible resolution of a muon tomography imaging system. The project included building a C++ application, linked with the GEANT4 software package, to run Monte-Carlo simulations of particle scattering. It also included using Gawk, bash and Python scripts to transfer and analyse the data produced, and to distribute and run code using HTcondor. I came across software and areas of programming that I hadn’t encountered before, and had to teach myself how to use them effectively to achieve the goal of the project. I had to work mostly independently to postulate ideas and explore their possibilities, both computationally and mathematically, helping to prove a novel stochastic mathematical result.
                </p>
            </div>

            <div className={styles.section}>
                <p className={styles.title}>
                    <span>Oxbridge Academic Programs</span>  |  Program Assistant
                </p>
                <p className={styles.dates}>
                    July 2019 - August 2019
                </p>
                <p className={styles.content}>
                This was an incredibly varied position - my main role was to support whoever I needed on the faculty to facilitate the program, a task to which I applied a lot of the technical skills I had developed in order to streamline the organisational aspect and drastically reduce the time complexity of many tasks. I was also responsible for the residential wellbeing of students living on my staircase, with whom I developed a great relationship. I also had to interact with the parents of students on the program, some of which were high profile.
                </p>
            </div>
        </motion.div>
)

Experience.Layout = CVLayout;
Experience.Name = 'experience';

export default Experience;
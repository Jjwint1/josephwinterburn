import CVLayout from './CVLayout'
import styles from '../../styles/CV.module.scss'
import Link from 'next/link'

const CV = () => (
    <>
        <p className={styles.instruction_mobile}>Use the links above to find out more about me.</p>
        <p className={styles.instruction_desktop}>Use the links to the left to find out more about me.</p>

        <p className={styles.download}>Click <Link href='/CV.pdf'><a>here</a></Link> to download a PDF version of my CV.</p>
    </>
);

CV.Layout = CVLayout;

export default CV;
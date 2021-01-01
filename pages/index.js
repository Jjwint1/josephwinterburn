import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <>
      <Head><title>Joseph Winterburn</title></Head>

      <div className={styles.header}>
        <div class={styles.img_container}>
          <img src='me.png' />
        </div>
        <p className={styles.name}>Hello, I'm Joe.</p>
      </div>

      <div className={styles.bio}>
        I'm an Astrophysics student at the University of Cambridge, with an interest in web development and UI design. I build small, personal web and mobile apps using Next.js and React Native respectively. I have also played around with building REST APIs for the backend of some apps.
        <br/>
        <br/>
        Here are some of the technologies, languages &amp; frameworks that I use:
      </div>

      <div className={styles.technologies}>
        <Link href='https://www.python.org/'><img src='python-logo.png' className={styles.logo}/></Link>
        <Link href='https://julialang.org/'><img src='julia-logo.png' className={styles.logo}/></Link>
        <Link href='https://nextjs.org/'><img src='next-logo.png' className={styles.logo}/></Link>
        <Link href='https://reactjs.org/'><img src='react-logo.png' className={styles.logo}/></Link>
        <Link href='https://www.java.com/'><img src='java-logo.png' className={styles.logo}/></Link>
        <Link href='https://flask.palletsprojects.com/'><img src='flask-logo.png' className={styles.logo}/></Link>
        <Link href='https://www.docker.com/'><img src='docker-logo.png' className={styles.logo}/></Link>
        <Link href='https://www.gnu.org/software/bash/'><img src='bash-logo.png' className={styles.logo}/></Link>
      </div>
    </>
  )
}

import styles from './Bar.module.scss'

const Bar = ({value}) => (
    <div className={styles.bar} style={{width: (value*8).toString()+'vw', margin: 0}}/>
)

export default Bar;
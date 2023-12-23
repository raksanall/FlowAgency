import { buttonType } from '../../Types'
import styles from "./style.module.css"
import { Link } from 'react-router-dom'

const ButtonYellow = ({title,bg,br,p,to}:buttonType) => {
  return (
    <>
    {to ? (
      <Link to={to} className={styles.ButtonYellow} style={{ backgroundColor: bg, borderRadius: br, padding: p }}>
        {title}
      </Link>
    ) : (
      <span className={styles.ButtonYellow} style={{ backgroundColor: bg, borderRadius: br, padding: p }}>
        {title}
      </span>
    )}
  </>
  )
}

export default ButtonYellow

import styles from "./style.module.css"
import Navigation from "../../../Navigation"
const FooterBottom = () => {
  return (
    <div className={styles.FooterBottom}>
        <Navigation/>
        <h4>Copyright 2022, Finsweet.com</h4>
    </div>
  )
}

export default FooterBottom

import styles from "./Connect.module.css"
import image from "./assets/Saly phone dude.svg"
import { Discord, Whatsapp } from "./assets/svg"
import data from "../../../data.json"

const Connect = () => {
  return (
    <div id="contact" className={styles.ConnectWrapper}>
      <h1>Connect With Us</h1>
      <div className={styles.content}>
        <div className={styles.innerContent}>
          <div>
            <h2>Join µLearn {data.collegeCode} Discord server!</h2>
            <p>Do join our campus community discord server, so you don't miss out any of the updates.</p>
          </div>
          <div className={styles.socialMedia}>
            <a href={data.discordLink} className={styles.discord}>
              <Discord />
              Join Discord
            </a>
            <a href={data.whatsAppLink} className={styles.Whatsapp}>
              <Whatsapp />
              Join Whatsapp
            </a>
          </div>
        </div>
        <div className={styles.image}>
          <img src={image || "/placeholder.svg"} alt="Connect with us" />
        </div>
      </div>
    </div>
  )
}

export default Connect


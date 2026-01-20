import styles from './card.module.css'
import cat01 from '../../img/categories/cat-01.jpg'
import arrowImg from '../../img/icons/arrow.svg'
const Card = () => {
    return ( 
    <div className={styles.card}>
        <a href="#!" className={styles.card_link}>
            <img className={styles.card_img} src={cat01} alt="Category" />
            <div className={styles.card_body}>
                <div className={styles.card_text}>
                    <div className={styles.card_title}>Hoodies & Sweetshirt</div>
                    <div className={styles.card_muted}>Explore Now!</div>
                </div>
                <div className={styles.card_icon}>
                    <img src={arrowImg} alt="Open" />
                </div>
            </div>
        </a>
    </div> );
}
 
export default Card;
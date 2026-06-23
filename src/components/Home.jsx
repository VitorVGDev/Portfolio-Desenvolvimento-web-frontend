import styles from './Home.module.css';
import Person_img from '../assets/person.png';
import Curvy_arrow from '../assets/curvy_arrow.svg';
import Facebook_logo from '../assets/facebook.svg';

function Home() {
    return (
        <div className={styles.home_container}>
            <div className={styles.img_home_div}>
                <span className={styles.blur}></span>
                <img 
                    src={Person_img} alt="person using computer" 
                    className={styles.person_img}
                />
            </div>

            <div className={styles.text_home}>
                 <img 
                    src={Curvy_arrow}
                    className={styles.curvy_arrow}
                />
                <p className={styles.presentation_home}>Hello! I am <span>Ibrahim Memon</span>
                </p>

                <p className={styles.top_home_text}>A Designer who</p>
                <h1>Judges a book <br/>
                    by its <span>cover</span>
                    ...
                </h1>
                <p className={styles.footer_home_text}>Because if the cover does not impress you what else can?</p>  

                <div className={styles.home_profission}>
                    <h1>I'm a Software Engineer.
                        <span className={styles.span_line}>|</span>
                    </h1>
                    <p>Currently, I'm a Software Engineer at
                    <img src={Facebook_logo} alt="" />
                    <span>Facebook</span>,</p>

                    <p className={styles.text_profission}>
                        A self-taught UI/UX designer, functioning in the industry for 3+ years now.
                        I make meaningful and delightful digital products that create an equilibrium
                        between user needs and business goals. 
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Home
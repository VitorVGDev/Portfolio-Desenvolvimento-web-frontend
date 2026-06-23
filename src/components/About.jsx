import styles from '../components/About.module.css';
import img_group1 from '../assets/Group 1.png';
import img_group2 from '../assets/Group 2.png';
import img_group3 from '../assets/Group 3.png';
import img_group4 from '../assets/Group 4.png';

function About () {
    return (
        <div className={styles.about_container} id='about'>
            <span className={styles.blur2}></span>
            <div className={styles.about_content_wrapper}>
                <div className={styles.about_grid}>
                    <div className={styles.header_about}>
                        <h1>Work Experience</h1>
                    </div>
                    <div className={styles.box1}>
                        <div>
                            <img src={img_group1}
                            className={styles.img_about}
                            />
                        </div>
                        <div>
                            <h1>CIB on the Mobile</h1>
                            <p>Take your client onboard seamlessly by our amazing
                            tool of digital onboard process.</p>
                            <button className={styles.button_about}>Learn More</button>
                        </div>
                    </div>
                    <div className={styles.box2}>
                        <div>
                            <img src={img_group2} 
                            className={styles.img_about}
                            />
                        </div>
                        <div>
                            <h1>CIB on the Mobile</h1>
                            <p>Take your client onboard seamlessly by our amazing
                            tool of digital onboard process.</p>
                            <button className={styles.button_about}>Learn More</button>
                        </div>
                    </div>
                    <div className={styles.box3}>
                        <div>
                            <img src={img_group3}
                            className={styles.img_about}
                            />
                        </div>
                        <div>
                            <h1>CIB on the Mobile</h1>
                            <p>Take your client onboard seamlessly by our amazing
                            tool of digital onboard process.</p>
                            <button className={styles.button_about}>Learn More</button>
                        </div>
                    </div>
                    <div className={styles.box4}>
                        <div>
                            <img src={img_group4} 
                            className={styles.img_about}
                            />
                        </div>
                        <div>
                            <h1>CIB on the Mobile</h1>
                            <p>Take your client onboard seamlessly by our amazing
                            tool of digital onboard process.</p>
                            <button className={styles.button_about}>Learn More</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
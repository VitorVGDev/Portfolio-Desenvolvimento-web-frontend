import styles from './Lab.module.css';
import project_icon from '../assets/project_container_icon.svg';
import project1_img from '../assets/project1_img.png';
import project2_img from '../assets/project2_img.png';

function Lab () {
    return (
        <div className={styles.lab_container} id='lab'>
            <div className={styles.project_container}>
                <div className={styles.project_content}>
                    <div className={styles.header_text}>
                        <img src={project_icon} alt="Project icon" />
                        <span>Featured Project</span>
                        <h2>Example Project</h2>
                    </div>
                    <div className={styles.text_main}>
                        <p>
                            A web app for visualizing personalized Spotify data. View your
                            top artists, top tracks, recently played tracks, and detailed audio
                            information about each track. Create and save new playlists of
                            recommended tracks based on your existing playlists and more.
                        </p>
                    </div>
                    <div className={styles.icons}>   
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg" />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/android/android-plain.svg"/>
                    </div>
                </div>

                <div className={styles.project_img_container}>
                    <div>
                        <img src={project1_img}/>
                    </div>   
                </div>
            </div>

            <div className={styles.project_container}>
                <div className={styles.project_img_container}>
                    <div>
                        <img src={project2_img}/>
                    </div>   
                </div>
                <div className={styles.project_content}>
                    <div className={styles.header_text}>
                        <img src={project_icon} alt="Project icon" />
                        <span>Featured Project</span>
                        <h2>Example Project</h2>
                    </div>
                    <div className={styles.text_main}>
                        <p>
                            A web app for visualizing personalized Spotify data. View your
                            top artists, top tracks, recently played tracks, and detailed audio
                            information about each track. Create and save new playlists of
                            recommended tracks based on your existing playlists and more.
                        </p>
                    </div>
                    <div className={styles.icons}>           
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" />       
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-plain.svg" />
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Lab
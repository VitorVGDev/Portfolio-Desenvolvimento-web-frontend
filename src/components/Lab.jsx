import { useEffect, useState } from 'react';
import styles from './Lab.module.css';
import projectIcon from '../assets/project_container_icon.svg';
import project1Img from '../assets/project1_img.png';
import project2Img from '../assets/project2_img.png';

const apiBaseUrl = import.meta.env.VITE_API_BASE_URL ?? 'http://localhost:8080/api';

const projectImages = {
    project1: project1Img,
    project2: project2Img,
};

function Lab() {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const controller = new AbortController();

        async function loadProjects() {
            try {
                setLoading(true);
                const response = await fetch(`${apiBaseUrl}/projects`, {
                    signal: controller.signal,
                });

                if (!response.ok) {
                    throw new Error('Não foi possível carregar os projetos da API.');
                }

                const data = await response.json();
                setProjects(data);
            } catch (requestError) {
                if (requestError.name !== 'AbortError') {
                    setError(requestError.message);
                }
            } finally {
                setLoading(false);
            }
        }

        loadProjects();

        return () => controller.abort();
    }, []);

    return (
        <div className={styles.lab_container} id="lab">
            <div className={styles.sectionHeader}>
                <img src={projectIcon} alt="Project icon" />
                <div>
                    <span>Featured Project</span>
                    <h2>Projetos vindos do banco</h2>
                </div>
            </div>

            {loading ? <p className={styles.feedback}>Carregando projetos do back-end...</p> : null}
            {error ? <p className={styles.feedbackError}>{error}</p> : null}

            {!loading && !error
                ? projects.map((project, index) => {
                        const imageSource = projectImages[project.imageKey] ?? project1Img;
                        const isReverse = index % 2 === 1;

                        return (
                            <article
                                key={project.id}
                                className={`${styles.project_container} ${isReverse ? styles.reverse : ''}`}
                            >
                                <div className={styles.project_content}>
                                    <div className={styles.header_text}>
                                        <span>{project.featured ? 'Featured Project' : 'Project'}</span>
                                        <h2>{project.title}</h2>
                                    </div>

                                    <div className={styles.text_main}>
                                        <p>{project.description}</p>
                                    </div>

                                    <div className={styles.techList}>
                                        {project.technologies.split(',').map((technology) => (
                                            <span key={technology.trim()} className={styles.techItem}>
                                                {technology.trim()}
                                            </span>
                                        ))}
                                    </div>

                                    <div className={styles.actions}>
                                        {project.repositoryUrl ? (
                                            <a href={project.repositoryUrl} target="_blank" rel="noreferrer">
                                                Repositório
                                            </a>
                                        ) : null}
                                        {project.liveUrl ? (
                                            <a href={project.liveUrl} target="_blank" rel="noreferrer">
                                                Demonstração
                                            </a>
                                        ) : null}
                                    </div>
                                </div>

                                <div className={styles.project_img_container}>
                                    <img src={imageSource} alt={project.title} />
                                </div>
                            </article>
                        );
                    })
                : null}
        </div>
    );
}

export default Lab;
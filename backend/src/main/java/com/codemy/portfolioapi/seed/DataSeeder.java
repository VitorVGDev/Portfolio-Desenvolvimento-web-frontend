package com.codemy.portfolioapi.seed;

import com.codemy.portfolioapi.entity.Project;
import com.codemy.portfolioapi.repository.ProjectRepository;
import java.util.List;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

@Component
public class DataSeeder implements CommandLineRunner {

  private final ProjectRepository projectRepository;

  public DataSeeder(ProjectRepository projectRepository) {
    this.projectRepository = projectRepository;
  }

  @Override
  @Transactional
  public void run(String... args) {
    if (projectRepository.count() > 0) {
      return;
    }

    projectRepository.saveAll(List.of(
        createProject(
            "Codemy Landing",
            "Landing page institucional conectada ao back-end para exibir dados dinâmicos do portfólio.",
            "React, Spring Boot, PostgreSQL",
            "project1",
            "https://github.com/",
            "https://example.com",
            true),
        createProject(
            "API de Contato",
            "Endpoint responsável por receber mensagens enviadas pelo front-end e persistir no banco.",
            "Spring Boot, JPA, Bean Validation",
            "project2",
            "https://github.com/",
            "https://example.com",
            true),
        createProject(
            "Portfólio Técnico",
            "Projeto com CRUD, tratamento de erros e integração entre front-end e banco de dados.",
            "React, REST API, PostgreSQL",
            "project1",
            "https://github.com/",
            "https://example.com",
            false)));
  }

  private Project createProject(
      String title,
      String description,
      String technologies,
      String imageKey,
      String repositoryUrl,
      String liveUrl,
      boolean featured) {
    Project project = new Project();
    project.setTitle(title);
    project.setDescription(description);
    project.setTechnologies(technologies);
    project.setImageKey(imageKey);
    project.setRepositoryUrl(repositoryUrl);
    project.setLiveUrl(liveUrl);
    project.setFeatured(featured);
    return project;
  }
}

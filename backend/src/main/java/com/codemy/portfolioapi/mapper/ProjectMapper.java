package com.codemy.portfolioapi.mapper;

import com.codemy.portfolioapi.dto.ProjectResponseDto;
import com.codemy.portfolioapi.dto.ProjectUpsertRequestDto;
import com.codemy.portfolioapi.entity.Project;

public final class ProjectMapper {

  private ProjectMapper() {
  }

  public static ProjectResponseDto toResponse(Project project) {
    return new ProjectResponseDto(
        project.getId(),
        project.getTitle(),
        project.getDescription(),
        project.getTechnologies(),
        project.getRepositoryUrl(),
        project.getLiveUrl(),
        project.getImageKey(),
        project.isFeatured(),
        project.getCreatedAt(),
        project.getUpdatedAt());
  }

  public static Project toEntity(ProjectUpsertRequestDto request) {
    Project project = new Project();
    apply(project, request);
    return project;
  }

  public static void apply(Project project, ProjectUpsertRequestDto request) {
    project.setTitle(request.title());
    project.setDescription(request.description());
    project.setTechnologies(request.technologies());
    project.setRepositoryUrl(request.repositoryUrl());
    project.setLiveUrl(request.liveUrl());
    project.setImageKey(request.imageKey());
    project.setFeatured(Boolean.TRUE.equals(request.featured()));
  }
}

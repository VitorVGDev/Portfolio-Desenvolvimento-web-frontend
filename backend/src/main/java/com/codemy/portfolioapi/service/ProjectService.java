package com.codemy.portfolioapi.service;

import com.codemy.portfolioapi.dto.ProjectResponseDto;
import com.codemy.portfolioapi.dto.ProjectUpsertRequestDto;
import com.codemy.portfolioapi.entity.Project;
import com.codemy.portfolioapi.exception.ResourceNotFoundException;
import com.codemy.portfolioapi.mapper.ProjectMapper;
import com.codemy.portfolioapi.repository.ProjectRepository;
import java.util.List;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class ProjectService {

  private final ProjectRepository projectRepository;

  public ProjectService(ProjectRepository projectRepository) {
    this.projectRepository = projectRepository;
  }

  @Transactional(readOnly = true)
  public List<ProjectResponseDto> findAll() {
    return projectRepository.findAll().stream()
        .map(ProjectMapper::toResponse)
        .toList();
  }

  @Transactional(readOnly = true)
  public ProjectResponseDto findById(Long id) {
    Project project = getProjectOrThrow(id);
    return ProjectMapper.toResponse(project);
  }

  @Transactional
  public ProjectResponseDto create(ProjectUpsertRequestDto request) {
    Project project = ProjectMapper.toEntity(request);
    Project savedProject = projectRepository.save(project);
    return ProjectMapper.toResponse(savedProject);
  }

  @Transactional
  public ProjectResponseDto update(Long id, ProjectUpsertRequestDto request) {
    Project project = getProjectOrThrow(id);
    ProjectMapper.apply(project, request);
    Project savedProject = projectRepository.save(project);
    return ProjectMapper.toResponse(savedProject);
  }

  @Transactional
  public void delete(Long id) {
    Project project = getProjectOrThrow(id);
    projectRepository.delete(project);
  }

  private Project getProjectOrThrow(Long id) {
    return projectRepository.findById(id)
        .orElseThrow(() -> new ResourceNotFoundException("Projeto não encontrado com id " + id));
  }
}

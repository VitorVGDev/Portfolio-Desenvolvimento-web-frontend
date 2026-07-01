package com.codemy.portfolioapi.controller;

import com.codemy.portfolioapi.dto.ProjectResponseDto;
import com.codemy.portfolioapi.dto.ProjectUpsertRequestDto;
import com.codemy.portfolioapi.service.ProjectService;
import jakarta.validation.Valid;
import java.net.URI;
import java.util.List;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/projects")
public class ProjectController {

  private final ProjectService projectService;

  public ProjectController(ProjectService projectService) {
    this.projectService = projectService;
  }

  @GetMapping
  public ResponseEntity<List<ProjectResponseDto>> findAll() {
    return ResponseEntity.ok(projectService.findAll());
  }

  @GetMapping("/{id}")
  public ResponseEntity<ProjectResponseDto> findById(@PathVariable Long id) {
    return ResponseEntity.ok(projectService.findById(id));
  }

  @PostMapping
  public ResponseEntity<ProjectResponseDto> create(@Valid @RequestBody ProjectUpsertRequestDto request) {
    ProjectResponseDto response = projectService.create(request);
    return ResponseEntity.created(URI.create("/api/projects/" + response.id())).body(response);
  }

  @PutMapping("/{id}")
  public ResponseEntity<ProjectResponseDto> update(
      @PathVariable Long id,
      @Valid @RequestBody ProjectUpsertRequestDto request) {
    return ResponseEntity.ok(projectService.update(id, request));
  }

  @DeleteMapping("/{id}")
  public ResponseEntity<Void> delete(@PathVariable Long id) {
    projectService.delete(id);
    return ResponseEntity.noContent().build();
  }
}

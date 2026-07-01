package com.codemy.portfolioapi.dto;

import java.time.LocalDateTime;

public record ProjectResponseDto(
    Long id,
    String title,
    String description,
    String technologies,
    String repositoryUrl,
    String liveUrl,
    String imageKey,
    boolean featured,
    LocalDateTime createdAt,
    LocalDateTime updatedAt) {
}

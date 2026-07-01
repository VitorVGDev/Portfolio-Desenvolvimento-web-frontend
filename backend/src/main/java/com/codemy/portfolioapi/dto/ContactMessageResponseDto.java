package com.codemy.portfolioapi.dto;

import java.time.LocalDateTime;

public record ContactMessageResponseDto(
    Long id,
    String name,
    String email,
    String subject,
    String message,
    String status,
    LocalDateTime createdAt) {
}

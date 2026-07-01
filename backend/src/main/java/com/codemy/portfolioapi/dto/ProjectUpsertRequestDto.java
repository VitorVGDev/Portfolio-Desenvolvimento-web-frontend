package com.codemy.portfolioapi.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

public record ProjectUpsertRequestDto(
    @NotBlank(message = "o título é obrigatório")
    String title,

    @NotBlank(message = "a descrição é obrigatória")
    @Size(max = 1500, message = "a descrição deve ter no máximo 1500 caracteres")
    String description,

    @NotBlank(message = "as tecnologias são obrigatórias")
    @Size(max = 500, message = "as tecnologias devem ter no máximo 500 caracteres")
    String technologies,

    String repositoryUrl,

    String liveUrl,

    @NotBlank(message = "a chave da imagem é obrigatória")
    String imageKey,

    @NotNull(message = "o campo featured é obrigatório")
    Boolean featured) {
}

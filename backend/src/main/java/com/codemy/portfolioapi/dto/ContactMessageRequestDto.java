package com.codemy.portfolioapi.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public record ContactMessageRequestDto(
    @NotBlank(message = "o nome é obrigatório")
    String name,

    @NotBlank(message = "o email é obrigatório")
    @Email(message = "o email deve ser válido")
    String email,

    @NotBlank(message = "o assunto é obrigatório")
    @Size(max = 120, message = "o assunto deve ter no máximo 120 caracteres")
    String subject,

    @NotBlank(message = "a mensagem é obrigatória")
    @Size(max = 2000, message = "a mensagem deve ter no máximo 2000 caracteres")
    String message) {
}

package com.codemy.portfolioapi.exception;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.context.request.ServletWebRequest;

@RestControllerAdvice
public class GlobalExceptionHandler {

  @ExceptionHandler(ResourceNotFoundException.class)
  public ResponseEntity<ApiErrorResponse> handleResourceNotFound(
      ResourceNotFoundException exception,
      ServletWebRequest request) {
    return buildError(HttpStatus.NOT_FOUND, exception.getMessage(), request, List.of());
  }

  @ExceptionHandler(MethodArgumentNotValidException.class)
  public ResponseEntity<ApiErrorResponse> handleValidationError(
      MethodArgumentNotValidException exception,
      ServletWebRequest request) {
    List<String> details = exception.getBindingResult().getFieldErrors().stream()
        .map(this::formatFieldError)
        .collect(Collectors.toList());

    return buildError(HttpStatus.BAD_REQUEST, "Erro de validação", request, details);
  }

  @ExceptionHandler(Exception.class)
  public ResponseEntity<ApiErrorResponse> handleGenericException(
      Exception exception,
      ServletWebRequest request) {
    return buildError(HttpStatus.INTERNAL_SERVER_ERROR, "Erro inesperado: " + exception.getMessage(), request, List.of());
  }

  private ResponseEntity<ApiErrorResponse> buildError(
      HttpStatus status,
      String message,
      ServletWebRequest request,
      List<String> details) {
    ApiErrorResponse error = new ApiErrorResponse(
        LocalDateTime.now(),
        status.value(),
        status.getReasonPhrase(),
        message,
        request.getRequest().getRequestURI(),
        details);
    return ResponseEntity.status(status).body(error);
  }

  private String formatFieldError(FieldError fieldError) {
    return fieldError.getField() + ": " + fieldError.getDefaultMessage();
  }
}

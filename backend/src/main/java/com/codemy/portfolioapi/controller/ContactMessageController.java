package com.codemy.portfolioapi.controller;

import com.codemy.portfolioapi.dto.ContactMessageRequestDto;
import com.codemy.portfolioapi.dto.ContactMessageResponseDto;
import com.codemy.portfolioapi.service.ContactMessageService;
import jakarta.validation.Valid;
import java.net.URI;
import java.util.List;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/contact-messages")
public class ContactMessageController {

  private final ContactMessageService contactMessageService;

  public ContactMessageController(ContactMessageService contactMessageService) {
    this.contactMessageService = contactMessageService;
  }

  @GetMapping
  public ResponseEntity<List<ContactMessageResponseDto>> findAll() {
    return ResponseEntity.ok(contactMessageService.findAll());
  }

  @PostMapping
  public ResponseEntity<ContactMessageResponseDto> create(
      @Valid @RequestBody ContactMessageRequestDto request) {
    ContactMessageResponseDto response = contactMessageService.create(request);
    return ResponseEntity.created(URI.create("/api/contact-messages/" + response.id())).body(response);
  }
}

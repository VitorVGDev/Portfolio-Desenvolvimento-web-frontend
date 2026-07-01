package com.codemy.portfolioapi.mapper;

import com.codemy.portfolioapi.dto.ContactMessageRequestDto;
import com.codemy.portfolioapi.dto.ContactMessageResponseDto;
import com.codemy.portfolioapi.entity.ContactMessage;

public final class ContactMessageMapper {

  private ContactMessageMapper() {
  }

  public static ContactMessageResponseDto toResponse(ContactMessage contactMessage) {
    return new ContactMessageResponseDto(
        contactMessage.getId(),
        contactMessage.getName(),
        contactMessage.getEmail(),
        contactMessage.getSubject(),
        contactMessage.getMessage(),
        contactMessage.getStatus(),
        contactMessage.getCreatedAt());
  }

  public static ContactMessage toEntity(ContactMessageRequestDto request) {
    ContactMessage contactMessage = new ContactMessage();
    contactMessage.setName(request.name());
    contactMessage.setEmail(request.email());
    contactMessage.setSubject(request.subject());
    contactMessage.setMessage(request.message());
    contactMessage.setStatus("NEW");
    return contactMessage;
  }
}

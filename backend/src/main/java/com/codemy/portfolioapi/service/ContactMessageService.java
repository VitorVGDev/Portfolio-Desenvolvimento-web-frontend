package com.codemy.portfolioapi.service;

import com.codemy.portfolioapi.dto.ContactMessageRequestDto;
import com.codemy.portfolioapi.dto.ContactMessageResponseDto;
import com.codemy.portfolioapi.entity.ContactMessage;
import com.codemy.portfolioapi.mapper.ContactMessageMapper;
import com.codemy.portfolioapi.repository.ContactMessageRepository;
import java.util.List;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class ContactMessageService {

  private final ContactMessageRepository contactMessageRepository;

  public ContactMessageService(ContactMessageRepository contactMessageRepository) {
    this.contactMessageRepository = contactMessageRepository;
  }

  @Transactional(readOnly = true)
  public List<ContactMessageResponseDto> findAll() {
    return contactMessageRepository.findAll().stream()
        .map(ContactMessageMapper::toResponse)
        .toList();
  }

  @Transactional
  public ContactMessageResponseDto create(ContactMessageRequestDto request) {
    ContactMessage contactMessage = ContactMessageMapper.toEntity(request);
    ContactMessage saved = contactMessageRepository.save(contactMessage);
    return ContactMessageMapper.toResponse(saved);
  }
}

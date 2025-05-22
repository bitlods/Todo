package com.Tharun.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.Tharun.entity.Todo;

public interface TodoRepository extends JpaRepository<Todo, Long> {
}

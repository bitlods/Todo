package com.Tharun.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.Tharun.entity.Todo;
import com.Tharun.service.OpenAIService;
import com.Tharun.service.SlackService;
import com.Tharun.service.TodoService;

import java.util.List;

@RestController
@RequestMapping("/todos")
@CrossOrigin(origins = "http://localhost:5173")
public class TodoController {

    @Autowired
    private TodoService todoService;

    @Autowired
    private OpenAIService openAIService;

    @Autowired
    private SlackService slackService;

    @GetMapping
    public List<Todo> getAllTodos() {
        return todoService.getAll();
    }

    @PostMapping
    public Todo createTodo(@RequestBody Todo todo) {
        return todoService.save(todo);
    }

    @GetMapping("/{id}")
    public void deleteTodo(@PathVariable Long id) {
        todoService.delete(id);
    }
    @PostMapping("/summarize")
    @CrossOrigin(origins = "http://localhost:5173")
    public ResponseEntity<String> summarizeAndSend() {
        System.out.println("Received summarize request");
        List<String> tasks = todoService.getAll().stream()
            .filter(t -> !t.isCompleted())
            .map(Todo::getTask)
            .toList();

        String summary = openAIService.summarize(tasks);
        slackService.sendToSlack(summary);

        return ResponseEntity.ok("Summary sent to Slack");
    
    }
}

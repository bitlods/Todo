package com.Tharun.service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.Map;

@Service
public class SlackService {

    @Value("${slack.webhook.url}")
    private String slackWebhookUrl;

    public void sendToSlack(String message) {
        RestTemplate rest = new RestTemplate();
        HttpEntity<Map<String, String>> entity = new HttpEntity<>(Map.of("text", message));
        rest.postForEntity(slackWebhookUrl, entity, String.class);
    }
}

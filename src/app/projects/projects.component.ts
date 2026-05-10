import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
  isDemo?: boolean;
  tags: string[];
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'Eco-Products API + AI',
      description: 'Green product management project with an OpenAI ChatGPT assistant for complete API lifecycle management.',
      image: 'assets/images/eco-ai.webp',
      link: 'https://github.com/JuanBM0308/eco-products-api-ai',
      tags: ['java', 'spring', 'openai']
    },
    {
      title: 'Sunnybank API',
      description: 'Banking system simulation using Hexagonal Architecture and Spring Boot. High focus on domain-driven design.',
      image: 'assets/images/sunnybank.webp',
      link: 'https://github.com/JuanBM0308/Sunnybank-api',
      tags: ['java', 'spring', 'postgresql']
    },
    {
      title: 'Spring Security OAuth2/JWT',
      description: 'Advanced implementation of an Auth Server, Resource Server, and Client using modern security standards.',
      image: 'assets/images/security-auth.webp',
      link: 'https://github.com/JuanBM0308/spring-microservices-auth-oauth2-jwt',
      tags: ['java', 'spring', 'lock']
    },
    {
      title: 'The Sales Galleon',
      description: 'REST API for managing an online marketplace with promotional and second-hand product logic.',
      image: 'assets/images/sales-galleon.webp',
      link: 'https://github.com/JuanBM0308/TheSalesGalleon',
      tags: ['java', 'spring', 'docker']
    },
    {
      title: 'Amigo Secreto',
      description: 'Interactive web application for gift exchange draws with a clean UI and logic in JavaScript.',
      image: 'assets/images/project-secret-friend.webp',
      link: 'https://juanbm0308.github.io/Amigo-Secreto/',
      isDemo: true,
      tags: ['html5', 'css3', 'javascript']
    }
  ];
}

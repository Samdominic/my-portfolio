import { Component, ElementRef, ViewChild, signal, ChangeDetectionStrategy } from '@angular/core';

interface Certification {
  title: string;
  summary: string;
  description: string;
  url: string;
}

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './about.scss'
})
export class About {
 readonly skills = signal([
    'Angular',
    'Ionic Framework',
    'Capacitor',
    'Bootstrap',
    'Tailwind CSS',
    'GCP (Google Cloud Platform)',
    'Firebase',
    'MongoDB',
    'Node.js',
    'Express.js',
    'HTML',
    'CSS',
    'JavaScript',
    'Typescript',
    'Android Development',
    'iOS Development',
  ]);

 readonly tools = signal([
    'Git',
    'GitHub',
    'GitLab',
    'JIRA',
    'VS Code',
    'Postman',
    'Cursor',
    'Android Studio',
    'Xcode',
  ]);

 readonly certifications = signal<Certification[]>([
    {
      title: 'Certificate of Completion – Claude Code in Action',
      summary: 'AI-assisted software development training with Claude Code, prompt engineering, GitHub Actions, and workflow automation.',
      description: 'Completed hands-on training in Claude Code, covering AI-assisted software development, prompt engineering, autonomous coding workflows, GitHub Actions, code review automation, workflow customization (CLAUDE.md, Skills, Hooks), and verification of AI-generated code for production-ready development.',
      url: 'SAMDOMINIC_CLAUDE_CODE_IN_ACTION.pdf'
    },
    {
      title: 'Certificate of Completion – Core Java and SQL Training',
      summary: 'Backend development training focused on Core Java and SQL fundamentals, including writing programs and database concepts.',
      description: 'Completed a professional course focused on backend development using Core Java and SQL. Practiced writing basic programs and gained a solid understanding of programming fundamentals and database concepts.',
      url: 'SAMDOMINIC_JAVA_SQL.png'
    },
  ]);

 openCertification(url: string) {
   window.open(url, '_blank');
 }
}

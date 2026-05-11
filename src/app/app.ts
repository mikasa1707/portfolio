import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

type Project = {
  title: string;
  desc: string;
  tags: string[];
  link?: string;
  repo?: string;
};

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class AppComponent {
  name = 'Michael';
  role = 'Développeur Full-Stack Angular / NestJS';

  skills_1 = [
    { label: 'HTML5', icon: 'fa-brands fa-html5' },
    { label: 'CSS/SCSS', icon: 'fa-brands fa-css3-alt' },
    { label: 'JavaScript', icon: 'fa-brands fa-js' },
    { label: 'TypeScript', icon: 'fa-solid fa-code' }, // ou autre
  ];

  skills_2 = [
    { label: 'NextJs', icon: 'fa-brands fa-node-js' },
    { label: 'Node.js', icon: 'fa-brands fa-node-js' },
    { label: 'Angular', icon: 'fa-brands fa-angular' },
    { label: 'Git', icon: 'fa-brands fa-git-alt' },
    { label: 'SQL', icon: 'fa-solid fa-database' },
  ];

  services = [
    {
      title: 'Angular Frontend',
      icon: '🅰️',
    },
    {
      title: 'NestJS Backend',
      icon: '⚡',
    },
    {
      title: 'POS & Stock Systems',
      icon: '🛒',
    },
    {
      title: 'UI / UX Integration',
      icon: '🎨',
    },
  ];
  stats = [
    { value: '10', label: 'Projets' },
    { value: '95%', label: 'Satisfaction client  ' },
    { value: '7', label: 'Annee exp.' },
  ];

  projects: Project[] = [
    {
      title: 'Gestion de Stock & POS',
      desc: 'Application complète de gestion de stock et caisse avec ventes, achats, inventaires, transferts, dashboard et gestion des fiches techniques.',
      tags: ['Angular', 'NestJS', 'MySQL', 'TypeORM'],
      link: '#',
      repo: 'https://github.com/mikasa1707/Gestion_Stock.git',
    },

    {
      title: 'POS Restaurant',
      desc: 'Système de caisse moderne avec impression ticket, paiements multiples, sessions caisse et suivi des ventes en temps réel.',
      tags: ['Angular SSR', 'NestJS', 'JWT', 'Bootstrap'],
      link: '#',
      repo: 'https://github.com/mikasa1707/pos.git',
    },

    {
      title: 'Dashboard Analytics',
      desc: 'Dashboard interactif avec statistiques de ventes, graphiques dynamiques, marges, stock minimum et historique détaillé.',
      tags: ['Angular', 'Charts', 'RxJS'],
      link: '#',
      repo: '#',
    },

    {
      title: 'Portfolio Premium',
      desc: 'Portfolio développeur moderne avec glassmorphism, dark mode, animations fluides et responsive design.',
      tags: ['Angular', 'SCSS', 'Responsive'],
      link: '#',
      repo: '#',
    },

    {
      title: 'API REST Sécurisée',
      desc: 'Backend modulaire avec JWT, validation DTO, upload fichiers, rôles utilisateurs et architecture scalable.',
      tags: ['NestJS', 'TypeORM', 'PostgreSQL'],
      link: '#',
      repo: '#',
    },

    {
      title: 'Gestion Travaux & Équipes',
      desc: 'Interface d’administration avec upload images, gestion des équipes, galerie travaux et contenu dynamique responsive.',
      tags: ['Angular', 'NestJS', 'Upload'],
      link: '#',
      repo: 'https://github.com/mikasa1707/forage_tirano.git',
    },
  ];

  scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

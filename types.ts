import type { ReactNode } from 'react';

export interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  link: string;
  repo: string;
  tech: string[];
}

export interface BlogPost {
  id: number;
  title: string;
  date: string;
  excerpt: string;
  content: ReactNode;
}
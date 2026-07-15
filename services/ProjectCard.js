import React, { useState, useEffect } from 'react';
import { ExternalLink, Github, Star, Clock, Loader2 } from 'lucide-react';
import { Card } from './ui/card';
import { fetchRepoStats, formatRelativeTime } from '../services/githubService';

export const ProjectCard = ({ project }) => {
  const [stats, setStats] = useState({
    stars: project.stars,
    lastUpdated: project.lastUpdated,
    loading: true
  });

  useEffect(() => {
    const loadRepoStats = async () => {
      const result = await fetchRepoStats(project.repoName);
      
      if (result.success) {
        setStats({
          stars: result.stars,
          lastUpdated: result.lastUpdated,
          loading: false
        });
      } else {
        // Fallback to mock data if API fails
        setStats({
          stars: project.stars,
          lastUpdated: project.lastUpdated,
          loading: false
        });
      }
    };

    loadRepoStats();
  }, [project.repoName, project.stars, project.lastUpdated]);

  return (
    <Card className="project-card group">
      <div className="project-card-content p-6">
        <div className="flex flex-col h-full">
          <div className="flex-1">
            <h3 className="project-card-title text-xl font-bold mb-3 font-mono">
              {project.name}
            </h3>
            <p className="project-card-description text-base mb-4 opacity-90">
              {project.description}
            </p>
          </div>

          <div className="project-card-stats flex items-center gap-4 mb-4 text-sm">
            <div className="flex items-center gap-1">
              {stats.loading ? (
                <Loader2 size={16} className="animate-spin star-icon" />
              ) : (
                <Star size={16} className="star-icon" />
              )}
              <span>{stats.loading ? '...' : stats.stars}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock size={16} />
              <span>
                {stats.loading ? 'loading...' : formatRelativeTime(stats.lastUpdated)}
              </span>
            </div>
          </div>

          <div className="project-card-actions flex gap-3">
            <a
              href={`https://github.com/gaurav082507-lang/${project.repoName}`}
              target="_blank"
              rel="noopener noreferrer"
              className="project-repo-button flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg font-medium text-sm"
            >
              <Github size={16} />
              View Repo
            </a>
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="project-demo-button flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg font-medium text-sm"
            >
              <ExternalLink size={16} />
              Live Demo
            </a>
          </div>
        </div>
      </div>
    </Card>
  );
};

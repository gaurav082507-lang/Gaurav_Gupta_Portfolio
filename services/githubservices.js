import axios from 'axios';

const GITHUB_API_BASE = 'https://api.github.com';
const GITHUB_USERNAME = 'gaurav082507-lang';

/**
 * Fetch repository data from GitHub API
 * @param {string} repoName - Repository name
 * @returns {Promise<Object>} Repository data with stars and lastUpdated
 */
export const fetchRepoStats = async (repoName) => {
  try {
    const response = await axios.get(
      `${GITHUB_API_BASE}/repos/${GITHUB_USERNAME}/${repoName}`,
      {
        timeout: 5000,
        headers: {
          'Accept': 'application/vnd.github.v3+json'
        }
      }
    );

    return {
      stars: response.data.stargazers_count || 0,
      lastUpdated: response.data.updated_at || new Date().toISOString(),
      success: true
    };
  } catch (error) {
    console.error(`Failed to fetch stats for ${repoName}:`, error.message);
    return {
      stars: null,
      lastUpdated: null,
      success: false,
      error: error.message
    };
  }
};

/**
 * Format date string to human-readable relative time
 * @param {string} dateString - ISO date string
 * @returns {string} Formatted relative time
 */
export const formatRelativeTime = (dateString) => {
  const date = new Date(dateString);
  const now = new Date();
  const diffTime = Math.abs(now - date);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays < 1) {
    return 'today';
  } else if (diffDays === 1) {
    return 'yesterday';
  } else if (diffDays < 7) {
    return `${diffDays} days ago`;
  } else if (diffDays < 30) {
    const weeks = Math.floor(diffDays / 7);
    return `${weeks} week${weeks > 1 ? 's' : ''} ago`;
  } else if (diffDays < 365) {
    const months = Math.floor(diffDays / 30);
    return `${months} month${months > 1 ? 's' : ''} ago`;
  } else {
    const years = Math.floor(diffDays / 365);
    return `${years} year${years > 1 ? 's' : ''} ago`;
  }
};

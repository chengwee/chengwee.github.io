import { ResumeData } from '../types';

export type ResumeType = 'portfolio' | 'full';

const USERNAME = 'chengwee';
const GIST_IDS = {
  portfolio: '56ac49181c803900d9ee108a967126d9',
  full: 'd50ad9015af1eeaaa28956ee17e4c987'
};

export const fetchResumeData = async (type: ResumeType = 'portfolio'): Promise<ResumeData> => {
  const gistId = GIST_IDS[type];
  // Use /raw to let GitHub redirect to the correct file regardless of naming
  const rawUrl = `https://gist.githubusercontent.com/${USERNAME}/${gistId}/raw`;

  try {
    // Add a cache-busting parameter to ensure we get fresh data if updated recently
    const response = await fetch(`${rawUrl}?t=${new Date().getTime()}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch resume (${response.status}): ${response.statusText || 'Unknown Error'}`);
    }
    const data = await response.json();
    return data as ResumeData;
  } catch (error) {
    console.error("Error fetching resume data:", error);
    throw error;
  }
};
import { useEffect, useState } from 'react';
import axios from 'axios';

interface YoutubeStats {
  subscriberCount: string;
  viewCount: string;
}

interface YoutubeVideo {
  id: string;
  title: string;
  thumbnail: string;
  publishedAt: string;
}

interface YoutubeData {
  done: boolean;
  stats: YoutubeStats;
  videos: YoutubeVideo[];
}

function YoutubePlayer() {
  const [youtubeData, setYoutubeData] = useState<YoutubeData>();

  useEffect(() => {
    const fetchYoutubeData = async () => {
      try {
        const response = await axios.get('/api/youtube');

        if (!response.data.videos?.length) {
          throw new Error('Playlist not found or empty!');
        }

        const youtubeData = response.data;
        youtubeData.done = true;

        setYoutubeData(response.data);
      } catch (error) {
        console.error('Error fetching Youtube data: ', error);
      }
    };

    fetchYoutubeData();
  }, []);

  const [latestVideo, ...prevVideos] = youtubeData?.videos ?? [];

  console.log(prevVideos)

  if (!youtubeData?.done)
    return (
      <div className="flex flex-col gap-4">
        <div className="aspect-video rounded-lg overflow-hidden bg-light-surface dark:bg-dark-surface animate-pulse"></div>
      </div>
    );

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-row justify-between items-center">
        <p className="text-body-lg font-bold">Latest Video</p>
        <div className='flex flex-row items-center gap-4'>
          <div className="flex flex-row gap-1 items-center text-light-text-muted dark:text-dark-text-muted">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm0 7c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4zm6 5H6v-.99c.2-.72 3.3-2.01 6-2.01s5.8 1.29 6 2v1z"></path>
            </svg>
            <p className="text-light-text-muted dark:text-dark-text-muted">
              {youtubeData.stats.subscriberCount} subscribers
            </p>
          </div>
          <div className="flex flex-row gap-1 items-center text-light-text-muted dark:text-dark-text-muted">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"></path>
            </svg>
            <p>{youtubeData.stats.viewCount} views</p>
          </div>
        </div>
      </div>
      <div className="aspect-video rounded-lg overflow-hidden">
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${latestVideo.id}?autoplay=1&muted=1`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default YoutubePlayer;

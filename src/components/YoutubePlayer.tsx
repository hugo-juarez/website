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
  stats: YoutubeStats;
  videos: YoutubeVideo[];
}


function YoutubePlayer() {
  const [youtubeData, setYoutubeData] = useState<YoutubeData>();

  useEffect(() => {
    const fetchYoutubeData = async () => {
      try {
        const response = await axios.get('/api/youtube');

        console.log(response)

        if (!response.data.videos?.length) {
          throw new Error('Playlist not found or empty!');
        }

        setYoutubeData(response.data);
      } catch (error) {
        console.error('Error fetching Youtube data: ', error);
      }
    };

    fetchYoutubeData();
  }, []);

  const [latestVideo, ...prevVideos] = youtubeData?.videos ?? [];

  if (!latestVideo) return <></>;

  return (
    <div className='flex flex-col gap-4'>
      <p className='text-body-lg font-bold'>Latest Video</p>
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

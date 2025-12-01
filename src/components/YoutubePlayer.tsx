import { useEffect, useState } from 'react';
import axios from 'axios';

interface YoutubeVideo {
  id: string;
  title: string;
  thumbnail: string;
  publishedAt: string;
}

function YoutubePlayer() {
  const [videos, setVideos] = useState<YoutubeVideo[]>([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get('/api/youtube');

        if (!response.data.items?.length) {
          throw new Error('Playlist not found or empty!');
        }

        const newVideos = [];

        for (const item of response.data.items) {
          newVideos.push({
            id: item.snippet.resourceId.videoId,
            title: item.snippet.title,
            thumbnail: item.snippet.thumbnails.high.url,
            publishedAt: item.snippet.publishedAt,
          });
        }

        setVideos(newVideos);
      } catch (error) {
        console.error('Error fetching Youtube data: ', error);
      }
    };

    fetchVideos();
  }, []);

  const [latestVideo, ...prevVideos] = videos;

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

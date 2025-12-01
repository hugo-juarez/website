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
  console.log('VIDEOS:');
  console.log(videos);

  const YOUTUBE_API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
  const PLAYLIST_ID = import.meta.env.VITE_YOUTUBE_PLAYLIST_ID;

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get(
          `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${PLAYLIST_ID}&key=${YOUTUBE_API_KEY}&maxResults=10`
        );

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

      fetchVideos();
    };
  }, [YOUTUBE_API_KEY, PLAYLIST_ID]);

  return <></>;
}

export default YoutubePlayer;

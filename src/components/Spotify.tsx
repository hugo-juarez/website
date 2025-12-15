import { useEffect, useRef } from "react";

interface SpotifyProps {
  url: string;
  className?: string;
}

function Spotify({ url, className }: SpotifyProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const loadedRef = useRef(false);

  useEffect(() => {
    if (!containerRef.current || loadedRef.current) return;

    let cancelled = false;

    async function load() {
      const res = await fetch(
        `https://open.spotify.com/oembed?url=${encodeURIComponent(url)}`
      );
      const data = await res.json();

      if (!cancelled && containerRef.current) {
        containerRef.current.innerHTML = data.html;
        loadedRef.current = true;
      }
    }

    load();

    return () => {
      cancelled = true;
    };
  }, [url]);

  return <div ref={containerRef} className={className}/>;
}

export default Spotify;

import { useEffect, useState } from "react";
import { easeOut, motion, AnimatePresence } from "motion/react";
import axios from "axios";
import Spotify from "./Spotify";

type Tracks = "top" | "recent";

interface SpotifyData {
  done: boolean;
  recent_tracks: string[];
  top_tracks: string[];
}

function SpotifyPlayer() {
  const [trackType, setTrackType] = useState<Tracks>("recent");
  const [spotifyData, setSpotifyData] = useState<SpotifyData>();

  useEffect(() => {
    const fetchSpotifyData = async () => {
      try {
        const response = await axios.get("/api/spotify");

        if (
          !response.data.recent_tracks?.length ||
          !response.data.top_tracks?.length
        ) {
          throw new Error("Playlist not found or empty!");
        }

        setSpotifyData({ done: true, ...response.data });
      } catch (error) {
        console.error("Error fetching Spotify data: ", error);
      }
    };

    fetchSpotifyData();
  }, []);

  const buttonStyle =
    "cursor-pointer px-8 py-2 rounded-lg hover:text-light-text dark:hover:text-dark-text text-body";
  const selectedSyle =
    buttonStyle +
    " " +
    "bg-light-surface text-light-text dark:bg-dark-surface dark:text-dark-text";

  let tracks: string[] = [];

  if (trackType === "top" && spotifyData) {
    tracks = spotifyData.top_tracks;
  } else if (trackType === "recent" && spotifyData) {
    tracks = spotifyData.recent_tracks;
  }

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-row justify-between items-center">
        <h4 className="text-h4">
          {trackType === "recent" ? "Recently Played" : "Top Track"}
        </h4>
        <nav className="flex flex-row gap-8 text-light-text-muted dark:text-dark-text-muted">
          <button
            className={trackType === "recent" ? selectedSyle : buttonStyle}
            onClick={() => setTrackType("recent")}
          >
            Recently Played
          </button>
          <button
            className={trackType === "top" ? selectedSyle : buttonStyle}
            onClick={() => setTrackType("top")}
          >
            Top Tracks
          </button>
        </nav>
      </div>

      <div className="grid grid-cols-[1fr_1fr] h-[352px] gap-8 mb-8">
        {spotifyData?.done && (
          <motion.div
            key={tracks[0] + trackType}
            initial={{ opacity: 0, x: -300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -300 }}
            transition={{ duration: 0.5, ease: easeOut, delay: 1 }}
          >
            <Spotify
              key={tracks[0] + trackType}
              url={tracks[0]}
              className="h-[352px]"
            />
          </motion.div>
        )}
        <AnimatePresence>
          {spotifyData?.done && (
            <motion.div
              className="flex flex-col justify-between overflow-x-hidden"
              key={trackType}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {tracks.slice(1).map((track, index) => {
                return (
                  <motion.div
                    key={index + track}
                    initial={{ opacity: 0, x: 300 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.5,
                      ease: "easeOut",
                      delay: 1.5 + index * 0.5,
                    }}
                  >
                    <Spotify key={index + track} url={track} className="h-20" />
                  </motion.div>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default SpotifyPlayer;

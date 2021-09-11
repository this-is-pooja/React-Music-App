import { useState, useEffect } from "react";
import Player from "./com/Player";

function App() {
  const [songs] = useState([
    {
      title: "Eastside",
      artist: "Benny blanco,Halsey,Khalid",
      img_src: "./images/eastside.jpg",
      src: "./songs/Eastside.mp3",
    },
    {
      title: "Firework",
      artist: "katy perry",
      img_src: "./images/firework.jpg",
      src: "./songs/Firework.mp3",
    },
    {
      title: "let me love u",
      artist: "Justin Bieber",
      img_src: "./images/let me love u.jpg",
      src: "./songs/Let-Me-Love-You.mp3",
    },
    {
      title: "love me like u do",
      artist: "Ellie Goulding",
      img_src:"./images/love-m.jpeg",
      src: "./songs/Love Me.mp3",
    },
    {
      title: "Memories",
      artist: "Maroon 5",
      img_src: "./images/memories.jpg",
      src: "./songs/Memories.mp3",
    },
    {
      title: "Sorry",
      artist: "Justin Bieber",
      img_src: "./images/sorry.jpg",
      src: "./songs/Justin_Bieber.mp3",
    },
  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [NextSongIndex, setNextSongIndex] = useState(0);

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex, songs.length]);

  return (
    <div className="App">
      <Player
        currentSongIndex={currentSongIndex}
        setCurrentSongIndex={setCurrentSongIndex}
        NextSongIndex={NextSongIndex}
        songs={songs}
      />
    </div>
  );
}

export default App;

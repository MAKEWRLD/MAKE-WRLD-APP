import { Release, ReleaseType, Video, Lyric } from './types';

// Using picsum for placeholders, but conceptually these are album covers
export const RELEASES: Release[] = [
  {
    id: "fds-album",
    title: "FDS",
    type: ReleaseType.ALBUM,
    year: "2023",
    coverUrl: "https://picsum.photos/seed/fds/800/800",
    spotifyUrl: "#",
    appleMusicUrl: "#",
    youtubeUrl: "#",
    tracks: [
      { title: "Intro (FDS)", duration: "2:10" },
      { title: "Chaos Theory", duration: "3:45" },
      { title: "Lost in Static", duration: "3:12" },
      { title: "FDS", duration: "4:01" },
      { title: "Nightwalk", duration: "2:58" },
      { title: "Outro", duration: "1:45" }
    ]
  },
  {
    id: "no-make-sense-ep",
    title: "NO MAKE SENSE",
    type: ReleaseType.EP,
    year: "2022",
    coverUrl: "https://picsum.photos/seed/nomakesense/800/800",
    spotifyUrl: "#",
    appleMusicUrl: "#",
    youtubeUrl: "#",
    tracks: [
      { title: "Nonsense", duration: "2:55" },
      { title: "Void", duration: "3:10" },
      { title: "Echoes", duration: "3:30" }
    ]
  },
  {
    id: "midnight-single",
    title: "Midnight",
    type: ReleaseType.SINGLE,
    year: "2021",
    coverUrl: "https://picsum.photos/seed/midnight/800/800",
    spotifyUrl: "#",
    appleMusicUrl: "#",
    youtubeUrl: "#"
  },
  {
    id: "waves-single",
    title: "Waves",
    type: ReleaseType.SINGLE,
    year: "2021",
    coverUrl: "https://picsum.photos/seed/waves/800/800",
    spotifyUrl: "#",
    appleMusicUrl: "#",
    youtubeUrl: "#"
  }
];

export const VIDEOS: Video[] = [
  {
    id: "vid-1",
    title: "FDS (Official Video)",
    youtubeId: "dQw4w9WgXcQ", // Placeholder ID
    thumbnailUrl: "https://picsum.photos/seed/vid1/1280/720"
  },
  {
    id: "vid-2",
    title: "Nonsense (Visualizer)",
    youtubeId: "dQw4w9WgXcQ",
    thumbnailUrl: "https://picsum.photos/seed/vid2/1280/720"
  }
];

export const LYRICS: Lyric[] = [
  {
    id: "lyric-fds",
    title: "FDS",
    content: `(Verse 1)
Walking through the shadows of the city lights
Searching for a meaning in these endless nights
The noise is getting louder, can't hear my own thoughts
Caught in a web that the modern world has bought

(Chorus)
FDS, it's all a mess
Trying to find purpose, nothing less
In the chaos we find our way
Living for another day

(Verse 2)
Screens are glowing, people disconnect
What did we really expect?
Disconnect to reconnect, find the inner sound
Where the true sense of self is found`
  },
  {
    id: "lyric-nonsense",
    title: "NO MAKE SENSE",
    content: `(Verse 1)
Everything is spinning round
Gravity can't hold me down
Words are floating in the air
Does anybody really care?

(Chorus)
It makes no sense, no make sense
Building up a high defense
Break the walls, let it be
Set the spirit wild and free`
  }
];

export const BIOGRAPHY_TEXT = `
  MAKE WRLD is an artist who defies conventional genres, blending atmospheric soundscapes with raw, emotive lyricism. 
  Born from the need to express the inexpressible, the project emerged in the early 2020s as a response to the chaotic nature of modern existence.
  
  With influences ranging from dark wave to alternative hip-hop, MAKE WRLD crafts a sonic universe that invites listeners to explore the depths of their own consciousness. 
  The philosophy "No caos do mundo, encontramos o nosso próprio sentido" (In the chaos of the world, we find our own meaning) drives every beat, every melody, and every word.
`;

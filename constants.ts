import { Release, ReleaseType, Video, Lyric, BioSection } from './types';

export const SOCIAL_LINKS = {
  apple: "https://music.apple.com/ao/artist/make-wrld/1700001990",
  spotify: "https://open.spotify.com/intl-pt/artist/4mMdo6sMaVvO54ZlifNKst?si=ctlMqHM4RI-nnUZDSismjA",
  youtube: "https://www.youtube.com/@MAKEWRLD?sub_confirmation=1",
  instagram: "https://www.instagram.com/makewrld_",
  soundcloud: "https://soundcloud.com/make-wrld?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
  facebook: "http://web.facebook.com/people/MAKE-WRLD/100091471166925/"
};

export const RELEASES: Release[] = [
  {
    id: "fds-album",
    title: "FDS",
    type: ReleaseType.ALBUM,
    year: "2023",
    coverUrl: "https://picsum.photos/seed/fds/800/800",
    spotifyUrl: SOCIAL_LINKS.spotify,
    appleMusicUrl: SOCIAL_LINKS.apple,
    youtubeUrl: SOCIAL_LINKS.youtube,
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
    spotifyUrl: SOCIAL_LINKS.spotify,
    appleMusicUrl: SOCIAL_LINKS.apple,
    youtubeUrl: SOCIAL_LINKS.youtube,
    tracks: [
      { title: "Nonsense", duration: "2:55" },
      { title: "Void", duration: "3:10" },
      { title: "Echoes", duration: "3:30" }
    ]
  },
  {
    id: "trajados-single",
    title: "TRAJADO",
    type: ReleaseType.SINGLE,
    year: "2022",
    coverUrl: "https://picsum.photos/seed/trajado/800/800",
    spotifyUrl: SOCIAL_LINKS.spotify,
    appleMusicUrl: SOCIAL_LINKS.apple,
    youtubeUrl: SOCIAL_LINKS.youtube
  },
  {
    id: "fukin-trap-single",
    title: "FUKIN TRAP",
    type: ReleaseType.SINGLE,
    year: "2023",
    coverUrl: "https://picsum.photos/seed/fukintrap/800/800",
    spotifyUrl: SOCIAL_LINKS.spotify,
    appleMusicUrl: SOCIAL_LINKS.apple,
    youtubeUrl: SOCIAL_LINKS.youtube
  },
  {
    id: "midnight-single",
    title: "Midnight",
    type: ReleaseType.SINGLE,
    year: "2021",
    coverUrl: "https://picsum.photos/seed/midnight/800/800",
    spotifyUrl: SOCIAL_LINKS.spotify,
    appleMusicUrl: SOCIAL_LINKS.apple,
    youtubeUrl: SOCIAL_LINKS.youtube
  }
];

export const VIDEOS: Video[] = [
  {
    id: "vid-trajado",
    title: "TRAJADO (Official Video)",
    youtubeId: "dQw4w9WgXcQ", // Placeholder ID, replace with real ID if available
    thumbnailUrl: "https://picsum.photos/seed/vidtrajado/1280/720"
  },
  {
    id: "vid-fukin",
    title: "FUKIN TRAP (Official Video)",
    youtubeId: "dQw4w9WgXcQ", // Placeholder ID
    thumbnailUrl: "https://picsum.photos/seed/vidfukin/1280/720"
  },
  {
    id: "vid-fds",
    title: "FDS (Official Video)",
    youtubeId: "dQw4w9WgXcQ",
    thumbnailUrl: "https://picsum.photos/seed/vidfds/1280/720"
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
Living for another day`
  },
  {
    id: "lyric-trajado",
    title: "TRAJADO",
    content: `(Chorus)
Trajado a rigor, na rua a gente passa
Eles olham de lado, mas a gente não disfarça
É o MAKE WRLD no comando, sente a vibração
Do Viseu para o mundo, essa é a missão`
  }
];

export const BIOGRAPHY_SECTIONS: BioSection[] = [
  {
    title: "Origins",
    content: "MAKE WRLD is the artistic name of Milton Lemba, born in Viseu, Portugal. His musical journey began in 2016 as part of the group 'Turma Da Pausa', where he first explored his passion for rhythm and poetry."
  },
  {
    title: "The Return",
    content: "After a hiatus, he returned to the music scene in 2022 with the release of his debut solo song 'TRAJADO'. This marked a pivotal moment, defining a sound that blends raw emotions with modern trap and hip-hop influences."
  },
  {
    title: "The Sound",
    content: "Since then, he has released the EP 'NO MAKE SENSE' and multiple singles and collaborations, including 'FUKIN TRAP'. MAKE WRLD creates a unique sonic universe that connects with a wide audience, constantly evolving his style while staying true to his roots."
  }
];
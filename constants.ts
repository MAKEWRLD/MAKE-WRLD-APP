import { Release, ReleaseType, Video, Lyric, BioSection } from './types';

export const SOCIAL_LINKS = {
  apple: "https://music.apple.com/ao/artist/make-wrld/1700001990",
  spotify: "https://open.spotify.com/intl-pt/artist/4mMdo6sMaVvO54ZlifNKst?si=ctlMqHM4RI-nnUZDSismjA",
  youtube: "https://www.youtube.com/@MAKEWRLD?sub_confirmation=1",
  instagram: "https://www.instagram.com/makewrld_",
  soundcloud: "https://soundcloud.com/make-wrld",
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
    id: "mais-perto-single",
    title: "MAIS PERTO",
    type: ReleaseType.SINGLE,
    year: "2023",
    coverUrl: "https://picsum.photos/seed/maisperto/800/800",
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
    youtubeId: "dQw4w9WgXcQ",
    thumbnailUrl: "https://picsum.photos/seed/vidtrajado/1280/720"
  },
  {
    id: "vid-fukin",
    title: "FUKIN TRAP (Official Video)",
    youtubeId: "dQw4w9WgXcQ",
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
    title: "About MAKE WRLD",
    content: `MAKE WRLD (Milton Gomes Lemba) is an emerging artist from Viseu, Portugal. He mixes trap, afro vibes and experimental sonorities, creating a unique energy in every track.
    
Former member of Turma da Pausa, he restarted his musical journey in 2022 and has grown consistently since then.
    
With songs like "TRAJADO", "FUKIN TRAP", "MAIS PERTO" and the EP NO MAKE SENSE, he explores the chaos of the world while finding his own identity.`
  }
];
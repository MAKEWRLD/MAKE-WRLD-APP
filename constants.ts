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
    id: "no-make-sense-ep",
    title: "NO MAKE SENSE",
    type: ReleaseType.EP,
    year: "2022",
    coverUrl: "https://img.youtube.com/vi/RZGOYRzLJ7c/maxresdefault.jpg",
    youtubeUrl: "https://www.youtube.com/watch?v=RZGOYRzLJ7c&list=PLavXdLQTmH2FefuvmQs0Z5YMbqPoY7LcT&pp=gAQB",
    tracks: [
      { title: "Nonsense", duration: "2:55" },
      { title: "Void", duration: "3:10" },
      { title: "Echoes", duration: "3:30" }
    ]
  },
  {
    id: "fukin-trap-single",
    title: "FUKIN TRAP",
    type: ReleaseType.SINGLE,
    year: "2023",
    coverUrl: "https://img.youtube.com/vi/bPBIs6OFzDA/maxresdefault.jpg",
    youtubeUrl: "https://www.youtube.com/watch?v=bPBIs6OFzDA&list=PLavXdLQTmH2G3Izjx_xW1Av2dPHd38hYj&pp=gAQB"
  },
  {
    id: "trajado-single",
    title: "TRAJADO",
    type: ReleaseType.SINGLE,
    year: "2022",
    coverUrl: "https://img.youtube.com/vi/SnhuF4EIAyo/maxresdefault.jpg",
    youtubeUrl: "https://youtu.be/SnhuF4EIAyo?si=HP6p2X5s-SOqumEr"
  }
];

export const VIDEOS: Video[] = [
  {
    id: "vid-trajado",
    title: "TRAJADO",
    youtubeId: "SnhuF4EIAyo",
    thumbnailUrl: "https://img.youtube.com/vi/SnhuF4EIAyo/maxresdefault.jpg"
  },
  {
    id: "vid-banking",
    title: "BANKING",
    youtubeId: "Tc1V7y4fHY8",
    thumbnailUrl: "https://img.youtube.com/vi/Tc1V7y4fHY8/maxresdefault.jpg"
  },
  {
    id: "vid-capsule",
    title: "CAPSULE (FUKIN TRAP)",
    youtubeId: "bPBIs6OFzDA",
    thumbnailUrl: "https://img.youtube.com/vi/bPBIs6OFzDA/maxresdefault.jpg"
  },
  {
    id: "vid-mais-perto",
    title: "MAIS PERTO",
    youtubeId: "Qg9RXwXZSAw",
    thumbnailUrl: "https://img.youtube.com/vi/Qg9RXwXZSAw/maxresdefault.jpg"
  },
  {
    id: "vid-nao-sou-mais-um",
    title: "NÃO SOU MAIS UM",
    youtubeId: "RZGOYRzLJ7c",
    thumbnailUrl: "https://img.youtube.com/vi/RZGOYRzLJ7c/maxresdefault.jpg"
  },
  {
    id: "vid-hoje-e-diferente",
    title: "HOJE É DIFERENTE",
    youtubeId: "ER4qZZUMso8",
    thumbnailUrl: "https://img.youtube.com/vi/ER4qZZUMso8/maxresdefault.jpg"
  },
  {
    id: "vid-uma-reservada",
    title: "UMA RESERVADA",
    youtubeId: "x8VETUQOA9I",
    thumbnailUrl: "https://img.youtube.com/vi/x8VETUQOA9I/maxresdefault.jpg"
  },
  {
    id: "vid-malas-da-gucci",
    title: "MALAS DA GUCCI",
    youtubeId: "O_dfReWydIA",
    thumbnailUrl: "https://img.youtube.com/vi/O_dfReWydIA/maxresdefault.jpg"
  }
];

export const LYRICS: Lyric[] = [
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
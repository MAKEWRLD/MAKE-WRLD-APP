export enum ReleaseType {
  ALBUM = "Album",
  EP = "EP",
  SINGLE = "Single"
}

export interface Track {
  title: string;
  duration: string;
  features?: string[];
}

export interface Release {
  id: string;
  title: string;
  type: ReleaseType;
  year: string;
  coverUrl: string;
  spotifyUrl?: string;
  appleMusicUrl?: string;
  youtubeUrl?: string;
  description?: string;
  tracks?: Track[];
}

export interface Video {
  id: string;
  title: string;
  youtubeId: string;
  thumbnailUrl: string;
}

export interface Lyric {
  id: string;
  title: string;
  content: string; // HTML or newlines
}
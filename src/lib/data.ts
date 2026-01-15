interface ExperienceProps {
  company: string;
  title: string;
  date: string;
  logo: string;
  companyUrl: string;
}

export const experiences: ExperienceProps[] = [
  {
    company: "JPMorganChase",
    title: "Software Engineer",
    date: "Incoming",
    logo: "/logos/jpmc.jpeg",
    companyUrl: "https://www.jpmorganchase.com",
  },
  {
    company: "Intel",
    title: "Software Engineer Intern",
    date: "May — Aug 2024",
    logo: "/logos/intel.jpeg",
    companyUrl: "https://www.intel.com",
  },
  {
    company: "Intel",
    title: "Machine Learning Engineer Intern",
    date: "May — Aug 2023",
    logo: "/logos/intel.jpeg",
    companyUrl: "https://www.intel.com",
  },
  {
    company: "Accenture",
    title: "Solutions Architect Intern",
    date: "Sep — Dec 2022",
    logo: "/logos/accenture.jpeg",
    companyUrl: "https://www.accenture.com",
  },
];

export interface ProjectProps {
  title: string;
  description: string;
  slug: string;
}

export const projects: ProjectProps[] = [
  {
    title: "ucfSpots",
    description:
      "Find open classrooms for studying at UCF with live building availability.",
    slug: "ucf-spots",
  },
  {
    title: "MCP Doc Server",
    description:
      "Local MCP server with semantic search for AI agents to access personal docs. Search over my own stuff for better context.",
    slug: "mcp-doc-server",
  },
  {
    title: "Delta Palette",
    description:
      "A colorblind-focused accessibility tool that generates clearer color palettes by leveraging the perceptual uniformity of Oklab and distance-maximization.",
    slug: "delta-palette",
  },
  {
    title: "Sous",
    description: "Multi-agent AI system for personalized cooking assistance.",
    slug: "sous",
  },
];

export interface Song {
  audioSrc: string;
  coverImage: string;
  artist: string;
  title: string;
  startTime?: number;
  songUrl: string;
  bg: string;
}

export const songs: Song[] = [
  {
    audioSrc: "/songs/split.mp3",
    coverImage: "/songs/split-cover.jpeg",
    artist: "88rising, NIKI",
    title: "Split",
    startTime: 0.25,
    songUrl:
      "https://open.spotify.com/track/4Bz72Fo4teXVMvDUi8xuw7?si=27a6ea5278da4407",
    bg: "1A237E",
  },
  {
    audioSrc: "/songs/the-dress.mp3",
    coverImage: "/songs/the-dress.jpeg",
    artist: "Dijon",
    title: "The Dress",
    startTime: 0,
    songUrl:
      "https://open.spotify.com/track/0YMe6PHRbeDcN7KJdCG0bW?si=865a92b45d8f4450",
    bg: "223311",
  },
  {
    audioSrc: "/songs/otro-atardecer.mp3",
    coverImage: "/songs/otro-atardecer.jpeg",
    artist: "Bad Bunny, The Marías",
    title: "Otro Atardecer",
    startTime: 26.75,
    songUrl:
      "https://open.spotify.com/track/0E0DRHf5PfMeor0ZCwB3oT?si=a998abd98a6047f2",
    bg: "721B3A",
  },
  {
    audioSrc: "/songs/love-songs.mp3",
    coverImage: "/songs/love-songs-cover.jpeg",
    artist: "Prospa, Kosmo Kint",
    title: "Love Songs",
    startTime: 22.5,
    songUrl:
      "https://open.spotify.com/track/0aNPB23MLFcGGYaMNN7DCf?si=a03532a2ac5d4a10",
    bg: "9F0000",
  },
];

export type ProjectLink = { label: string; href: string };

type ProjectImage = { src: string; alt: string; width: number; height: number };

export type Project = {
  slug: string;
  title: string;
  pitch: string;
  status: string;
  body: string[];
  role: string;
  stack: string;
  links: ProjectLink[];
  note?: string;
  mobileImage?: { src: string; width: number; height: number };
  image: ProjectImage;
  /** Shown beside the main screenshot from the sm breakpoint up. */
  secondImage?: ProjectImage;
};

export const projects: Project[] = [
  {
    slug: "serenia",
    title: "Serenia",
    pitch: "Conversational support for anxiety and low mood, with a clinician in the loop.",
    status: "Private pilot in Spain",
    body: [
      "People talk to an AI assistant between therapy sessions. It can offer validated questionnaires such as PHQ-9 and GAD-7, and each session ends with a summary for their professional.",
      "The model never scores anything: questionnaire results come from each instrument's fixed rules, every AI-drafted report waits for professional review, and high-risk messages are answered on the server without calling the model.",
    ],
    role: "Product, design and full-stack build: the patient chat, the clinician dashboard and the access rules that keep each patient's data private.",
    stack: "Next.js 16, React 19, Supabase, Vercel Workflow, AI SDK",
    links: [
      { label: "Website", href: "https://serenia-app.vercel.app" },
      { label: "Source code", href: "https://github.com/MiguelLuque/serenia" },
    ],
    image: {
      src: "/projects/serenia.jpg",
      alt: "Serenia landing page: a calm headline next to an example conversation in which the assistant offers a short questionnaire.",
      width: 1800,
      height: 1125,
    },
    mobileImage: { src: "/projects/serenia-mobile.jpg", width: 780, height: 1400 },
  },
  {
    slug: "aljarafe",
    title: "Aljarafe+",
    pitch: "What's on, the next bus and the weather for Seville and the towns of the Aljarafe, in one app.",
    status: "Pilot for local councils",
    body: [
      "It brings together official open data: the Junta de Andalucía events calendar, CTAN bus timetables, Metro de Sevilla, and AEMET forecasts and weather warnings. When a source goes down, the app keeps showing the last good copy and says how old it is.",
      "Events pass through an editorial panel before they are published. An agent drafts new listings; only those that pass fixed checks are published automatically, and the rest wait for a person.",
    ],
    role: "Product, design and build: iOS, Android and web app from one codebase, data adapters, editorial panel and scheduled ingestion.",
    stack: "Expo, React Native, MapLibre, Next.js, Supabase",
    links: [],
    note: "Not public yet. Demo on request.",
    image: {
      src: "/projects/aljarafe.jpg",
      alt: "Aljarafe+ home screen for Mairena del Aljarafe: upcoming local events, current temperature, official weather warnings and bus departures.",
      width: 1800,
      height: 1125,
    },
    mobileImage: { src: "/projects/aljarafe-mobile.jpg", width: 1040, height: 1300 },
  },
  {
    slug: "pokeplus",
    title: "PokePlus",
    pitch: "A team-preview assistant for competitive Pokémon Champions doubles: read the rival's six from a screenshot and choose your four.",
    status: "Live, in Spanish",
    body: [
      "At team preview the game shows only the rival's sprites, type icons and gender, so the app finds each card in the screenshot and matches it against the game's own sprite atlas. Recognition runs in the browser and the image is never uploaded.",
      "It then suggests which four to bring and which two to lead with, and predicts the rival's lead. The suggestion weighs damage against each rival's most-used sets, speed, roles like Fake Out or Trick Room, and real usage from Smogon ladder and Bo3 games, refreshed every month.",
    ],
    role: "Product, design and build: screenshot recognition, the lead prediction, the damage and usage views and the monthly data job.",
    stack: "React, TypeScript, Vite, Smogon damage calc, Vitest",
    links: [
      { label: "Open the app", href: "https://pokeplus.vercel.app" },
      { label: "Source code", href: "https://github.com/MiguelLuque/pokeplus" },
    ],
    image: {
      src: "/projects/pokeplus.jpg",
      alt: "PokePlus after reading a team-preview screenshot: the four Pokémon to bring with their items, the two to lead with, and the rival's three most likely leads with percentages.",
      width: 1800,
      height: 1125,
    },
    mobileImage: { src: "/projects/pokeplus-mobile.jpg", width: 780, height: 1400 },
  },
  {
    slug: "one-more-room",
    title: "One More Room",
    pitch: "A logic mystery game: place the suspects, work out the victim, accuse the killer.",
    status: "Live",
    body: [
      "Every generated case is checked to have exactly one solution. The Daily case is checked on the server, so rankings can't be faked, and there are 1v1 matchmaking and private rooms for friends.",
    ],
    role: "Game design, case generation and the multiplayer backend.",
    stack: "Expo, React Native, TypeScript, Supabase, PostgreSQL",
    links: [{ label: "Play", href: "https://one-more-room.vercel.app" }],
    image: {
      src: "/projects/one-more-room.jpg",
      alt: "One More Room start screen with the case board and the Daily, Ranking, Classic and Versus modes.",
      width: 1400,
      height: 885,
    },
    mobileImage: { src: "/projects/one-more-room-mobile.jpg", width: 780, height: 1300 },
    secondImage: {
      src: "/projects/one-more-room-board.jpg",
      alt: "A One More Room case in progress: a house plan with a kitchen, terrace, guest room and garage, furnished tile by tile.",
      width: 1000,
      height: 992,
    },
  },
];

export const experiments: { title: string; description: string; links: ProjectLink[] }[] = [
  {
    title: "Wordle Versus",
    description: "Head-to-head Wordle for two players.",
    links: [
      { label: "Play", href: "https://duelo-wordle.vercel.app" },
      { label: "Code", href: "https://github.com/MiguelLuque/wordle" },
    ],
  },
  {
    title: "Watchdog",
    description: "Lost and found listings for pets, with location-based search.",
    links: [{ label: "Demo", href: "https://watchdog-beta.vercel.app" }],
  },
];

export interface Article {
  id: string;
  title: string;
  url: string;
  source: string;
  dateAdded: string;
  tags: string[];
  description?: string;
}

export const articles: Article[] = [
  {
    id: "1",
    title: "Das waren die spannendsten Tech-Entwicklungen 2025",
    url: "https://www.derstandard.at/story/3000000301509/das-waren-die-spannendsten-tech-entwicklungen-2025",
    source: "Der Standard",
    dateAdded: "2025-12-27",
    tags: ["tech", "2025", "trends", "developments"],
    description: "Overview of the most exciting technology developments in 2025"
  }
];

export default articles;

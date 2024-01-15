export type jobItem = {
  id: number;
  title: string;
  badgeLetters: string;
  company: string;
  relevanceScore: number;
  daysAgo: number;
};

export type jobItemExpanded = jobItem & {
  companyURL:string,
  coverImgURL:string,
  description:string,
  duration:string
  location:string,
  qualifications:string[],
  reviews:string[],
  salary:string
}

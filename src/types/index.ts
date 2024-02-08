export interface Location {
  city: string;
  province: string;
  country: string;
}

export interface JobDesc {
  position: string;
  dateStart: string;
  dateEnd: string;
  descriptions: string[];
}

export interface Company {
  name: string;
  location: Location;
  jobs: JobDesc[];
  logo: string;
}

export interface School {
  name: string;
  major: string;
  location: Location;
  logo: string;
  dateStart: string;
  dateEnd: string;
  descriptions: string[];
}

export interface Project {
  name: string;
  pictures: string[];
  date: string;
  tech: string;
  descriptions: string[];
}

export interface Award {
  name: string;
  highglight: string;
  location: Location;
  date: string;
  descriptions: string[];
}

interface General {
  name: string;
  logo: string;
}

export interface Navigation {
  name: string;
  id: string;
}

interface SkillDetail {
  rank: string;
  lists: General[];
}
export interface Skill {
  topic: string;
  items: SkillDetail[];
}

export interface Volunteer {
  organization: string;
  logo: string;
  location: Location;
  jobs: JobDesc[];
}

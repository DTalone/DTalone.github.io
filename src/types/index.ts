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

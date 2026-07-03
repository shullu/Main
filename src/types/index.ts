export interface NavItem {
  label: string;
  href: string;
}

export interface PracticeArea {
  id: string;
  title: string;
  description: string;
}

export interface Person {
  name: string;
  role: string;
  initials: string;
  bio: string;
  credentials: string[];
}

export interface Office {
  city: string;
  country: string;
  role: string;
  address?: string;
  phone?: string;
  email?: string;
  isHeadquarters?: boolean;
}

export interface Award {
  title: string;
  organisation: string;
  year: string;
}

export interface Stat {
  value: string;
  label: string;
}

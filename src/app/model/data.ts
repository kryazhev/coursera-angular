export class Feedback {
    firstname: string;
    lastname: string;
    telnum: number;
    email: string;
    agree: boolean;
    contacttype: string;
    message: string;
}

export class Promotion {
    id: number;
    name: string;
    image: string;
    label: string;
    price: string;
    featured: boolean;
    description: string;
}

export class Comment {
    rating: number;
    comment: string;
    author: string;
    date: string;
}

export class Dish {
    id: number;
    name: string;
    image: string;
    category: string;
    label: string;
    price: string;
    featured: boolean;
    description: string;
    comments: Comment[];
}

export class Leader {
    id: number;
    name: string;
    image: string;
    designation: string;
    abbr: string;
    featured: boolean;
    description: string;
  }

export const ContactType = ['None', 'Tel', 'Email'];

export const BaseURL = 'http://localhost:3000/';

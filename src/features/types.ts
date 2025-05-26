export type SingleAuthor = {
    id: number;
    name: string;
    image: string;
};

export type Publisher = {
    id: number;
    name: string;
    image: string;
};

export type Blog = {
    id: number;
    title: string;
    content: string;
    image: string;
};

export type Book = {
    id: number;
    title: string;
    content: string;
    image: string;
};

export type Wishlist = {
    id: number;
    book_id: number;
    user_id: number;
};

export enum MediaType {
    IMAGE = "image",
    AUDIO = "audio",
    VIDEO = "video",
}

export interface LoginPayload {
    email: string;
    password: string;
}

export interface User {
    id: string;
    username: string;
    email: string;
    name: string;
    role: string;
    image: string;
}

export interface AuthResponse {
    access_token: string;
    refresh_token: string;
}

export interface RegisterPayload {
    first_name: string;
    last_name: string;
    email: string;
    password: string;
    confirm_password: string;
}

export interface Overview {
    total_books: number;
    total_authors: number;
    total_publishers: number;
    total_blogs: number;
    total_users: number;
}

import { store } from "@/redux/store";

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export enum TagType {
    User = "User",
    Author = "Author",
    Book = "Book",
    Blog = "Blog",
    Publisher = "Publisher",
    Dashboard = "Dashboard",
    Wishlist = "Wishlist",
}

export const tagTypes = Object.values(TagType);

export const METHOD = {
    POST: "POST",
    GET: "GET",
    PUT: "PUT",
    PATCH: "PATCH",
    DELETE: "DELETE",
};

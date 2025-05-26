export interface Books {
    id: number;
    title: string;
    imageUrl: string;
    readMoreLink: string;
    rating?: string; // Optional property, converted to Bangla numerals
}

export const Books: Books[] = [
    {
        id: 1,
        title: "বৈষম্য বিরোধী...",
        imageUrl: "/images/newbook1.png",
        readMoreLink: "এখনি পড়ুন",
        rating: "৪.৩",
    },
    {
        id: 2,
        title: "সহীহ মুসলিম শরীফ",
        imageUrl: "/images/newbook2.png",
        readMoreLink: "এখনি পড়ুন",
        rating: "৪.৭",
    },
    {
        id: 3,
        title: "রিয়াদুস সালেহীন",
        imageUrl: "/images/newbook3.png",
        readMoreLink: "এখনি পড়ুন",
        rating: "৪.৬",
    },
    {
        id: 4,
        title: "তাফসীর ইবনে কাসীর",
        imageUrl: "/images/newbook4.png",
        readMoreLink: "এখনি পড়ুন",
        rating: "৪.৮",
    },
    {
        id: 5,
        title: "ফাজায়েলে আমল",
        imageUrl: "/images/newbook1.png",
        readMoreLink: "এখনি পড়ুন",
        rating: "৪.৫",
    },
];

export enum State {
    DRAFT = "draft",
    IN_REVIEW = "in_review",
    PUBLISHED = "published",
}

export enum Difficulty {
    EASY = "easy",
    MEDIUM = "medium",
    HARD = "hard",
}

export type PaginatedResponse<T> = {
    count: number;
    next: string | null;
    previous: string | null;
    data: T[];
};

export type ListResponse<T> = {
    data: T[];
};

export type QueryParams = {
    [key: string]: string | string[] | number | undefined;
};

export type GenericTableProps<TData, TQuery> = {
    data: PaginatedResponse<TData>;
    queryProps: TQuery;
    onPageChange: (page: number) => void;
    onPageSizeChange: (pageSize: number) => void;
    onSearch: (searchTerm: string) => void;
    appliedFilter: {
        key: string;
        value: string;
    }[];
    onFilterChange: (key: string, value: string | number) => void;
    clearFilter: () => void;
    onCreatePress?: () => void;
    refetch: () => void;
};

export type GenericFormErrorResponse = {
    [key: string]: string[] | GenericFormErrorResponse[];
};

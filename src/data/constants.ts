import { Difficulty, State } from "@/types";

export const defaultTableActions = [
    { label: "Mark as Published", actionKey: State.PUBLISHED },
    { label: "Mark as Draft", actionKey: State.DRAFT },
    { label: "Mark as In Review", actionKey: State.IN_REVIEW },
    { label: "Delete", actionKey: "delete" },
];

export const defaultStateFilter = {
    label: "State",
    filterKey: "state",
    options: [
        { label: "Published", value: State.PUBLISHED },
        { label: "In-Review", value: State.IN_REVIEW },
        { label: "Draft", value: State.DRAFT },
    ],
};

export const defaultDifficultyFilter = {
    label: "Difficulty",
    filterKey: "difficulty",
    options: [
        { label: "Easy", value: Difficulty.EASY },
        { label: "Medium", value: Difficulty.MEDIUM },
        { label: "Hard", value: Difficulty.HARD },
    ],
};

export const stateLabelStyles: { [key: string]: { style: string; label: string } } = {
    draft: { style: "text-muted-foreground bg-muted-foreground/15 rounded-full px-2.5 py-1", label: "Draft" },
    in_review: {
        style: "text-warn-foreground bg-warn-foreground/15 rounded-full px-2.5 py-1",
        label: "In Review",
    },
    published: {
        style: "text-success-foreground bg-success-foreground/15 rounded-full px-2.5 py-1",
        label: "Published",
    },
};

export const difficultyLabelStyles: { [key: string]: { style: string; label: string } } = {
    easy: { style: "", label: "Easy" },
    medium: { style: "", label: "Medium" },
    hard: { style: "", label: "Hard" },
};

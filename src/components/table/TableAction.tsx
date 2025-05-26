import { ChevronDown } from "lucide-react";

import CustomPopover from "@/components/custom-ui/CustomPopover";

export type ActionType = {
    label: string;
    actionKey: string;
};

interface Props {
    selectedItems: number;
    actions: ActionType[];
    onAction: (actionKey: string) => void;
}

export const TableAction = ({ selectedItems, actions, onAction }: Props) => {
    return (
        <CustomPopover
            trigger={
                <div className="border-border text-foreground outline-border hover:border-primary/40 hover:bg-secondary-hover/70 hover:text-primary hover:outline-primary/40 focus-visible:ring-ring active:border-primary/60 active:bg-secondary active:text-primary active:outline-primary/40 disabled:bg-muted disabled:text-muted-foreground inline-flex select-none items-center justify-center gap-1 whitespace-nowrap rounded border bg-white px-2.5 py-1 text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 active:outline-[1px] disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-60 md:gap-1.5 md:rounded-sm lg:px-4 lg:py-1.5 xl:py-2">
                    Actions
                    <ChevronDown className="ml-2" size={20} />
                </div>
            }
        >
            {actions.map((action, index) => (
                <button
                    type="button"
                    disabled={selectedItems === 0}
                    key={index}
                    onClick={() => onAction(action.actionKey)}
                    className="hover:bg-accent disabled:text-muted-foreground block w-full cursor-pointer rounded-sm px-2.5 py-2 text-left text-sm font-light disabled:cursor-not-allowed disabled:opacity-60"
                >
                    {action.label}
                </button>
            ))}
        </CustomPopover>
    );
};

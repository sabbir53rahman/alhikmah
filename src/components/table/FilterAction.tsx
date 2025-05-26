import { FilterIcon, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import CustomPopover from "@/components/custom-ui/CustomPopover";

export type FilterType = {
    label: string;
    filterKey: string;
    emptyOptionText?: string;
    options: {
        label: string;
        value: string;
    }[];
};

interface Props {
    filters: FilterType[];
    appliedFilter: { key: string; value: string }[];
    onFilterChange: (key: string, value: string) => void;
    clearFilter: () => void;
}

export const FilterAction = ({ filters, appliedFilter, onFilterChange, clearFilter }: Props) => {
    const hasAppliedFilter = appliedFilter
        .filter((f) => filters.some((filter) => filter.filterKey === f.key))
        .map((f) => f.value)
        .some((value) => value !== "");

    return (
        <>
            {hasAppliedFilter && (
                <Button variant={"icon"} size={"sm"} onClick={() => clearFilter()}>
                    Clear <X className="size-4 xl:size-5" />
                </Button>
            )}

            {filters.map((filter, index) => (
                <CustomPopover
                    key={index}
                    trigger={
                        <Button
                            size={"sm"}
                            variant="secondary"
                            className={
                                appliedFilter.find((f) => f.key === filter.filterKey && f.value !== "")
                                    ? "border-primary/40 bg-secondary-hover/70 text-primary"
                                    : ""
                            }
                        >
                            <FilterIcon className="size-4 cursor-pointer xl:size-[18px]" /> {filter.label}{" "}
                            {appliedFilter.find((f) => f.key === filter.filterKey && f.value !== "") &&
                                `(${appliedFilter.find((f) => f.key === filter.filterKey)?.value.split(",").length})`}
                        </Button>
                    }
                >
                    <div className="">
                        {filter?.options?.length === 0 && (
                            <div className="flex min-h-20 w-full items-center justify-center px-4 text-center text-sm text-muted-foreground">
                                {filter.emptyOptionText || "No options available"}
                            </div>
                        )}
                        {filter?.options?.map((option) => (
                            <div
                                onClick={() => {
                                    const newOption = appliedFilter.find(
                                        (f) => f.key === filter.filterKey && f.value === option.value
                                    )
                                        ? ""
                                        : option.value;

                                    onFilterChange(filter.filterKey, newOption);
                                }}
                                key={option.value}
                                className="flex cursor-pointer items-center gap-2 rounded px-2.5 py-2 hover:bg-accent"
                            >
                                <Checkbox
                                    checked={
                                        !!appliedFilter.find((f) => {
                                            if (f.key === filter.filterKey) {
                                                if (f.value.includes(",")) {
                                                    return f.value.split(",").includes(option.value);
                                                }
                                                return f.value === option.value;
                                            }
                                            return false;
                                        })
                                    }
                                    className="size-4"
                                    id={option.value}
                                />
                                <Label className="pointer-events-none font-light" htmlFor={option.value}>
                                    {option.label}
                                </Label>
                            </div>
                        ))}
                    </div>
                </CustomPopover>
            ))}
        </>
    );
};

import { cn } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

type Props = {
    columns: number;
    isOnDialog?: boolean;
};

export const TableLoadingSkeleton = ({ columns, isOnDialog }: Props) => {
    const rows = Math.floor(Math.random() * 6) + 5;

    const getWidth = (index: number) => {
        if (index === 0) {
            return "w-[20px]";
        }

        if (index === columns - 1) {
            return "w-[180px]";
        }

        if (index === columns - 2 || index === columns - 3) {
            return "w-[130px]";
        }

        return "";
    };

    return (
        <div className={cn("space-y-4 p-8 2xl:p-10", isOnDialog && "p-0")}>
            {!isOnDialog && <Skeleton className="h-8 w-[140px] 2xl:h-10" />}
            {!isOnDialog && (
                <div className="flex items-center justify-between">
                    <div className="flex w-full items-center gap-4">
                        <Skeleton className="h-8 w-[40px] 2xl:h-10" />
                        <Skeleton className="h-8 w-[400px] 2xl:h-10" />
                    </div>
                    <div className="flex items-center gap-4">
                        <Skeleton className="h-8 w-[140px] 2xl:h-10" />
                    </div>
                </div>
            )}
            <div className="flex items-center justify-between">
                <div className="flex w-full items-center gap-4">
                    <Skeleton className="h-8 w-[140px] 2xl:h-10" />
                </div>
                <div className="flex items-center gap-4">
                    <Skeleton className="h-8 w-[140px] 2xl:h-10" />
                    <Skeleton className="h-8 w-[140px] 2xl:h-10" />
                    <Skeleton className="h-8 w-[140px] 2xl:h-10" />
                    <Skeleton className="h-8 w-[140px] 2xl:h-10" />
                </div>
            </div>
            <div className="rounded-sm border bg-white">
                <Table>
                    <TableHeader>
                        <TableRow>
                            {Array.from({ length: columns }).map((_, index) => (
                                <TableHead key={index} className={getWidth(index)}>
                                    <Skeleton className={`h-5 ${getWidth(index)} rounded`} />
                                </TableHead>
                            ))}
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {Array.from({ length: rows }).map((_, index) => (
                            <TableRow key={index}>
                                {Array.from({ length: columns }).map((_, index) => (
                                    <TableCell key={index} className={getWidth(index)}>
                                        <Skeleton className={`h-5 ${getWidth(index)} rounded`} />
                                    </TableCell>
                                ))}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>

            <div className="flex items-center justify-between">
                <Skeleton className="h-8 w-[180px] 2xl:h-10" />
                <div className="flex items-center gap-4">
                    <Skeleton className="h-8 w-[44px] 2xl:h-10" />

                    <Skeleton className="h-4 w-[83px]" />

                    <div className="flex gap-1">
                        <Skeleton className="h-8 w-[32px]" />
                        <Skeleton className="h-8 w-[32px]" />
                        <Skeleton className="h-8 w-[32px]" />
                        <Skeleton className="h-8 w-[32px]" />
                    </div>
                </div>
            </div>
        </div>
    );
};

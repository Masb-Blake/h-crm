import { useDroppable } from "@dnd-kit/core";
import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";
import { TaskCard } from "./TaskCard";
import { Card, CardContent } from "@/components/ui/card";

export function Column({ id, title, tasks }) {
    const { setNodeRef } = useDroppable({ id });

    return (
        <Card className="bg-gray-800 w-full p-4">
            <h2 className="text-lg font-bold text-white mb-3">{title}</h2>
            <CardContent ref={setNodeRef} className="space-y-2 min-h-[100px]">
                <SortableContext items={tasks.map((t) => t.id)} strategy={verticalListSortingStrategy}>
                    {tasks.map((task) => (
                        <TaskCard key={task.id} task={task} />
                    ))}
                </SortableContext>
            </CardContent>
        </Card>
    );
}


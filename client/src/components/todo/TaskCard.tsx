import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
import { Card } from "@/components/ui/card";

export function TaskCard({ task }) {
    const { attributes, listeners, setNodeRef, transform } = useDraggable({ id: task.id });

    const style = {
        transform: CSS.Transform.toString(transform),
    };

    return (
        <Card
            ref={setNodeRef}
            {...listeners}
            {...attributes}
            style={style}
            className="bg-gray-700 text-white p-3 rounded-lg cursor-grab"
        >
            {task.name}
        </Card>
    );
}

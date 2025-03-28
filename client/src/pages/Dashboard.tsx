import { useState } from "react";
import { DndContext, closestCorners } from "@dnd-kit/core";
import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";
import { Column } from "@/components/todo/Column";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const initialTasks = {
    todo: [],
    inProgress: [],
    completed: [],
};

export default function TodoDashboard() {
    const [tasks, setTasks] = useState(initialTasks);
    const [newTask, setNewTask] = useState("");
    const [pingText, setPingText] = useState("");

    const addTask = () => {
        if (newTask.trim()) {
            setTasks({ ...tasks, todo: [...tasks.todo, { id: Date.now(), text: newTask }] });
            setNewTask("");
        }
    };

    const onDragEnd = (event) => {
        const { active, over } = event;
        if (!over) return;

        const fromColumn = Object.keys(tasks).find((col) => tasks[col].some((t) => t.id === active.id));
        const toColumn = over.id;

        if (fromColumn !== toColumn) {
            const task = tasks[fromColumn].find((t) => t.id === active.id);
            setTasks({
                ...tasks,
                [fromColumn]: tasks[fromColumn].filter((t) => t.id !== active.id),
                [toColumn]: [...tasks[toColumn], task],
            });
        }
    };

    async function ping(event: MouseEvent<HTMLButtonElement, MouseEvent>): Promise<void> {

        const response = await fetch("https://crm.api.localhost/ping", {
            method: "GET"
        })
        console.log(response)
        if (response.ok) {
            const json = await response.json();
            console.log(json)
            setPingText(json)
        }
    }

    return (
        <div className="">
            <Card className="w-full p-6">
                <CardContent>
                    <div className="flex gap-2 mb-4">
                        <Input
                            value={newTask}
                            onChange={(e) => setNewTask(e.target.value)}
                            placeholder="Add a new task"
                            className="bg-gray-800 text-white"
                        />
                        <Button onClick={addTask}>Add Task</Button>
                        <Button onClick={ping}>Ping Api</Button>
                    </div>
                    <DndContext collisionDetection={closestCorners} onDragEnd={onDragEnd}>
                        <div className="grid grid-cols-3 gap-4">
                            <SortableContext items={tasks.todo.map((t) => t.id)} strategy={verticalListSortingStrategy}>
                                <Column id="todo" title="TODO" tasks={tasks.todo} />
                            </SortableContext>
                            <SortableContext items={tasks.inProgress.map((t) => t.id)} strategy={verticalListSortingStrategy}>
                                <Column id="inProgress" title="In Progress" tasks={tasks.inProgress} />
                            </SortableContext>
                            <SortableContext items={tasks.completed.map((t) => t.id)} strategy={verticalListSortingStrategy}>
                                <Column id="completed" title="Completed" tasks={tasks.completed} />
                            </SortableContext>
                        </div>
                    </DndContext>
                </CardContent>
                <p>{pingText}</p>
            </Card>
        </div>
    );
}


import { useEffect, useState } from "react";
import { DndContext, closestCorners } from "@dnd-kit/core";
import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";
import { Column } from "@/components/todo/Column";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { v4 as uuidv4 } from "uuid";


interface Todo {
    id: string,
    name: string
}

interface tasks {
    todo: Todo[],
    inProgress: Todo[]
    completed: Todo[]
}

const initialTasks: tasks = {
    todo: [],
    inProgress: [],
    completed: []
}


export default function TodoDashboard() {
    const [tasks, setTasks] = useState(initialTasks);
    const [newTask, setNewTask] = useState("");

    useEffect(() => {
        getTasks()
    }, [])



    const getTasks = async () => {
        const response = await fetch("https://crm.api.localhost/tasks", {
            method: "GET"
        })
        if (response.ok) {
            const json = await response.json()
            console.log(json, json)
            initialTasks.todo = JSON.parse(JSON.stringify(json))
            setTasks({ ...initialTasks, todo: JSON.parse(JSON.stringify(json)) })
            console.log(tasks)
        }
    }

    const addTask = async () => {
        if (newTask.trim()) {
            const id = uuidv4();
            const added: Todo = { id: id, name: newTask }
            setTasks({ ...tasks, todo: [...tasks.todo, added] })
            setNewTask("")
            await createNewTask(added)
        }
    };


    const createNewTask = async (task: Todo) => {
        console.log('Creating task: ', task)
        const response = await fetch("https://crm.api.localhost/task", {
            method: "POST",
            body: JSON.stringify(task)
        });

        if (response.ok) {
            const json = await response.json();
            console.log("Generated Id: ", json.id)
            setTasks({ ...tasks, todo: [...tasks.todo.filter(t => t.id != task.id), { id: json.id, name: json.name }] })
        }
        else {
            console.error("Unable to create task")
        }

    }

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

            //Update Status
        }
    };




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
            </Card>
        </div>
    );
}


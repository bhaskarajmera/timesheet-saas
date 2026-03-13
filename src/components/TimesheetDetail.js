"use client"

import { useState } from "react"
import AddTaskModal from "./modals/AddTaskModal"

export default function TimesheetDetail() {
    const [open, setOpen] = useState(false)

    const tasks = [
        {
            id: 1,
            name: "Homepage Development",
            hours: "4 hrs"
        },
        {
            id: 2,
            name: "Homepage Development",
            hours: "4 hrs"
        }
    ]

    return (
        <div>
            <h3 className="font-semibold mb-3">This week's timesheet</h3>

            <div className="space-y-2">
                {tasks.map((task) => (
                    <div
                        key={task.id}
                        className="flex justify-between bg-white border rounded p-3"
                    >
                        <span>{task.name}</span>

                        <span className="text-gray-500">{task.hours}</span>
                    </div>
                ))}

                <button
                    onClick={() => setOpen(true)}
                    className="w-full border-dashed border p-3 rounded text-blue-600"
                >
                    + Add new task
                </button>
            </div>

            {open && <AddTaskModal close={() => setOpen(false)} />}
        </div>
    )
}

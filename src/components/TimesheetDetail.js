"use client"

import { useState } from "react"
import AddTaskModal from "./modals/AddTaskModal"
import NavbarHeader from "./NavbarHeader"
import { useParams, useRouter } from "next/navigation"

export default function TimesheetDetail() {
    const [open, setOpen] = useState(false)
    const { id } = useParams()
    const router = useRouter()

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
        <div className="min-h-screen bg-gray-50">
            <NavbarHeader />

            <main className="max-w-5xl mx-auto p-6 bg-white rounded shadow mt-6">
                <button
                    onClick={() => router.push("/dashboard")}
                    className="cursor-pointer mb-6 inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded hover:bg-gray-100 focus:outline-none"
                >
                    ← Back
                </button>
                <h3 className="font-semibold mb-3">Timesheet #{id}</h3>

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
                        className="cursor-pointer w-full border-dashed border p-3 rounded text-blue-600"
                    >
                        + Add new task
                    </button>
                </div>

                {open && <AddTaskModal close={() => setOpen(false)} />}
            </main>
        </div>
    )
}

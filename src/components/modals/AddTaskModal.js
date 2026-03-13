"use client"

import { useState } from "react"

export default function AddTaskModal({ close }) {
    const [task, setTask] = useState("")
    const [hours, setHours] = useState("")

    function submit(e) {
        e.preventDefault()

        console.log({ task, hours })

        close()
    }

    return (
        <div className="fixed inset-0 bg-black/30 flex items-center justify-center">
            <div className="bg-white rounded-lg w-96 p-6">
                <h2 className="text-lg font-semibold mb-4">Add New Task</h2>

                <form onSubmit={submit} className="space-y-4">
                    <input
                        placeholder="Task name"
                        className="w-full border p-2 rounded"
                        value={task}
                        onChange={(e) => setTask(e.target.value)}
                        required
                    />

                    <input
                        placeholder="Hours"
                        className="w-full border p-2 rounded"
                        value={hours}
                        onChange={(e) => setHours(e.target.value)}
                        required
                    />

                    <div className="flex justify-end gap-2">
                        <button
                            type="button"
                            onClick={close}
                            className="px-4 py-2 border rounded"
                        >
                            Cancel
                        </button>

                        <button className="px-4 py-2 bg-blue-600 text-white rounded">
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

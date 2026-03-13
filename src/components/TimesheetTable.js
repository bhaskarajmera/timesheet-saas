"use client"

import { useState } from "react"
import TimesheetDetail from "./TimesheetDetail"

const timesheets = [
    {
        id: 1,
        week: 1,
        date: "1 - 5 January, 2024",
        status: "Completed"
    },
    {
        id: 2,
        week: 2,
        date: "8 - 12 January, 2024",
        status: "Completed"
    },
    {
        id: 3,
        week: 3,
        date: "15 - 19 January, 2024",
        status: "Incomplete"
    },
    {
        id: 4,
        week: 4,
        date: "22 - 26 January, 2024",
        status: "Completed"
    },
    {
        id: 5,
        week: 5,
        date: "28 January - 1 February, 2024",
        status: "Missing"
    }
]

export default function TimesheetTable() {
    const [active, setActive] = useState(null)

    return (
        <div className="bg-white rounded-lg border">
            <div className="p-4 border-b">
                <h2 className="text-lg font-semibold">Your Timesheets</h2>
            </div>

            <table className="w-full text-sm">
                <thead className="bg-gray-50 text-gray-600">
                    <tr>
                        <th className="text-left p-3">Week #</th>
                        <th className="text-left p-3">Date</th>
                        <th className="text-left p-3">Status</th>
                        <th className="text-left p-3">Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {timesheets.map((t) => (
                        <>
                            <tr key={t.id} className="border-t">
                                <td className="p-3">{t.week}</td>

                                <td className="p-3">{t.date}</td>

                                <td className="p-3">
                                    <span className="px-2 py-1 text-xs rounded bg-green-100 text-green-700">
                                        {t.status}
                                    </span>
                                </td>

                                <td className="p-3">
                                    <button
                                        className="text-blue-600 cursor-pointer"
                                        onClick={() =>
                                            setActive(
                                                active === t.id ? null : t.id
                                            )
                                        }
                                    >
                                        View
                                    </button>
                                </td>
                            </tr>

                            {active === t.id && (
                                <tr>
                                    <td colSpan="4" className="p-4 bg-gray-50">
                                        <TimesheetDetail />
                                    </td>
                                </tr>
                            )}
                        </>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

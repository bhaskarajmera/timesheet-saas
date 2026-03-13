"use client"

import NavbarHeader from "@/components/NavbarHeader"
import TimesheetDataTable from "@/components/TimesheetDataTable"

export default function Dashboard() {
    return (
        <div>
            <NavbarHeader />

            <div className="max-w-6xl mx-auto p-6">
                <TimesheetDataTable />
            </div>
        </div>
    )
}

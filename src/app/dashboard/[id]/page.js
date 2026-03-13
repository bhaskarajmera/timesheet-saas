"use client"

import { useParams } from "next/navigation"
import TimesheetDetail from "@/components/TimesheetDetail"

export default function TimesheetDetailPage() {
    const { id } = useParams() // get timesheet id from URL

    return (
        <div>
            <TimesheetDetail timesheetId={id} />
        </div>
    )
}

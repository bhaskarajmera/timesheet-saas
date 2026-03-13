"use client"

import { useParams, useRouter } from "next/navigation"
import TimesheetDetail from "@/components/TimesheetDetail"
import { useSession } from "next-auth/react"
import { useEffect } from "react"

export default function TimesheetDetailPage() {
    const { id } = useParams() // get timesheet id from URL
    const router = useRouter()
    const { data: session, status } = useSession()

    useEffect(() => {
        if (status === "loading") return

        if (!session) {
            router.push("/login")
        }
    }, [session, status, router])

    return (
        <div>
            <TimesheetDetail timesheetId={id} />
        </div>
    )
}

"use client"

import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

import NavbarHeader from "@/components/NavbarHeader"
import TimesheetDataTable from "@/components/TimesheetDataTable"

export default function Dashboard() {
    const { data: session, status } = useSession()
    const router = useRouter()

    useEffect(() => {
        if (status === "unauthenticated") {
            router.replace("/login")
        }
    }, [status, router])

    if (status === "loading") {
        return <div className="p-6">Loading...</div>
    }

    if (!session) {
        return null
    }

    return (
        <div>
            <NavbarHeader />

            <div className="max-w-6xl mx-auto p-6">
                <TimesheetDataTable />
            </div>
        </div>
    )
}

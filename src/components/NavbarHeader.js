"use client"

import { useSession, signOut } from "next-auth/react"
import { useState, useRef, useEffect } from "react"

export default function NavbarHeader() {
    const { data: session } = useSession()
    const [open, setOpen] = useState(false)
    const dropdownRef = useRef(null)

    const username = session?.user?.name || session?.user?.email || "User"

    function toggleDropdown() {
        setOpen(!open)
    }

    function handleSignOut() {
        signOut({ callbackUrl: "/login" })
    }

    // close dropdown when clicking outside
    useEffect(() => {
        function handleClickOutside(event) {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target)
            ) {
                setOpen(false)
            }
        }

        document.addEventListener("mousedown", handleClickOutside)
        return () =>
            document.removeEventListener("mousedown", handleClickOutside)
    }, [])

    return (
        <nav className="bg-white border-b border-gray-300 shadow-md">
            <div className="mx-auto px-10 h-16 flex items-center justify-between">
                {/* Brand */}
                <div className="text-xl font-semibold">ticktock</div>

                {/* User dropdown */}
                <div className="relative" ref={dropdownRef}>
                    <button
                        onClick={toggleDropdown}
                        className="flex items-center cursor-pointer gap-2 text-sm font-medium hover:text-blue-600"
                    >
                        {username}

                        <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M19 9l-7 7-7-7"
                            />
                        </svg>
                    </button>

                    {open && (
                        <div className="absolute right-0 mt-2 w-40 bg-white border rounded shadow-md">
                            <button
                                onClick={handleSignOut}
                                className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                            >
                                Sign Out
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    )
}

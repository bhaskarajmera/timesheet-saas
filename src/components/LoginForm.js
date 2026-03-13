"use client"

import { signIn } from "next-auth/react"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function LoginForm() {
    const router = useRouter()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)

        const res = await signIn("credentials", {
            redirect: false,
            email,
            password
        })

        if (res.error) {
            setError("Invalid credentials")
            setLoading(false)
        } else {
            router.push("/dashboard")
        }
    }

    return (
        <form onSubmit={handleSubmit} className="w-full max-w-sm space-y-4">
            <h2 className="text-2xl font-bold">Login</h2>

            {error && <p className="text-red-500 text-sm">{error}</p>}

            <input
                className="w-full border p-2 rounded"
                type="email"
                placeholder="Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <input
                className="w-full border p-2 rounded"
                type="password"
                placeholder="Password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

            <button className="w-full bg-blue-600 text-white p-2 rounded">
                {loading ? "Signing in..." : "Login"}
            </button>
        </form>
    )
}

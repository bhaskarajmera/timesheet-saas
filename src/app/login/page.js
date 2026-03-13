import LoginForm from "@/components/LoginForm"

export default function LoginPage() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen">

      <div className="flex items-center justify-center bg-white">
        <LoginForm />
      </div>

      <div className="hidden md:flex bg-blue-600 text-white items-center justify-center">
        <div className="max-w-md text-center">
          <h1 className="text-3xl font-bold">Timesheet Manager</h1>
          <p className="mt-4">
            Track weekly work logs efficiently and stay organized.
          </p>
        </div>
      </div>

    </div>
  )
}
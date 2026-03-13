// I was doing it like this previously.

export async function GET() {
    const data = [
        {
            id: 1,
            week: "Week 1",
            date: "2026-03-01",
            status: "Approved"
        },
        {
            id: 2,
            week: "Week 2",
            date: "2026-03-08",
            status: "Pending"
        }
    ]

    return Response.json(data)
}

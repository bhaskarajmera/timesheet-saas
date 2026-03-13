"use client"

import {
    useReactTable,
    getCoreRowModel,
    getPaginationRowModel,
    getFilteredRowModel,
    getSortedRowModel,
    flexRender
} from "@tanstack/react-table"
import { useState } from "react"
import { timesheets } from "@/data/timesheets"
import { twMerge } from "tailwind-merge"
import { useRouter } from "next/navigation"
import TimesheetDetail from "./TimesheetDetail"

export default function TimesheetDataTable() {
    const [data] = useState([...timesheets])
    const [statusFilter, setStatusFilter] = useState("")
    const [sorting, setSorting] = useState([])
    const [expandedRow, setExpandedRow] = useState(null) // Track expanded row

    const router = useRouter()

    const columns = [
        {
            header: ({ column }) => (
                <button
                    className="cursor-pointer"
                    onClick={() =>
                        column.toggleSorting(column.getIsSorted() === "asc")
                    }
                >
                    Week # ↕
                </button>
            ),
            accessorKey: "week"
        },
        {
            header: "Date",
            accessorKey: "date"
        },
        {
            header: ({ column }) => (
                <button
                    className="cursor-pointer"
                    onClick={() =>
                        column.toggleSorting(column.getIsSorted() === "asc")
                    }
                >
                    Status ↕
                </button>
            ),
            accessorKey: "status",
            cell: (info) => (
                <span
                    className={twMerge(
                        info.getValue(),
                        "px-2 py-1 text-xs rounded text-green-700"
                    )}
                >
                    {info.getValue()}
                </span>
            )
        },
        {
            header: "Actions",
            cell: ({ row }) => (
                <button
                    className="text-blue-600 hover:underline cursor-pointer"
                    onClick={() =>
                        router.push(`/dashboard/timesheet-${row.original.id}`)
                    }
                >
                    View
                </button>
            )
        }
    ]

    const filteredData = statusFilter
        ? data.filter((d) => d.status === statusFilter)
        : data

    const table = useReactTable({
        data: filteredData,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        onSortingChange: setSorting,
        getSortedRowModel: getSortedRowModel(),
        state: {
            sorting
        }
    })

    return (
        <div className="bg-white border border-gray-300 rounded-lg">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-300">
                <h2 className="font-semibold">Your Timesheets</h2>
                <select
                    className="border border-gray-300 rounded p-2 text-sm cursor-pointer"
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                >
                    <option value="">All Status</option>
                    <option value="Completed">Completed</option>
                    <option value="Incomplete">Incomplete</option>
                    <option value="Missing">Missing</option>
                </select>
            </div>

            {/* Table */}
            <table className="w-full text-sm">
                <thead className="bg-gray-50">
                    {table.getHeaderGroups().map((headerGroup) => (
                        <tr key={headerGroup.id}>
                            {headerGroup.headers.map((header) => (
                                <th
                                    key={header.id}
                                    className="p-3 text-left text-gray-600"
                                >
                                    {flexRender(
                                        header.column.columnDef.header,
                                        header.getContext()
                                    )}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>

                <tbody>
                    {table.getRowModel().rows.map((row) => (
                        <tr key={row.id} className="border-t border-gray-300">
                            {row.getVisibleCells().map((cell) => (
                                <td key={cell.id} className={"p-3"}>
                                    {flexRender(
                                        cell.column.columnDef.cell,
                                        cell.getContext()
                                    )}
                                </td>
                            ))}
                        </tr>
                    ))}
                    {/* Render TimesheetDetail if a row is expanded */}
                    {expandedRow && (
                        <tr className="bg-gray-50 border-t border-gray-300">
                            <td colSpan={columns.length} className="p-4">
                                <TimesheetDetail />
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>

            {/* Pagination */}
            <div className="flex items-center justify-between p-4 border-t border-gray-300">
                <select
                    className="border border-gray-300 rounded p-2 text-sm cursor-pointer"
                    value={table.getState().pagination.pageSize}
                    onChange={(e) => table.setPageSize(Number(e.target.value))}
                >
                    {[5, 10, 20].map((size) => (
                        <option key={size} value={size}>
                            {size} per page
                        </option>
                    ))}
                </select>

                <div className="flex gap-2">
                    <button
                        className="px-3 py-1 border border-gray-300 rounded cursor-pointer"
                        onClick={() => table.previousPage()}
                        disabled={!table.getCanPreviousPage()}
                    >
                        Prev
                    </button>

                    <span className="px-3 py-1 text-sm">
                        Page {table.getState().pagination.pageIndex + 1}
                    </span>

                    <button
                        className="px-3 py-1 border border-gray-300 rounded cursor-pointer"
                        onClick={() => table.nextPage()}
                        disabled={!table.getCanNextPage()}
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    )
}

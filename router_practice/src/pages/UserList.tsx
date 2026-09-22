import { useEffect, useState } from "react"
import { Http } from "../helpers/api"
import type { User } from "../helpers/types"
import { Link } from "react-router-dom"
export const UserList = () => {
    const [users, setUsers] = useState<User[]>([])

    useEffect(() => {
        Http
            .get<User[]>("/users")
            .then(response => setUsers(response.data))
    }, [])

    return (
        <main className="min-h-screen bg-slate-100 px-4 py-8 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
                <div className="mb-8">
                    <p className="text-sm font-semibold uppercase tracking-wider text-sky-600">Team directory</p>
                    <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">Users</h1>
                </div>
                <Link className="text-blue-400 hover:underline" to="/add">Add User</Link>
                <div className="m-9 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {
                users.map(user => (
                    <article key={user.id} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                        <div className="flex items-start justify-between gap-4">
                            <div>
                                <h2 className="text-xl font-bold text-slate-900">{user.name} {user.surname}</h2>
                                <p className="mt-1 text-sm capitalize text-slate-500">{user.gender}</p>
                            </div>
                            <span className="rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold text-sky-700">#{user.id}</span>
                        </div>
                        <div className="mt-6 border-t border-slate-100 pt-4">
                            <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Salary</p>
                            <p className="mt-1 text-2xl font-bold text-slate-800">${user.salary.toLocaleString()}</p>
                            <button
                                    className="mt-4 w-full rounded-lg border border-red-200 bg-red-50 px-4 py-2 text-sm font-semibold text-red-600 transition hover:bg-red-600 hover:text-white"
                                                                                                                                                                                                    >
                             Delete
                            </button>
                        </div>
                    </article>
                ))
            }
                </div>
            </div>
        </main>
    )
}
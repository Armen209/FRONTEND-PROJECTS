import React from "react";

export type User = {
    id: string;
    name: string;
    surname: string;
    gender: "male" | "female";
    salary: number;
};

type Props = {
    users: User[];
};

export const UserList: React.FC<Props> = ({ users }) => {
    return (
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                <div>
                    <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-indigo-400">Team overview</p>
                    <h1 className="text-3xl font-bold tracking-tight text-white">Users Directory</h1>
                    <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">
                        A list of all registered team members including their details and compensation.
                    </p>
                </div>
                <span className="inline-flex w-fit items-center rounded-full border border-indigo-400/20 bg-indigo-500/10 px-3 py-1.5 text-xs font-semibold text-indigo-300 ring-1 ring-inset ring-white/5">
                    Total: {users.length}
                </span>
            </div>

            {/* Table Container */}
            <div className="overflow-hidden rounded-2xl border border-indigo-400/20 bg-slate-900 shadow-2xl shadow-indigo-950/30 ring-1 ring-white/5">
                <div className="overflow-x-auto">
                    <table className="w-full min-w-[680px] text-left text-sm text-slate-300">
                        <thead className="border-b border-indigo-400/20 bg-indigo-500/10 text-xs uppercase tracking-[0.16em] text-indigo-300">
                            <tr>
                                <th scope="col" className="px-6 py-4 font-semibold">ID</th>
                                <th scope="col" className="px-6 py-4 font-semibold">Name</th>
                                <th scope="col" className="px-6 py-4 font-semibold">Surname</th>
                                <th scope="col" className="px-6 py-4 font-semibold">Gender</th>
                                <th scope="col" className="px-6 py-4 text-right font-semibold">Salary</th>
                            </tr>
                        </thead>

                        <tbody className="divide-y divide-slate-800 bg-slate-900/80">
                            {users.length === 0 ? (
                                <tr>
                                    <td colSpan={5} className="px-6 py-10 text-center text-slate-500">
                                        No users found.
                                    </td>
                                </tr>
                            ) : (
                                users.map(user => (
                                    <tr 
                                        key={user.id} 
                                        className="transition-colors duration-200 hover:bg-indigo-500/10"
                                    >
                                        <td className="whitespace-nowrap px-6 py-4 font-mono text-xs text-indigo-400">
                                            #{user.id}
                                        </td>
                                        <td className="whitespace-nowrap px-6 py-4 font-semibold text-white">
                                            {user.name}
                                        </td>
                                        <td className="whitespace-nowrap px-6 py-4 text-slate-300">
                                            {user.surname}
                                        </td>
                                        <td className="whitespace-nowrap px-6 py-4">
                                            <span 
                                                className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium capitalize ${
                                                    user.gender === "female"
                                                        ? "bg-fuchsia-400/10 text-fuchsia-300 ring-1 ring-inset ring-fuchsia-300/20"
                                                        : "bg-sky-400/10 text-sky-300 ring-1 ring-inset ring-sky-300/20"
                                                }`}
                                            >
                                                {user.gender}
                                            </span>
                                        </td>
                                        <td className="whitespace-nowrap px-6 py-4 text-right font-semibold text-white">
                                            ${Number(user.salary).toLocaleString()} <span className="text-xs font-normal text-slate-500">USD</span>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};
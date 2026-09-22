import { Outlet } from "react-router-dom"

export const Layout = () => {
    return (
        <div className="min-h-screen bg-slate-100 text-slate-900">
            <header className="border-b border-slate-200 bg-white shadow-sm">
                <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                    <h1 className="text-xl font-bold tracking-tight text-blue-600">
                        Social Network
                    </h1>

                    <div className="flex items-center gap-2">
                        <div className="h-8 w-8 rounded-full bg-blue-100" />
                    </div>
                </div>
            </header>

            <main className="mx-auto flex w-full max-w-7xl justify-center px-4 py-8 sm:px-6 lg:px-8">
                <div
                    id="outlet"
                    className="w-full"
                >
                    <Outlet />
                </div>
            </main>
        </div>
    )
}
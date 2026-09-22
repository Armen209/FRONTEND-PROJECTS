import { Link } from "react-router-dom"

export const SignIn = () => {
    return (
        <main className="relative isolate flex min-h-screen items-center justify-center overflow-hidden bg-slate-100 px-4 py-10 sm:px-6">
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
                <div className="absolute -inset-1/3 bg-[conic-gradient(from_180deg_at_50%_50%,#dbeafe,#e0f2fe,#f8fafc,#dbeafe)] opacity-80 blur-3xl animate-[spin_24s_linear_infinite]" />
                <div className="absolute -left-24 top-1/4 h-96 w-[32rem] -rotate-12 bg-blue-300/70 blur-2xl animate-[pulse_4s_ease-in-out_infinite]" />
                <div className="absolute -right-32 bottom-0 h-[30rem] w-[36rem] rotate-12 bg-sky-300/65 blur-2xl animate-[pulse_6s_ease-in-out_infinite]" />
            </div>

            <section className="relative w-full max-w-md rounded-2xl border border-slate-200/90 bg-white p-6 shadow-xl shadow-blue-900/5 sm:p-8">
                <div className="mb-8">
                    <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-lg font-bold text-white shadow-lg shadow-blue-600/20">
                        S
                    </div>
                    <p className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">
                        Welcome back
                    </p>
                    <h1 className="text-3xl font-semibold tracking-tight text-slate-900">
                        Sign in to your account
                    </h1>
                    <p className="mt-2 text-sm leading-6 text-slate-500">
                        Continue connecting with your community.
                    </p>
                </div>

                <form className="space-y-5">
                    <div>
                        <label htmlFor="username" className="mb-2 block text-sm font-medium text-slate-700">
                            Username
                        </label>
                        <input
                            id="username"
                            name="username"
                            type="text"
                            className="w-full rounded-lg border border-slate-300 bg-slate-50 px-3.5 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                        />
                    </div>

                    <div>
                        <label htmlFor="password" className="mb-2 block text-sm font-medium text-slate-700">
                            Password
                        </label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            className="w-full rounded-lg border border-slate-300 bg-slate-50 px-3.5 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full rounded-lg bg-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-500/20 active:translate-y-px"
                    >
                        Sign in
                    </button>
                </form>

                <p className="mt-6 text-center text-sm text-slate-500">
                    Don&apos;t have an account?{' '}
                    <Link to="/" className="font-semibold text-blue-600 transition hover:text-blue-700">
                        Create one
                    </Link>
                </p>
            </section>
        </main>
    )
}
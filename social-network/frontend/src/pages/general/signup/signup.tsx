import { Link } from "react-router-dom"
import { useForm } from "react-hook-form"
import { Errors } from "../../../helpers/Errors"
import { Http } from "../../../helpers/api"
import axios from "axios"
// import { error } from "console"

type SignUpForm = {
    firstName: string
    lastName: string
    username: string
    password: string
}

export const SignUp = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<SignUpForm>({
        defaultValues: {
            firstName: "",
            lastName: "",
            username: "",
            password: "",
        },
    })

    const onSubmit = (data: SignUpForm) => {
        Http
         .post("auth/signup",data)
         .then((response) => {
            console.log(response.data)
        })
        .catch((err) => {
           if(axios.isAxiosError(err)){
            console.log(err.response?.data?.message)
           }
        })
    }

    return (
        <main className="relative isolate flex min-h-screen items-center justify-center overflow-hidden bg-slate-100 px-4 py-10 sm:px-6">

            {/* Background */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
            >
                <div className="absolute -inset-1/3 animate-[spin_24s_linear_infinite] bg-[conic-gradient(from_180deg_at_50%_50%,#dbeafe,#e0f2fe,#f8fafc,#dbeafe)] opacity-80 blur-3xl" />

                <div className="absolute -left-24 top-1/4 h-96 w-[32rem] -rotate-12 animate-[pulse_4s_ease-in-out_infinite] bg-blue-300/70 blur-2xl" />

                <div className="absolute -right-32 bottom-0 h-[30rem] w-[36rem] rotate-12 animate-[pulse_6s_ease-in-out_infinite] bg-sky-300/65 blur-2xl" />
            </div>

            {/* Card */}
            <section className="relative w-full max-w-md rounded-2xl border border-slate-200/90 bg-white p-6 shadow-xl shadow-blue-900/5 sm:p-8">

                {/* Header */}
                <div className="mb-8">
                    <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-lg font-bold text-white shadow-lg shadow-blue-600/20">
                        S
                    </div>

                    <p className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">
                        Create your account
                    </p>

                    <h1 className="text-3xl font-semibold tracking-tight text-slate-900">
                        Join the community
                    </h1>

                    <p className="mt-2 text-sm leading-6 text-slate-500">
                        Set up your profile and start connecting with people.
                    </p>
                </div>

                {/* Form */}
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="space-y-5"
                    autoComplete="off"
                >

                    {/* First name / Last name */}
                    <div className="grid gap-5 sm:grid-cols-2">

                        <div>
                            <label
                                htmlFor="firstname"
                                className="mb-2 block text-sm font-medium text-slate-700"
                            >
                                First name
                            </label>

                            <input
                                id="firstName"
                                type="text"
                                autoComplete="off"
                                {...register("firstName", {
                                    required: "First name is required",
                                })}
                                className="w-full rounded-lg border border-slate-300 bg-slate-50 px-3.5 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="lastname"
                                className="mb-2 block text-sm font-medium text-slate-700"
                            >
                                Last name
                            </label>

                            <input
                                id="lastName"
                                type="text"
                                autoComplete="off"
                                {...register("lastName", {
                                    required: "Last name is required",
                                })}
                                className="w-full rounded-lg border border-slate-300 bg-slate-50 px-3.5 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                            />
                        </div>
                    </div>

                    {/* Username */}
                    <div>
                        <label
                            htmlFor="username"
                            className="mb-2 block text-sm font-medium text-slate-700"
                        >
                            Username
                        </label>

                        <input
                            id="username"
                            type="text"
                            autoComplete="off"
                            {...register("username", {
                                required: "Username is required",
                                minLength: {
                                    value: 3,
                                    message: "Username must be at least 3 characters",
                                },
                            })}
                            className="w-full rounded-lg border border-slate-300 bg-slate-50 px-3.5 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <label
                            htmlFor="password"
                            className="mb-2 block text-sm font-medium text-slate-700"
                        >
                            Password
                        </label>

                        <input
                            id="password"
                            type="password"
                            autoComplete="new-password"
                            {...register("password", {
                                required: "Password is required",
                                minLength: {
                                    value: 6,
                                    message: "Password must be at least 6 characters",
                                },
                            })}
                            className="w-full rounded-lg border border-slate-300 bg-slate-50 px-3.5 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                        />
                    </div>

                    {/* Errors */}
                    <Errors errors={errors} />

                    {/* Submit */}
                    <button
                        type="submit"
                        className="w-full rounded-lg bg-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-500/20 active:translate-y-px"
                    >
                        Create account
                    </button>
                </form>

                {/* Sign in */}
                <p className="mt-6 text-center text-sm text-slate-500">
                    Already have an account?{" "}
                    <Link
                        to="/login"
                        className="font-semibold text-blue-600 transition hover:text-blue-700"
                    >
                        Sign in
                    </Link>
                </p>
            </section>
        </main>
    )
}

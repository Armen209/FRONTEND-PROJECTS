import { useForm, type SubmitHandler } from "react-hook-form";
import type { User } from "./UserList";
import { nameValidator, salaryValidator } from "../helpers/validator";
import type React from "react";

export type Account = Omit<User, "id">;

type Props = {
  onAdd: (user: Account) => void;
};

export const AddUser: React.FC<Props> = ({ onAdd }) => {
  const {
    register,
    handleSubmit,
    reset, // Added form reset after submission
    formState: { errors }
  } = useForm<Account>();

  const handleAdd: SubmitHandler<Account> = (data) => {
    onAdd(data);
    reset(); // Clears form inputs after submitting
  };

  return (
    <section className="border-b border-indigo-400/10 bg-slate-950/80">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-6">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-indigo-400">
            People
          </p>
          <h1 className="text-2xl font-bold tracking-tight text-white">
            Add a new user
          </h1>
          <p className="mt-2 text-sm text-slate-400">
            Create a team member profile for the directory.
          </p>
        </div>

        <form
          onSubmit={handleSubmit(handleAdd)}
          className="rounded-2xl border border-indigo-400/20 bg-slate-900/80 p-5 shadow-xl shadow-indigo-950/20 ring-1 ring-white/5 sm:p-6"
        >
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <label className="space-y-2">
              <span className="text-sm font-medium text-slate-200">First name</span>
              <input
                type="text"
                {...register("name", nameValidator)}
                placeholder="Jane"
                className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3.5 py-2.5 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-500/30"
              />
              {errors.name && (
                <p className="mt-1 whitespace-nowrap text-sm text-red-400">
                  {errors.name.message}
                </p>
              )}
            </label>

            <label className="space-y-2">
              <span className="text-sm font-medium text-slate-200">Surname</span>
              <input
                type="text"
                {...register("surname", nameValidator)}
                placeholder="Doe"
                className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3.5 py-2.5 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-500/30"
              />
              {errors.surname && (
                <p className="mt-1 whitespace-nowrap text-sm text-red-400">
                  {errors.surname.message}
                </p>
              )}
            </label>

            <label className="space-y-2">
              <span className="text-sm font-medium text-slate-200">Gender</span>
              <select
                {...register("gender", {
                  required: "Please select your gender"
                })}
                defaultValue=""
                className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3.5 py-2.5 text-sm text-white outline-none transition focus:border-indigo-400 focus:ring-2 focus:ring-indigo-500/30"
              >
                <option value="" disabled>
                  Select gender
                </option>
                <option value="female">Female</option>
                <option value="male">Male</option>
              </select>
              {errors.gender && (
                <p className="mt-1 whitespace-nowrap text-sm text-red-400">
                  {errors.gender.message}
                </p>
              )}
            </label>

            <label className="space-y-2">
              <span className="text-sm font-medium text-slate-200">Annual salary</span>
              <div className="relative">
                <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-sm text-slate-500">
                  $
                </span>
                <input
                  type="number"
                  {...register("salary", salaryValidator)}
                  placeholder="65000"
                  className="w-full rounded-lg border border-slate-700 bg-slate-950 py-2.5 pl-7 pr-3.5 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-500/30"
                />
              </div>
              {errors.salary && (
                <p className="mt-1 whitespace-nowrap text-sm text-red-400">
                  {errors.salary.message}
                </p>
              )}
            </label>
          </div>

          <div className="mt-6 flex justify-end">
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-lg bg-indigo-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-indigo-950/30 transition hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:ring-offset-2 focus:ring-offset-slate-900 active:translate-y-px"
            >
              Save user
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};
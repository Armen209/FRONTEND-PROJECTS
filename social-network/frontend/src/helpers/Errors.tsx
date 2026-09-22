import type { FieldErrors } from "react-hook-form"

type FormValues = {
    firstName: string
    lastName: string
    username: string
    password: string
}

type ErrorsProps = {
    errors: FieldErrors<FormValues>
}

export const Errors = ({ errors }: ErrorsProps) => {
    if (Object.keys(errors).length === 0) {
        return null
    }

    return (
        <div className="mt-4 space-y-2 rounded-xl border border-red-200 bg-red-50 p-4">
            {errors.firstName && (
                <p className="flex items-center gap-2 text-sm font-medium text-red-600">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-red-100 text-xs">
                        !
                    </span>
                    {errors.firstName.message}
                </p>
            )}

            {errors.lastName && (
                <p className="flex items-center gap-2 text-sm font-medium text-red-600">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-red-100 text-xs">
                        !
                    </span>
                    {errors.lastName.message}
                </p>
            )}

            {errors.username && (
                <p className="flex items-center gap-2 text-sm font-medium text-red-600">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-red-100 text-xs">
                        !
                    </span>
                    {errors.username.message}
                </p>
            )}

            {errors.password && (
                <p className="flex items-center gap-2 text-sm font-medium text-red-600">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-red-100 text-xs">
                        !
                    </span>
                    {errors.password.message}
                </p>
            )}
        </div>
    )
}

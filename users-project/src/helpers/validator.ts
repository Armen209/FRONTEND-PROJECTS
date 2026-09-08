export const nameValidator = {
    required:"Please fill your name and surname"
}

export const salaryValidator = {
    required:"Please fill your salary",
    min:{value:1000,message:"Salary must be more than 1000"},
    max:{value:5000,message:"Salary must be at most 5000"},
    setValueAs:(p:string) => +p
}
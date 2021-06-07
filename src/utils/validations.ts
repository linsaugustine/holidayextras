export function isIsoDate(date: string) {
    const regEx = /\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z/
    return regEx.test(date)
}

export function isEmail(email: string) {
    const regEx = /\S+@\S+\.\S+/
    return regEx.test(email)
}

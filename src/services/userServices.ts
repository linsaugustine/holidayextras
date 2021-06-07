import { getData, setData } from "../dbAccess/userDataAccess"
import { v4 } from "uuid"
import IUser from "../types"
import { isIsoDate, isEmail } from "../utils/validations"

export const getUsers = () => {
    return getData()
}

export const getUser = (id: string) => {
    return getData().find(user => user.id === id)
}

export const addUser = (user: IUser): IUser => {
    const errors = validateUser(user)
    if (errors.length > 0) {
        //log errors
        throw new Error(errors.join(","))
    }

    const users = getData()
    users.push({...user, id: v4()})
    setData(users)
    return user
}

export const updateUser = (id: string, user: IUser): string => {
    const errors = validateUser(user)
    if (errors.length > 0) {
        //log errors
        throw new Error(errors.join(","))
    }
    
    const users = getData()

    if (!users.find(user => user.id === id)) {
        throw new Error("User not found")
    }

    const updatedUsers = users.filter(user => user.id !== id)
    updatedUsers.push(user)
    setData(updatedUsers)
    return "User Updated"
}

export const deleteUser = (id: string): string => {
    const users = getData().filter(user => user.id !== id)
    setData(users)
    return "User Deleted"
}

const validateUser = (user: IUser) => {
    let errorMessages = []

    if (!user) {
        errorMessages.push("User should not be null or empty")
    } else if (!user.givenName) {
        errorMessages.push("Given Name should not be empty")
    } else if (!user.familyName) {
        errorMessages.push("Family Name should not be empty")
    } else if (!user.email || !isEmail(user.email)) {
        errorMessages.push("please provide a correct email")
    } else if (!user.created || !isIsoDate(user.created)) {
        errorMessages.push("created accepts only UTC date time")
    }

    return errorMessages
}


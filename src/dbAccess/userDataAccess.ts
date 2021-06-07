"use strict"
import fs from "fs"
import IUser from "../types"

export const getData = (): IUser[] => {
    const rawdata = fs.readFileSync("./db/db.json")
    return JSON.parse(rawdata.toString())
}

export const setData = (db: IUser[]) => {
    const data = JSON.stringify(db, null, 2);
    fs.writeFileSync("./db/db.json", data);
    return getData()
}

"use strict"
import fs from "fs"
import IUser from "../types"
import path from "path"


 export const getData = (): IUser[] => {
    const rawdata = fs.readFileSync(path.join(__dirname, "/db.json"))
    return JSON.parse(rawdata.toString())
}

export const setData = (db: IUser[]) => {
    const data = JSON.stringify(db, null, 2);
    fs.writeFileSync(path.join(__dirname, "/db.json"), data);
    return getData()
}

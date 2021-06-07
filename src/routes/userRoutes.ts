import { Router } from "express";
import { getUsers, getUser, addUser, updateUser, deleteUser } from "../services/userServices"

const router = Router()

//HOF to handle errors
const use = fn => (req, res, next) => Promise.resolve(fn(req, res, next)).catch(next)

const add = async (req, res) => {
    return res.status(200).send(addUser(req.body))
}

const list = async (req, res) => {
    await res.status(200).send(getUsers())
}

const get = async (req, res) => {
    await res.status(200).send(getUser(req.params.id))
}

const update = async (req, res) => {
    await res.status(200).send(updateUser(req.params.id, req.body))
}

const del = async (req, res) => {
    await res.status(200).send(deleteUser(req.params.id))
}

//User Add
router.post("/user", use(add))

//List all users
router.get("/users", use(list))

//get matching user
router.get("/user/:id", use(get))

//update user
router.patch("/user/:id", use(update))

//delete user
router.delete("/user/:id", use(del))

export default router
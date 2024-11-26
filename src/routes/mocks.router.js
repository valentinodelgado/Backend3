import {Router} from "express"
import mocks from "../utils/utils.js"


const router = Router()
const {generarUsuarios,generarMascotas} = mocks

router.get("/mockingpets", (req,res) => {
    const pets = []

    for(let i = 0; i < 100; i++)
    {
        pets.push(generarMascotas())
    }

    res.json(pets)

})

router.get("/mockingusers", (req,res) => {
    const users = []

    for(let i = 0; i < 100; i++)
    {
        users.push(generarUsuarios())
    }

    res.json(users)

})

export default router
import {Router} from "express"
import mocks from "../utils/utils.js"
import userModel from "../dao/models/User.js"
import petModel from "../dao/models/Pet.js"


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

    for(let i = 0; i < 50; i++)
    {
        users.push(generarUsuarios())
    }

    res.json(users)

})

router.post("/generateData", (req,res) => {
    const {users, pets} = req.body
    parseInt(users,pets)
    try{
        for(let i = 0; i < users; i++)
            {
                userModel.create(generarUsuarios())
            }

        for(let i = 0;i < pets; i++)
        {
            petModel.create(generarMascotas())
        }

        res.status(201).json({ message: "Datos generados exitosamente" })
    }catch(error){
        res.status(500).json({ message: "Error al generar datos", error })
    }
})

export default router
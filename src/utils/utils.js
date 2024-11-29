import {faker} from "@faker-js/faker"
import bcrypt from "bcrypt"

const createHash = password => bcrypt.hashSync(password, bcrypt.genSaltSync(10))
const isValidPassword = (password, user) => bcrypt.compareSync(password, user.password)

const generarMascotas = () =>{
    return {
        name: faker.animal.petName(),
        specie: faker.animal.dog(),
        birthDate: faker.date.birthdate(),
        adopted: false
    }
}

const generarUsuarios = () =>{
    const roles = ["user", "admin"]
    return {
        first_name:faker.person.firstName()  ,
        last_name:faker.person.lastName() ,
        email:faker.internet.email() ,
        password: createHash("coder123"),
        role: roles[Math.floor(Math.random() * roles.length)],
        pets: []
    }
}



export default {generarMascotas, generarUsuarios}
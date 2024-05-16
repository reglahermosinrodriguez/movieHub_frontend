import dotenv from "dotenv"

dotenv.config()

const URL = process.env.URL || "error"

export async function getData() {
    const data = await fetch(URL + "/movie")
    const JSONdata = await data.json()
    return JSONdata
}


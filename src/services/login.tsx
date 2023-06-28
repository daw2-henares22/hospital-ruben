import axios from "axios"

const baseUrl = 'http://localhost:8080/somos'

export const login = async (credentials: React.FormEvent<HTMLFormElement>) => {
    const { data } = await axios.post(baseUrl, credentials)
    return data
}
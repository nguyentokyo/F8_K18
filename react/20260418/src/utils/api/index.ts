import { toast } from "react-toastify"
import axios from '../../plugins/axios.ts'

interface Body {
    [key: string]: any
}

class Api {
    private async getNewToken() {
        const refreshToken = localStorage.getItem('refreshToken')
        if (!refreshToken) return

        const {data} = await axios.post('/auth/refresh-token', {refreshToken})
        const {accessToken} = data
        localStorage.setItem('accessToken', accessToken)
    }

    private async request(
        method: string
        , endpoint:string
        , body:Body | Body[] | null = null
    ) {

        try {
            // @ts-ignore
            const {data} = await axios[method](endpoint, body);
            return data

        } catch (e: any) {
            if (e.response?.data?.message === 'token expired') {
               await this.getNewToken()
            }

            toast.error('')
        }
    }

    async get(endpoint: string) {
        return await this.request('get', endpoint)
    }

    async post(endpoint: string, body:Body | Body[] | null ) {
        return await this.request('post', endpoint, body)
    }

    async put(endpoint: string, body:Body | Body[] | null ) {
        return await this.request('get', endpoint, body)
    }

}

export const api = new Api()

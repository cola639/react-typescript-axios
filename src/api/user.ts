import request from '../utils/request'

export interface ILoginRequest {
  email: string
  password: string
}

export interface ILoginResonse {
  sucessmsg: string
}

export interface IUserRequest {
  email: string
  password: string
}

export interface IUserResonse {
  avatar: string
}

export const login = (): Promise<ILoginResonse> =>
  request.get<ILoginResonse>('/users/login').then(({ data }) => {
    return data
  })

export const getUserData = (payload: IUserRequest): Promise<IUserResonse> =>
  request.post<IUserResonse>('/users/info', payload).then(({ data }) => {
    return data
  })

import request from '../utils/request'

export interface ILoginRequest {
  email: string
  password: string
}

export function login(loginRequest: ILoginRequest) {
  return request({
    url: '/users/info',
    method: 'get',
    data: loginRequest
  })
}

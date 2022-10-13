import { FC, useState, useEffect, useCallback, useMemo } from 'react'
import { ILoginRequest, login } from './api/user'

export interface IAppProps {}

const App: FC<IAppProps> = ({}) => {
  const [msg, setMsg] = useState<string>('HELLOW WORLD')

  const [loginRequest, setLoginRequest] = useState<ILoginRequest>({
    email: 'hello@altence.com',
    password: 'some-test-pass'
  })

  const getUserInfo = () => {
    login(loginRequest)
      .then(res => {
        console.log(res)
        setMsg('res')
      })
      .catch(err => {
        console.log(err)
      })
      .finally(() => {})
  }

  useCallback(() => {}, [])

  useMemo(() => {}, [])

  useEffect(() => {
    getUserInfo()
  }, [])

  const handleEvent = () => {}

  return <div className="App">{msg}</div>
}

export default App

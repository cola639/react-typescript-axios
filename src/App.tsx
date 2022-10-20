import { FC, useState, useEffect, useCallback, useMemo } from 'react'
import { ILoginRequest, login, getUserData } from './api/user'
import './app.css'

export interface IAppProps {}

const App: FC<IAppProps> = ({}) => {
  const loginRequest: ILoginRequest = {
    email: 'hello@altence.com',
    password: 'some-test-pass'
  }

  const [msg, setMsg] = useState('default msg: hellow world')
  const [avatar, setAvatar] = useState('')

  const loginUser = () => {
    login()
      .then(res => {
        setMsg(res.sucessmsg)
      })
      .catch(err => {
        console.log(err)
      })
      .finally(() => {})
  }

  const getUserInfo = () => {
    getUserData(loginRequest)
      .then(res => {
        setAvatar(res.avatar)
      })
      .catch(err => {
        console.log(err)
      })
      .finally(() => {})
  }

  useCallback(() => {}, [])

  useMemo(() => {}, [])

  useEffect(() => {
    // loginUser()
    // getUserInfo()
  }, [])

  return (
    <div className="App">
      <div className="app_btn">
        <button onClick={loginUser}>Click me to login</button>
      </div>

      <div className="app_btn">
        <button onClick={getUserInfo}>Click me to get avatar</button>
      </div>

      <div className="app_img">
        <img style={{ display: avatar ? 'block' : 'none' }} src={avatar} />
      </div>

      <p className="app_content">{msg}</p>
    </div>
  )
}

export default App

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../store/modules/user/actions'
import { useHistory } from 'react-router-dom';
import { Content } from './style';

const Login = () => {
  const router = useHistory()
  const dispatch = useDispatch()
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const loginRequest = () => {
    dispatch(login({ phone, password }, router))
  }

  return (
    <Content>
      <div className="top">
        <i className='iconfont back' onClick={() => router.go(-1)}>&#xe63a;</i>
        <span>Login with mobile</span>
      </div>
      <ul className="container">
        <li>
          <i className='iconfont phone'>&#xe609;</i>
          <input type="text" placeholder='请输入手机号' onChange={(e) => setPhone(e.target.value)}/>
        </li>
        <li>
          <i className='iconfont pwd'>&#xe60c;</i>
          <input type="password" placeholder='请输入密码' onChange={(e) => setPassword(e.target.value)}/>
        </li>
        <li><button onClick={() => loginRequest()}>登陆</button></li>
      </ul>
    </Content>
  )
}

export default React.memo(Login)
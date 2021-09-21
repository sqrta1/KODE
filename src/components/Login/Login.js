import { useRef } from 'react';
import { Redirect, useHistory } from 'react-router';

import Input from '../Input/Input';
import getOTP from '../../utils/mocks';

import './Login.css';

function Login() {
  const email = useRef('');
  const password = useRef('');
  const history = useHistory();
  const isLogged = localStorage.getItem('otpPass');

  const handleLogin = (e) => {
    e.preventDefault();

    const emailValue = email.current.value;
    const passwordValue = password.current.value;
    const otpPass = getOTP(emailValue, passwordValue);
    if (!otpPass) {
      alert('Логин и пароль не совпадают.');
      return;
    }
    console.log(otpPass);
    const userPrompt = prompt('Введите пароль из SMS-сообщения');
    if (userPrompt === otpPass) {
      // Симуляция кода введенного в prompt на сервер и возврат результата [успешный/неуспешный];
      localStorage.setItem('otpPass', otpPass);
      history.push('/main');
    } else {
      alert('Вы ввели неправильный пароль! Повторите еще раз.');
    }
  };

  return isLogged ? (
    <Redirect to="/main" />
  ) : (
    <div className="login">
      <div className="login-block">
        <form>
          <Input
            id="mail"
            refelem={email}
            type="mail"
            text="Email"
            placeHolder={'Введите ваш Email.'}
          />
          <Input
            id="password"
            refelem={password}
            type="password"
            text="Password"
            placeHolder={'Введите ваш пароль.'}
          />
          <button onClick={handleLogin} type="submit"></button>
        </form>
      </div>
    </div>
  );
}

export default Login;

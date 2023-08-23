import { useState } from 'react';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Отправьте запрос на аутентификацию
    const response = await fetch('http://localhost:3000/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      const { token } = await response.json();

      // Сохраните токен в локальном хранилище или куках
      localStorage.setItem('token', token);

      // Перенаправьте пользователя на защищенную страницу
      window.location.href = '/App';
    } else {
      const { message } = await response.json();
      alert(message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <br />
      <label>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <br />
      <button type="submit">Войти</button>
    </form>
  );
}

export default LoginForm;

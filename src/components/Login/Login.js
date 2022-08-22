
import './Login.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


export const Login = ({ setUser }) => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !password) {
      return;
    } else if (name && password === 'R') {
    setUser({ name: 'מנהל/ת', password: password });
    navigate('/adminDashboard');
  };
}
  return (
    <section className='section'>
      <form className='form' onSubmit={handleSubmit}>
        <h2>פאנל ניהול</h2>
        <div className='form-row'>
          <label htmlFor='name' className='form-label'>
            שם משתמש:
          </label>
          <input
            type='text'
            className='form-input'
            value={name}
            id='name'
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className='form-row'>
          <label htmlFor='email' className='form-label'>
           סיסמה:
          </label>
          <input
            type='password'
            className='form-input'
            id='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type='submit' className='btn btn-block myButton'>
          התחברות
        </button>
      </form>
    </section>
  );
};
export default Login;

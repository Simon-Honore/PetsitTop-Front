import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Header from '../../../components/Header/Header';

import Field from '../../../components/Field/Field';
import { changeFieldLogin } from '../../../store/reducers/user';
import { login } from '../../../store/selectors/user';
import './FormLogin.scss';

function FormLogin() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const email = useSelector((state) => state.user.email);
  const password = useSelector((state) => state.user.password);
  const isLogged = useSelector((state) => state.user.logged);

  function handleChangeField(value, name) {
    dispatch(changeFieldLogin({
      key: name,
      value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(login());
  }

  useEffect(() => {
    if (isLogged) {
      navigate('/');
    }
  });

  return (
    <section className="login">
      <h3 className="login__title">
        J&#39;ai déjà un compte, je me connecte
      </h3>

      <form className="login__form" onSubmit={handleSubmit}>
        <Field
          label="Adresse email*"
          type="email"
          name="email"
          placeholder="email"
          onChange={handleChangeField}
          form="login"
          value={email}
        />

        <Field
          label="Mot de passe*"
          type="password"
          name="password"
          placeholder="mot de passe"
          form="login"
          value={password}
          onChange={handleChangeField}
        />

        <button
          className="login__btn"
          type="submit"
        >
          JE ME CONNECTE
        </button>
      </form>
    </section>
  );
}

export default FormLogin;

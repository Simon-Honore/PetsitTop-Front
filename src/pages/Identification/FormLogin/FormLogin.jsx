import Field from '../../../components/Field/Field';
import './FormLogin.scss';

function FormLogin() {
  return (
    <section className="login">
      <h3 className="login__title">
        J&#39;ai déjà un compte, je me connecte
      </h3>

      <form className="login__form">
        <Field
          label="Adresse email*"
          type="email"
          name="email"
          placeholder="email"
        />

        <Field
          label="Mot de passe*"
          type="password"
          name="password"
          placeholder="mot de passe"
        />

        <button type="submit">JE ME CONNECTE</button>
      </form>
    </section>
  );
}

export default FormLogin;

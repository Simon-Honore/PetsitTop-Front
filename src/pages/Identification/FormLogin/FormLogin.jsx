import './FormLogin.scss';

function FormLogin() {
  return (
    <section className="login">
      <h3 className="login__title">
        J&#39;ai déjà un compte, je me connecte
      </h3>

      <form className="login__form">
        <div>
          <label>Adresse email</label>
          <input type="email" placeholder="email" />
        </div>

        <div>
          <label>Mot de passe</label>
          <input type="password" placeholder="mot de passe" />
        </div>

        <div>
          <button type="submit">JE ME CONNECTE</button>
        </div>
      </form>
    </section>
  );
}

export default FormLogin;

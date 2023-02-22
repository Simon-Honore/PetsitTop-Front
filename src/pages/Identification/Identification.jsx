import FormCreateAccount from './FormCreateAccount/FormCreateAccount';
import FormLogin from './FormLogin/FormLogin';
import './Identification.scss';

function Identification() {
  return (
    <main className="identification">
      <FormLogin />

      <div className="identification__separator">
        <hr />
        <p className="identification__separator__content">ou</p>
      </div>

      <FormCreateAccount />
    </main>
  );
}

export default Identification;

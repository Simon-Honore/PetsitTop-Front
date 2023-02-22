import FormConnect from './FormLogin/FormLogin';
import FormCreateAccount from './FormCreateAccount/FormCreateAccount';
import './Identification.scss';

function Identification() {
  return (
    <main className="identification">
      <FormConnect />

      <div className="identification__separator">
        <hr />
        <p className="identification__separator__content">ou</p>
      </div>

      <FormCreateAccount />
    </main>
  );
}

export default Identification;

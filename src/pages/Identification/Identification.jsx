import ChoiceSeparator from '../../components/ChoiceSeparator/ChoiceSeparator';
import FormCreateAccount from './FormCreateAccount/FormCreateAccount';
import FormLogin from './FormLogin/FormLogin';
import './Identification.scss';

function Identification() {
  return (
    <main className="identification">
      <FormLogin />

      <div className="identification__separator">
        <ChoiceSeparator />
      </div>

      <FormCreateAccount />
    </main>
  );
}

export default Identification;

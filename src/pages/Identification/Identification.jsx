import ChoiceSeparator from '../../components/ChoiceSeparator/ChoiceSeparator';
import FormCreateAccount from './FormCreateAccount/FormCreateAccount';
import FormLogin from './FormLogin/FormLogin';
import './Identification.scss';

function Identification() {
  return (
    <main className="identification">
      <FormLogin />

      <ChoiceSeparator />

      <FormCreateAccount />
    </main>
  );
}

export default Identification;

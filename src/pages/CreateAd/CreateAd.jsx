import FormAd from '../../components/FormAd/FormAd';
import './CreateAd.scss';

function CreateAd() {
  return (
    <main className="createAd">
      <h2 className="createAd__title">Créer une annonce</h2>
      <p className="createAd__description">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Quisquam, molestias eligendi! Cumque reprehenderit neque.
      </p>
      <FormAd />
    </main>
  );
}

export default CreateAd;

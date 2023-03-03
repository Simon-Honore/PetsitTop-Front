import { useDispatch } from 'react-redux';
import { createAd } from '../../api/ads';
import FormAd from '../../components/FormAd/FormAd';
import './CreateAd.scss';

function CreateAd() {
  const dispatch = useDispatch();

  function handleSubmitFormCreateAd() {
    dispatch(createAd());
  }

  return (
    <main className="createAd">
      <h2 className="createAd__title">Créer une annonce</h2>
      <p className="createAd__description">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Quisquam, molestias eligendi! Cumque reprehenderit neque.
      </p>
      <FormAd onSubmit={handleSubmitFormCreateAd} />
    </main>
  );
}

export default CreateAd;

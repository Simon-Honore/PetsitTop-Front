import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createAd } from '../../api/ads';
import FormAd from '../../components/FormAd/FormAd';
import './CreateAd.scss';

function CreateAd() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    title,
    content,
    city,
    postal_code,
  } = useSelector((state) => state.ads);

  function handleSubmitFormCreateAd() {
    dispatch(createAd());
    navigate('/mes-annonces');
  }

  return (
    <main className="createAd">
      <h2 className="createAd__title">Créer une annonce</h2>
      <p className="createAd__description">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Quisquam, molestias eligendi! Cumque reprehenderit neque.
      </p>
      <FormAd
        title={title}
        content={content}
        city={city}
        postal_code={postal_code}
        btnContent="Poster mon annonce"
        onSubmit={handleSubmitFormCreateAd}
      />
    </main>
  );
}

export default CreateAd;

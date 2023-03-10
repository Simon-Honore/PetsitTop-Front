import oiseau from '../../assets/oiseau.svg';
import rongeur from '../../assets/rongeur.svg';
import chat from '../../assets/chat.svg';
import chien from '../../assets/chien.svg';
import poisson from '../../assets/poisson.svg';
import reptile from '../../assets/reptile.svg';
import lapin from '../../assets/lapin.svg';
import './PetIcon.scss';

function PetIcon({ pet }) {
  return (
    <div className="peticon">
      <img
        className="peticon__img"
        src={`/src/assets/${pet}.svg`}
        alt={`Icône ${pet}`}
      />
      <p className="peticon__title">
        {pet}
      </p>
    </div>
  );
}

export default PetIcon;

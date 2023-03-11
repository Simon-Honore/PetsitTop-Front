import oiseau from '../../images/oiseau.svg';
import rongeur from '../../images/rongeur.svg';
import chat from '../../images/chat.svg';
import chien from '../../images/chien.svg';
import poisson from '../../images/poisson.svg';
import reptile from '../../images/reptile.svg';
import lapin from '../../images/lapin.svg';
import autre from '../../images/autre.svg';
import './PetIcon.scss';

function PetIcon({ pet }) {
  let petIcon;
  switch (pet) {
    case 'oiseau':
      petIcon = oiseau;
      break;
    case 'rongeur':
      petIcon = rongeur;
      break;
    case 'chat':
      petIcon = chat;
      break;
    case 'chien':
      petIcon = chien;
      break;
    case 'poisson':
      petIcon = poisson;
      break;
    case 'reptile':
      petIcon = reptile;
      break;
    case 'lapin':
      petIcon = lapin;
      break;
    case 'autre':
      petIcon = autre;
    default:
      break;
  }
  return (
    <div className="peticon">
      <img
        className="peticon__img"
        src={petIcon}
        alt={`Icône ${pet}`}
      />
      <p className="peticon__title">{pet}</p>
    </div>
  );
}

export default PetIcon;

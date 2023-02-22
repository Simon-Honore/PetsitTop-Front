import { FiPlus } from 'react-icons/fi';
import { FaUserCircle } from 'react-icons/fa';
import { BsPencilSquare } from 'react-icons/bs';
import { FaTrashAlt } from 'react-icons/fa';
import Header from '../../components/Header/Header';
import './MyProfile.scss';

function MyProfile() {
  return (
    <div className="MyProfile">
      {/* <Header /> */}
      <div className='profile'>
        <form className='profile__settings'>
            <h1 className='profile__settings__title'>Mon profil</h1>

            <div className='profile__settings__input'>
            <label htmlFor="first_name">Prénom : *</label>
            <input type="text" name="first_name" id="first_name" />
            </div>

            <div className='profile__settings__input'>
            <label htmlFor="last_name">Nom * :</label>
            <input type="text" name="last_name" id="last_name" />
            </div>

            <div className='profile__settings__input'>
            <label htmlFor="email">Adresse email : *</label>
            <input type="email" name="email" id="email" />
            </div>

            <div className='profile__settings__input'>
            <label htmlFor="postal_code">Code postal : *</label>
            <input type="text" name="postal_code" id="postal_code" />
            </div>

            <div className='profile__settings__input'>
            <label htmlFor="city">Ville : *</label>
            <input type="text" name="city" id="city" />
            </div>

            <div className='profile__settings__input'>
            <label htmlFor="presentation">Résumé : </label>
            <textarea type="" name="presentation" id="presentation" rows="5" placeholder="# Présentez vous en quelques mots" />
            </div>

            <fieldset className='profile__settings__input' >
            <legend>Type(s) de profil(s)</legend>
            <div className='profile__settings__input__checkbox'>
                <input type="checkbox" name="" id="petOwner" />
                <label htmlFor="petOwner">
                Petowner : J&#39;ai des animaux à faire garder
                </label>
            </div>
            <p>et / ou</p>
            <div className='profile__settings__input__checkbox'>
                <input type="checkbox" name="" id="petSitter" />
                <label htmlFor="petSitter">
                Petsitter : je souhaite garder des animaux
                </label>
            </div>

            </fieldset>
            
            <div className='profile__settings__input'>
                <input type="submit" value="Enregistrer" />
            </div>
        </form>
      </div>

      <hr />

      <div className='profile__pets'>
        <div className='profile__pets__header'>
          <h1 className='profile__pets__header__title'>Mes animaux</h1>
          <button type='button'>
            <FiPlus />
            Ajouter
          </button>
        </div>

        <div className='profile__pets__item'>
            <div>
                <div>
                <FaUserCircle size="2rem" className=""/>
                </div>
                <div>
                    <h1>Médor</h1>
                    <h2>Chien</h2>
                </div>
                <div>
                    <BsPencilSquare />
                    <FaTrashAlt/>
                </div>
            </div>
            <div>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi dicta eveniet quos, optio veritatis officia quam tempore pariatur magnam. Laudantium sequi quasi eum laboriosam mollitia, eos amet esse dolores accusamus.
                </p>
            </div>
        </div>

        <hr />

        <div className='profile__ads'>
            <h1>Mes animaux</h1>
            <button type='button'>
                <FiPlus />
                Ajouter une annonce
            </button>
            <button type='button'>
                Afficher/Gérer mes annonces
            </button>
        </div>
      </div>
    </div>
  );
}

export default MyProfile;

import { bool } from 'prop-types';
import { BsFillXCircleFill } from 'react-icons/bs';
import { FaCheckCircle } from 'react-icons/fa';
import PetIcon from '../../../components/PetIcon/PetIcon';
import './PetsittingDetails.scss';
import '../PetCard/PetCard.scss';

function PetsittingDetails({ isAvailable, details, pet_types }) {
  return (
    <section className="petsitting">
      <h1 className="petsitting__title">J'accepte de garder</h1>
      {isAvailable
        ? (
          <div>
            <div className="petsitting__status">
              <FaCheckCircle
                color="#36c2af"
                size={25}
                className="petsitting__status__icon"
              />
              <p>Je suis disponible actuellement.</p>
            </div>
            <div className="petsitting__details">
              <h1>Disponibilités</h1>
              <p>{details}</p>
            </div>
            <h1>Je peux garder : </h1>
            <div className="petsitting__details__pets">
              {pet_types && pet_types.map((pet) => (
                <PetIcon
                  key={pet.id}
                  pet={pet.name}
                  className="petsitting__details__pets__text peticon__title--black"
                />
              ))}
            </div>
          </div>

        )
        : (
          <div className="petsitting__status">
            <BsFillXCircleFill
              color="#c27453"
              size={25}
              className="petsitting__status__icon"
            />
            <p>Je ne suis pas disponible actuellement.</p>
          </div>
        )}
    </section>
  );
}

export default PetsittingDetails;

// PetsittingDetails.propTypes = {
//   isAvailable: bool.isRequired,
// };

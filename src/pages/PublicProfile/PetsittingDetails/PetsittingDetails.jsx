import { bool } from 'prop-types';
import { BsFillXCircleFill } from 'react-icons/bs';
import { FaCheckCircle } from 'react-icons/fa';
import './PetsittingDetails.scss';

function PetsittingDetails({ isAvailable }) {
  return (
    <section className="petsitting">
      <h1 className="petsitting__title">J'accepte de garder</h1>
      {isAvailable
        ? (
          <div>
            <div className="petsitting__status">
              <FaCheckCircle
                className="petsitting__status__icon"
              />
              <p>Je suis disponible actuellement.</p>
            </div>
            <div>
              <h1>Disponibilités</h1>
              <p>Description</p>
            </div>
            <div>
              <div><p>Chien</p></div>
              <div><p>Poissons</p></div>
            </div>
          </div>

        )
        : (
          <div className="petsitting__status">
            <BsFillXCircleFill />
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

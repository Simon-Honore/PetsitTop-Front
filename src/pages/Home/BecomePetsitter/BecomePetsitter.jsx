import { Link } from 'react-router-dom';

// import local
import './BecomePetsitter.scss';

function BecomePetsitter() {
  return (
    <section className="become-petsitter">
      <h3 className="become-petsitter__title">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus, obcaecati.
      </h3>

      <button type="button" className="become-petsitter__btn">
        <Link
          to="/indentification"
        >
          Devener Petsitter
        </Link>
      </button>
    </section>
  );
}

export default BecomePetsitter;

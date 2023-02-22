import { useState } from 'react';
import './FormCreateAccount.scss';

function FormCreateAccount() {
  const [continueCreating, setContinueCreating] = useState(false);

  const handleClickContinue = () => {
    setContinueCreating(true);
  };

  return (
    <section className="test">
      <h3>Je créer mon compte</h3>
      <form>
        <div>
          <label>Adresse email</label>
          <input type="email" placeholder="email" />
        </div>

        {!continueCreating
          ? (
            <div>
              <button type="button" onClick={handleClickContinue}>CONTINUER</button>
              {/* on click, see the rest of the form  */}
            </div>
          )
          : (

            <div>
              <div>
                <label>Mot de passe</label>
                <input type="password" placeholder="mot de passe" />
              </div>

              <div>
                <label>Confirmation du mot de passe</label>
                <input type="password" placeholder="mot de passe" />
              </div>

              <div>
                <div>
                  <label>Prénom</label>
                  <input type="text" placeholder="prénom" />
                </div>

                <div>
                  <label>Nom</label>
                  <input type="text" placeholder="nom" />
                </div>
              </div>

              <div>
                <div>
                  <label>Code postal</label>
                  <input type="text" placeholder="code postal" />
                </div>

                <div>
                  <label>Ville</label>
                  <input type="text" placeholder="ville" />
                </div>
              </div>

              <fieldset>
                <legend>Type(s) de profil(s)</legend>
                <div>
                  <input type="checkbox" name="" id="petOwner" />
                  <label htmlFor="petOwner">
                    Petowner : J&#39;ai des animaux à faire garder
                  </label>
                </div>

                <div>
                  <p>et / ou</p>
                  <input type="checkbox" name="" id="petSitter" />
                  <label htmlFor="petSitter">
                    Petsitter : je souhaite garder des animaux
                  </label>
                </div>
              </fieldset>

              <div>
                <input type="checkbox" name="" id="rgpd" />
                <label htmlFor="rgpd">
                  mentions RGPD
                </label>
              </div>

              <div>
                <input type="checkbox" name="" id="cgu" />
                <label htmlFor="cgu">
                  j&#39;accepte les CGU
                </label>
              </div>

              <div>
                <button type="submit">JE M&#39;INSCRIS</button>
              </div>
            </div>
          )}
      </form>
    </section>
  );
}

export default FormCreateAccount;

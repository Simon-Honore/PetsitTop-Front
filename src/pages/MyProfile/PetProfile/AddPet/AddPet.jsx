import './AddPet.scss';

function AddPet() {
    return (
        <div className="conditionnal profile__pets__add">
              <h2>J'ajoute mon animal</h2>

              <form>
                <div className="profile__pets__add--form-fields">
                  <div className="field field--has-content">
                    <label htmlFor="" className="field__label">Nom de mon animal : *</label>
                    <input type="text" name="" id="" className="field__input" placeholder="Nom de l'animal"/>
                  </div>

                  <div className="field field--has-content">
                    <label htmlFor="" className="field__label">Type d'animal : *</label>
                    <select name="" id="" className="field__input">
                      <option value="chien">Chien</option>
                      <option value="chat">Chat</option>
                      <option value="NAC">NAC</option>
                      <option value="poisson">Poisson</option>
                      <option value="reptile">Reptile</option>
                      <option value="oiseau">Oiseau</option>
                    </select>
                  </div>

                  <div className="field field--has-content">
                    <label htmlFor="" className="field__label">Présentation de mon animal : *</label>
                    <textarea name="" id="" cols="30" rows="10" className="fieldArea__input" placeholder="# Présentation de l'animal"/>
                  </div>
                </div>

                <div className="profile__pets__add--btns">
                  <button type="submit" className="profile__pets__add--btn">Valider</button>
                  <button type="button" className="profile__pets__add--btn-cancel">Annuler</button>
                </div>
              </form>
            </div>
    )
};

export default AddPet;
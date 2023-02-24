function UpdatePet() {
    return(
        <div className="conditionnal">
              <h1>Mettre à jour mon animal</h1>

              <form>
                <div>
                  <label htmlFor="">Nom de mon animal : *</label>
                  <input type="text" name="" id="" />
                </div>

                <div>
                  <label htmlFor="">Type d'animal : *</label>
                  <select name="" id="">
                    <option value="chien">Chien</option>
                    <option value="chat">Chat</option>
                    <option value="NAC">NAC</option>
                    <option value="poisson">Poisson</option>
                    <option value="reptile">Reptile</option>
                    <option value="oiseau">Oiseau</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="">Présentation de mon animal : *</label>
                  <textarea name="" id="" cols="30" rows="10" />
                </div>

                <button type="submit">Mettre à jour</button>
              </form>
              <button type="button">Annuler</button>
            </div>
    )
};

export default UpdatePet;
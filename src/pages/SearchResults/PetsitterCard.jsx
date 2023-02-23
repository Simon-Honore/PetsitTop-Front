
function PetsitterCard({nom, prenom, ville, codePostal, description}) {
    return (
    <div >
      <div>
        <h1>
          {prenom}
          {nom}
        </h1>
        <p>
          {ville}
          {codePostal}
        </p>
      </div>
      <p>{description}</p>
    </div>
    )
}

export default PetsitterCard;
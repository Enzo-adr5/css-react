import react from "react";
import rap from "../assets/ganesh.avif";

function MusicCards() {
  return (
    <figure>
      <img src={rap} alt="Image de rap" />
      <figcaption>
        <h2>Titre de la musique</h2>
        <h3>Nom de l'artiste</h3>
      </figcaption>
    </figure>
  );
}

export default MusicCards;

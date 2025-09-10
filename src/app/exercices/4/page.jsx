"use client";

export default function Exo4() {
  const handleChange = (event) => {
    const value = event.currentTarget.value;

    if (value.length > 10) {
      alert("limite de 10 caractères dépassée");
    }
  };

  return (
    <>
      <div id="notice">
        <p>
          Modifie ce code pour que lorsque tu rajoutes une lettre dans l'input,
          la longueur de l'input est vérifiée.
        </p>
        <p>
          Si l'input dépasse les 10 caractères affichés, une alerte qui indique
          que la taille maximum est dépassée apparait.
        </p>
      </div>
      <section>
        <h1>Character Limit</h1>
        <input placeholder="Enter some text" onChange={handleChange} />
      </section>
    </>
  );
}

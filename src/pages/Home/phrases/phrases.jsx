import { useState, useEffect } from "react";
import "./phrasesStyles.css";

const Phrases = () => {
  const [index, setIndex] = useState(null);

  const phrases = [
    {
      author: "Rabindranath Tagore",
      phrase: "No puedes cruzar el océano simplemente mirando el agua.",
    },
    {
      author: "Winston Churchill",
      phrase: "El éxito es ir de fracaso en fracaso sin perder el entusiasmo.",
    },
    {
      author: "Mark Caine",
      phrase:
        "El primer paso hacia el éxito es cuando te niegas a ser un prisionero del entorno en el que te encuentras.",
    },
    {
      phrase: "El único modo de hacer un gran trabajo es amar lo que haces.",
      author: "Steve Jobs",
    },
    {
      phrase: "La vida es 10% lo que nos sucede y 90% cómo reaccionamos a ello.",
      author: "Charles R. Swindoll",
    },
    {
      phrase:
        "El éxito no es definitivo, el fracaso no es fatal: lo que cuenta es el valor de seguir adelante.",
      author: "Winston Churchill",
    },
    {
      phrase: "La única forma de hacer un gran trabajo es amar lo que haces.",
      author: "Steve Jobs",
    },
    {
      phrase: "Cree que puedes y ya estás a medio camino.",
      author: "Theodore Roosevelt",
    },
    {
      phrase: "La inspiración existe, pero tiene que encontrarte trabajando.",
      author: "Pablo Picasso",
    },
    {
      phrase: "El futuro pertenece a quienes creen en la belleza de sus sueños.",
      author: "Eleanor Roosevelt",
    },
    {
      frase: "La única manera de hacer un gran trabajo es amar lo que haces.",
      author: "Steve Jobs",
    },
    {
      phrase: "Si esperas condiciones perfectas nunca harás nada.",
      author: "Ecclesiastes",
    },
    {
      phrase:
        "El único lugar donde el éxito viene antes que el trabajo es en el diccionario.",
      author: "Vidal Sassoon",
    },
    {
      phrase:
        "Nuestro mayor miedo no es que seamos inadecuados. Nuestro mayor miedo es que somos poderosos más allá de toda medida.",
      author: "Marianne Williamson",
    },
    {
      phrase: "El éxito es ir de fracaso en fracaso sin perder entusiasmo.",
      author: "Winston Churchill",
    },
    {
      phrase: "No hay atajos para cualquier lugar que valga la pena.",
      author: "Beverly Sills",
    },
    {
      phrase:
        "Haz hoy lo que otros no quieren, haz mañana lo que otros no pueden.",
      author: "Jerry Rice",
    },
    {
      phrase:
        "Nuestra mayor debilidad radica en renunciar. La forma más segura de tener éxito es intentarlo siempre una vez más.",
      author: "Thomas Edison",
    },
    {
      phrase: "La única manera de hacer un gran trabajo es amar lo que haces.",
      author: "Steve Jobs",
    },
    {
      phrase: "La mejor forma de predecir el futuro es crearlo.",
      author: "Peter Drucker",
    },
    {
      phrase:
        "Tu tiempo es limitado, no lo malgastes viviendo la vida de alguien más.",
      author: "Steve Jobs",
    },
    {
      phrase:
        "El único lugar donde el éxito viene antes que el trabajo es en el diccionario.",
      author: "Vidal Sassoon",
    },
    {
      phrase:
        "No te preocupes por los fracasos, preocúpate por las oportunidades que pierdes cuando ni siquiera lo intentas.",
      author: "Jack Canfield",
    },
  ];

  const generateIndex = () => {
    const randomIndex = Math.floor(Math.random() * phrases.length);
    setIndex(randomIndex);
  };

  useEffect(() => {
    generateIndex();

    const intervalId = setInterval(() => {
      generateIndex();
    }, 24 * 60 * 60 * 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <div className="phrasesContainer">
        {index !== null && (
          <div className="containerPA">
            <h1 className="phrase">"{phrases[index].phrase}"</h1>
            <h4 className="author">- {phrases[index].author}</h4>
          </div>
        )}
      </div>
    </>
  );
};

export default Phrases;

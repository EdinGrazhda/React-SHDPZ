import { useState } from "react"; //Importimi i Hook
//useState() eshte nje Hook, te cilat perdoren per te thirrur vlerat dhe per te mundesuar ndryshimin e kesaj vlere.
const About = () => {
  //let name = 'Niti'; //nuk mundet me ndryshue vlera

  const [name1, setName1] = useState("Shkolla Digjitale");
  const [name, setName] = useState("Arianit"); //useState hook used for reactive values
  const [age, setAge] = useState(27); //age emri i variables setAge emri i hook

  const click = () => {
    //name = 'Ari';
    setName("Ari"); //Menyra se si e ndryshojme vleren e Hook.
    setAge(23);
    setName1("Shkolla Digjitale Prizren");
  };

  return (
    <div className="about">
      <h2>About</h2>
      {/* Menyra se si e thirrim nje Hook ne kete rast */}
      <h1>{name1}</h1>
      <p>
        {name} is {age} years old
      </p>

      {/* <p>{ name1 }</p> */}
      <button onClick={click}>Kliko</button>
      {/* <p>{ name }</p> */}
    </div>
  );
};

export default About;

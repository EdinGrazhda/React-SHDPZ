//Krijimi i komponentes duke e perdorur shkurtesen 'SFC'.
const Home = () => {
  //Krijmi i nje funksioni pa parametra 'click'
  const click = () => {
    console.log("Hello");
  };
  //Krijmi i nje funksioni me parametra 'click2'
  const click2 = (name, e) => {
    console.log("Hello " + name, e);
  };
  return (
    <div className="home">
      <h2>HomePage</h2>
      {/* Meyra se si i thirrrim funksionet tek elementet perkatse ne kete rast te butoni */}
      <button onClick={click}>Kliko</button>
      {/* Vlera e parametrit i caktohet kur e thirrim funksionin */}
      <button onClick={(e) => click2("Prizren", e.target)}>Kliko ketu</button>
    </div>
  );
};

export default Home;

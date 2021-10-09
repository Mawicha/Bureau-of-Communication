import halloween from './halloween.jpg';
import React, {useState, useRef} from 'react'; 
import { useScreenshot } from 'use-react-screenshot';
import './App.css';


function App() {
  
  const[state, setState] = useState({
    lugar: "",
    direccion:"",
    fecha:"",
    hora:"",
    telefono:"",
    posdata:"",
    comida:"",
    bebida:"",
    de:"",
    para:"",
  });

  const [invitacion, setInvitacion] = useState(state);
  const [defaultForm, setDefaultFomr] = useState(state);
  const [read, setRead] = useState(false);
  const [status, setStatus] = useState("initial");
  const [screenshot, setScreenshot] = useState(false);
  const print = useRef();

  function handleSubmit (event) {
    event.preventDefault();
    if(Vacio()) {
      alert("Faltan campos por llenar!!");
    }
    else{
      setInvitacion(state);
      setRead(true);
      setStatus("complete");
      setScreenshot(false);
    }
  }


  function handleChange(event) {
    const value = event.target.value;
    setState({
      ...state,
      [event.target.name]:value,
    });
  }

  function handleReset(event) {
    event.preventDefault();
    setInvitacion(defaultForm);
    setState(defaultForm);
    setRead(false);
    setStatus("initial");
    setScreenshot(false);
  }


  function random(arr) {
    return arr[Math.floor(Math.random()*arr.length)];
  }

  const lugarRand = ["Casa de Terror", "Cementerio", "Boliche", "Cine", "Alberca"];
  const direccionRand = ["Ruta 65", "Calle Flores", "Av. Principal"];
  const fechaRand = ["31/10/2021", "30/10/2021", "01/11/2021", "29/10/2021", "02/11/2021"];
  const horaRand = ["22:00", "20:00", "21:30", "23:00", "19:00"];
  const telRand = ["7711234355", "7753457688", "7716663333", "7714879903", "7755090201"];
  const posdataRand = ["Te esperamos!", "No faltes!!", "Disfraz Obligatorio", "No menores de edad", "Ven con la mejor actitud!"];
  const comidaRand = ["tacos", "hamburguesas", "guajolotes", "pizza", "molito"];
  const bebidaRand = ["refresco", "cerveza", "jugo","Aguas frescas", "tequila"];
  const deRand = ["Dracula", "Casper", "La llorona", "Chucky", "El hombre lobo"];
  const paraRand = ["Batman", "Spider-man", "El chupacabras", "La novia del Chucky", "La momia"];

  function handleRandom(event) {
    setInvitacion(defaultForm);
    setRead(false);
    setState({
      lugar: random(lugarRand),
      direccion: random(direccionRand),
      fecha: random(fechaRand),
      hora: random(horaRand),
      telefono: random(telRand),
      posdata: random(posdataRand),
      comida: random(comidaRand),
      bebida: random(bebidaRand),
      de: random(deRand),
      para: random(paraRand),
    });
    setStatus("initial");
  }

  function Vacio() {
    const arr = Object.keys(state).map((propiedad) => state[propiedad]);
    for (let i = 0; i < arr.length; i++)
    {
      if(arr[i] === "") {
        return true;
      }
    }
    return false;
  }

  return (
    <div className="App">
     <form onSubmit={handleSubmit}>
      <div className="formulario">
        <h1>Halloween Party Invitation</h1>
        <h2>Fill in the blanks to create your Halloween Party invitation</h2>
        <label>Nombre del salon o lugar : 
          <input 
            type="text" 
            name="lugar" 
            value={state.lugar} 
            onChange={handleChange}
            readOnly={read}>
          </input>
        </label>
        <label>Direccion del lugar : 
          <input 
            type="text" 
            name="direccion" 
            value={state.direccion} 
            onChange={handleChange} 
            readOnly={read}>
          </input>
        </label>
        <label>Fecha del evento : 
          <input 
            type="text" 
            name="fecha" 
            value={state.fecha} 
            onChange={handleChange} 
            readOnly={read}>
          </input>
        </label>
        <label>hora: 
          <input type="time" 
            name="hora" 
            value={state.hora} 
            onChange={handleChange} 
            readOnly={read}>
          </input>
        </label>
        <label>Telefono : 
          <input type="tel" 
            name="telefono" 
            value={state.telefono} 
            onChange={handleChange} 
            readOnly={read}>
          </input>
        </label>
        <label> Posdata : 
          <input type="text" 
            name="posdata" 
            value={state.posdata} 
            onChange={handleChange} 
            readOnly={read}>
          </input>
        </label>
        <label>Comida que se servirá en el evento : 
          <input type="text" 
            name="comida" 
            value={state.comida} 
            onChange={handleChange} 
            readOnly={read}>
          </input>
        </label>
        <label>Bebidas que habrá en el evento : 
          <input type="text" 
            name="bebida" 
            value={state.bebida} 
            onChange={handleChange} 
            readOnly={read}>
          </input>
        </label>
        <label>Remitente : 
          <input type="text" 
            name="de" 
            value={state.de} 
            onChange={handleChange} 
            readOnly={read}>
          </input>
        </label>
        <label>Destinatario : 
          <input type="text" 
            name="para" 
            value={state.para} 
            onChange={handleChange} 
            readOnly={read}>
          </input>
        </label>  
      </div>    
      <div className="buttons">
        <button type="submit" onClick={handleSubmit}>Generate</button>
        <button type="reset" onClick={handleReset}>Reset</button>
        <button type="button" onClick={handleRandom}>Randomize</button>
      </div>
    </form>

      {status === "complete" && <React.Fragment>
        <p></p>
        <img src={halloween} className="App-halloween" alt="halloween" />
        <div className="titulo"><h1>HALLOWEEN</h1></div>
        <div className="texto1"><h3>Esta invitacion podria sorprenderte y asustarte...</h3></div>
        <div className="texto2"><h3>Es el evento anual, al que no debes faltar...</h3></div>
        <div className="lugar"><label>Te esperamos en : {invitacion.lugar}</label></div>
        <div className="direccion"><label>Direccion : {invitacion.direccion}</label></div>
        <div className="fecha"><label>El dia : {invitacion.fecha}</label></div>
        <div className="hora"><label>a las : {invitacion.hora}</label></div>
        <div className="texto3"><h4>Sera una noche escalofriante!!!</h4></div>
        <div className="telefono"><label>Para cualquier duda marcar al tel. : {invitacion.telefono}</label></div>
        <div className="posdata"><label> P.S. : {invitacion.posdata}</label></div>
        <div className="comida"><label>Para alimentar a las almas en la fiesta habra : {invitacion.comida}</label></div>
        <div className="bebida"><label>Y para aquellos que les gusta tomar habra : {invitacion.bebida}</label></div>
        <div className="de"><label>De : {invitacion.de}</label></div>
        <div className="para"><label>Para : {invitacion.para}</label></div>   

        </React.Fragment>
      }
    </div>
  );
}

export default App;

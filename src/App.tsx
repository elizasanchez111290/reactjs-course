import { useState,useEffect} from 'react'
import './App.css'
import Button from "./component/Button";
import Saying from "./component/Saying";

function App() {
  
    const [likeCount, setLikeCount] = useState(0);
    const [likeDisCount, setLikeDisCount] = useState(0);
    const [showModal, setShowModal] = useState(false);
    const [buttonText, setButtonText] = useState("Te gusta");
    const [count, setCount] = useState(0);
  
    const handleButtonClick = () => {
      setShowModal(true);
      
    };
  
    const handleLike = () => {
      setLikeCount(likeCount + 1);
      setButtonText("Me gusta");
      setShowModal(false);
    };

    const handleDislike = () => {
      setLikeDisCount(likeDisCount + 1);
      setButtonText("No me gusta");
      setShowModal(false);
    };

    useEffect(()=>{
      console.log ('Hola!');
      return ()=>{
        console.log ("Adios");
      };
    },[]);
  
    useEffect(() => {
      console.log(`El valor del contador es: ${count}`);
  }, [count]);

  return (
      <>
      <div className='app'>
      
      <header className='header'>
      <h1 className='h1-app'>¡Bienvenido a mi sitio!</h1>
      <button onClick={handleButtonClick}>{buttonText}</button>
      </header>
        
        {showModal && (
          <div className='show-model'>
            <div className='show-model-content'>
              <h2 className='show-model-text'>¿Te gusta?</h2>
              <div className='show-model-button'>
              <button className='show-model-buttons' onClick={handleLike}>Me gusta</button>
              <button className='show-model-buttons' onClick={handleDislike}>No me gusta</button>
              <button className='show-model-buttons'onClick={() => setShowModal(false)}>Cerrar</button>
              </div>
            </div>
        </div>
        )}

      <nav className='nav'>
      <ul className="nav-ul">
        <li>
          <Button text="Button 1" onClick={()=>alert("Mensaje del Button 1")}/>
        </li>
        <li>
          <Button text="Button 2" onClick={()=>alert("Mensaje del Button 2")}/>
        </li>
        <li>
          <Button text="Button 3" disabled onClick={()=>alert("Mensaje del Button 3")}/> 
        </li>
        <li>
          <Button text="Button 4" onClick={()=>alert("Mensaje del Button 4")}/> 
        </li>
        <li>
          <Button text={String(count)} onClick={() => setCount(count + 1)}/> 
        </li>
      </ul>
      </nav>

      <aside className='aside'>
        <blockquote>
          <Saying text='"A mal tiempo, buena cara."'/>
        </blockquote>
        <blockquote>
          <Saying text='"El que mucho abarca, poco aprieta."'/>
        </blockquote>
        <blockquote>
          <Saying text='"Cae más rápido un mentiroso que un cojo."'/>
        </blockquote>
      </aside>

      <div className='resultado'>
      <h2>Resultados</h2>
      {likeCount > 0 && <p>Me gusta: {likeCount}</p>}
      {likeDisCount > 0 && <p>No me gusta: {likeDisCount}</p>}
      </div>

      
      
      <footer className='footer'>
        <p><strong>Creado por: Elizandra</strong></p>
      </footer> 
      </div>
      
      </> 
    );
  };

export default App


import './App.css';
import Profile from './Profile/profile ';
import image from './Profile/Amina img.jpg'
import Photo from './Profile/photo';
function App() {
  const fullName="Amina Mkhinini"
  const bio="I am a food engineering"
  const profession="I am a futre full-stack web develper"
  const alertMe=() => { alert ('Hello I am Amina')
} 
   const stylephoto ={borderRadius:"50%"} 
  
  return (
    <div className="App" >
     <Profile fullName={fullName} bio={bio} profession={profession} alertMe={alertMe}/>
     <Photo> <img src={image}  alt="Amina img"className="photo" style={stylephoto}/></Photo>
    </div>
  );
}

export default App;

import { useState,useEffect ,FormEvent} from 'react';
import * as  C from './App.styles';
import * as Fotos from './services/fotos';
import { Photo } from './types/foto';
import { PhotoItem } from './components/fotoitem';




const App = () => {

const [loading,setloading] = useState(false);
const [photos,setphotos] = useState<Photo[]>([]);

useEffect(() =>{
  const getfotos  =async () => {
    setloading(true);
    setphotos(await Fotos.getAll());
    setloading(false);
  }
  getfotos();
},[]);


const handleformSubmit = (e:FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  const formdata = new FormData(e.currentTarget);
  const file = formdata.get('image') as File;
  const name = formdata.get('name') as String;
  if (file && file.size >0){
    let result = Fotos.insert(file,name);
    if(result instanceof Error){
      alert("Erro");
    }
  }
  
}

  return(

    <C.Container>
      <C.Area>
        <C.Header>
            buildbox
         </C.Header>
        
      
      </C.Area>
    
      <C.Background>
      <C.Area1>
      <C.UploadForm method="POST" onSubmit={handleformSubmit}>

      <input type="text" name='name' placeholder='Seu nome' required/>
      <br />
      <input type="file" name="image" required/>
      <br />
      <input type="submit" name="Enviar"/>
      </C.UploadForm>
      </C.Area1>
      <C.Area> </C.Area>
        {loading &&
          <C.ScreenWarning>
            <div>👋</div>
            <div>Carregando...</div>
          </C.ScreenWarning>
        }  
        {!loading && photos.length > 0 &&

          <C.Fotolist>
            {photos.map((item,index)=>(
              <PhotoItem key={index} url = {item.url} name={item.name} message={item.message}/>
            ))}
          </C.Fotolist>
        
        }      
        {!loading && photos.length === 0 &&
            <C.ScreenWarning>
                <div>😢</div>
            <div>Sem fotos</div>
            </C.ScreenWarning>
        }
         </C.Background>
    </C.Container>

  
  );


}
export default App;
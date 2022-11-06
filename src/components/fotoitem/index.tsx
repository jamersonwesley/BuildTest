import * as C from './style';

type Props ={
    name:string;
    url:string;
    message:string;
}

export const PhotoItem = ({url,name,message}:Props) => {
    return(
        <C.Area>
        <C.Container>
             <img src={url} alt={name}/>
            <br/>
            {name}
    
        </C.Container>
        </C.Area>

    )
}
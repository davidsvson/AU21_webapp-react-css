import './gallery.css';
import cat1 from '../img/cat1.jpeg';
import cat2 from '../img/cat2.jpeg';
import cat3 from '../img/cat3.jpeg';
import cat4 from '../img/cat4.jpeg';
import cat5 from '../img/cat5.jpeg';
import { useState } from 'react';
import Bordered from './Bordered';


const Gallery = () => {
    const [columns , setColumns] = useState(2);

    let galleryClass = 'images';

    switch(columns) {
        case 1 :
            galleryClass += ' one-column';
            break;
        case 3 : 
            galleryClass += ' three-column';
            break;
        default:
            galleryClass += ' two-column';
    }


    return (
        <div className='gallery'>

            <Bordered>
                <div className='buttons'>
                    <button onClick={() => setColumns(1)}>One column</button>
                    <button onClick={() => setColumns(2)}>Two columns</button>
                    <button onClick={() => setColumns(3)}>Three columns</button>
                </div>
            </Bordered>
           
      
            <div className={galleryClass}>
                <img src={cat1} alt="cat 1"></img>
                <img src={cat2} alt="cat 2"></img>
                <img src={cat3} alt="cat 3"></img>
                <img src={cat4} alt="cat 4"></img>
                <img src={cat5} alt="cat 5"></img>
            </div>
           
            
            
        </div>
    )
}

export default Gallery;
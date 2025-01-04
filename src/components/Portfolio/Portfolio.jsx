import poert1 from '../../assets/poert1.png';
import poert2 from '../../assets/port2.png';
import poert3 from '../../assets/port3.png';
import Cards from '../Cards/Cards';

export default function Portfolio(){

    return <>
   <section className="text-white text-center my-5">
          <h2 className="my-5 portoflio-h2">portfolio component</h2>
           <section className="row container mx-auto">
            
           <Cards src={poert1} />
           <Cards src={poert2} />
           <Cards src={poert3} />

           <Cards src={poert1} />
           <Cards src={poert2} />
           <Cards src={poert3} />
            
           </section>
          </section>
    </>
}
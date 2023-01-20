import { useParams } from "react-router-dom";
import { useFetchDataById } from '../../hook/fetchData';
import { useSetTitle } from '../../hook/setTitle';
import Caroussel from "./Caroussel/Caroussel";
import Accordion from "../../components/Accordion/Accordion";

import './Location.scss';

export default function Location() {
    
    // Get Data
    const { locationId } = useParams();
    const { dataById:data, loading, error } = useFetchDataById('/logements.json', locationId);

    // Set Title
    let title = "Logement"
    if( !loading && !error ) title += ` - ${data.title}`;
    useSetTitle(title);
    
    return (
        <article className="location">

            { loading && <div>LOADING ... </div> }
            { error && <div>ERROR : {error} </div> }
            { data &&  (
            <>
            <Caroussel title={data.title} pictures={data.pictures} />
            
            <div className="location__header">

                <div className="location__heading">
                    <h1 className="location__title">{data.title}</h1>
                    <p>{data.location}</p>
                    <div className="location__tags">
                        {data.tags.map( (item, index) => <span className="location__tag"key={`${item}-${index}`}>{item}</span>)}
                    </div>
                </div>

                <div className="location__host">
                    <p>{data.host.name}</p>
                    <img src={data.host.picture} alt={data.host.name} />
                    <div className="location__ratings">
                        { data.rating}
                    </div>  
                </div>
                
            </div>

            <div className="location__description">
                <Accordion title="description">
                    {data.description}
                </Accordion>
                <Accordion title="equipements">
                    <ul>
                        {data.equipments.map( (item, index) => <li key={`${item}-${index}`}>{item}</li>)}
                    </ul>
                </Accordion>
            </div>
            </>
            )}           
        </article>
    )
}
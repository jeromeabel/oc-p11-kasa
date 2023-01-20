import {  useParams } from "react-router-dom";

import Caroussel from "../../components/Caroussel/Caroussel";
import Accordion from "../../components/Accordion/Accordion";

import './Location.scss';

import jsonData from '../../data/logements.json';


export default function Location() {

    const { LocationId } = useParams();
    const Locations = [...jsonData];

    // Filtrer
    const Location = Locations.find( (item) => item.id === LocationId )

    return (
        
        <article className="Location">
            <Caroussel title={Location.title} pictures={Location.pictures} />
            <div className="Location__header">
                <div className="Location__heading">
                    <h1 className="Location__title">{Location.title}</h1>
                    <p>{Location.location}</p>
                </div>

                <div className="Location__host">
                    {Location.host.name}
                    <img src={Location.host.picture} alt={Location.host.name} />
                </div>
            </div>

            <div className="Location__filters">
                <div className="Location__tags">
                    {Location.tags.toString()}  
                </div>
                <div className="Location__ratings">
                    { Location.rating}
                </div>                
            </div>

            <div className="Location__description">
                <Accordion title="description" text={Location.description} />
                <Accordion title="equipements" text={Location.equipments.toString()} />
            </div>

            { Location ? null : <div>ERREUR D'ID</div> }
        </article>
    )
}
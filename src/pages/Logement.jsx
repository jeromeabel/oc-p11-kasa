import { useLocation } from "react-router-dom";

export default function Logement(props) {
    const location = useLocation()
    const { logement } = location.state

    return (
        <article>
        <h1>Logement {logement.id} - {logement.title}</h1>
        <img src={logement.pictures[0]} width="600px" alt="" />
        </article>
    )
}
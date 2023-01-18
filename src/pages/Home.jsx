
import { Link, useLoaderData } from 'react-router-dom'

export async function loader() {
    const response = await fetch('logements.json'); // public folder 
    const logements = await response.json();
    return logements;
}

export default function Home() {
    const logements = useLoaderData();

    return (
        <>
        <h2>IMAGES</h2>

        <h2>LOGEMENTS</h2>
            <ul>
              { logements.map((logement) => (
                <li key={logement.id}>
                  <Link to={`/logement/${logement.id}`} state={{ logement: logement }}>{logement.title}</Link>
                </li>
              ))}
            </ul>
      </>
    )
}
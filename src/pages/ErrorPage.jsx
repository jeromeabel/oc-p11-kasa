//import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  //const error = useRouteError();
  //console.error("Erreur dans le routing : ", error);

  return (
    <div id="error-page">
      <h1>Erreur 404</h1>
      <p>Désolé, une erreur inattendue est apparue </p>
      <p>
        {/* <i>{error.statusText || error.message}</i> */}
      </p>
    </div>
  );
}
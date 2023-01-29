# PROJECT

## Axes d'améliorations

- Anim slideshow
- Error404 layout flex grow
- Condition rating-stars

## Difficultés

- React-router v6 & Error Element
- Structure
- CSS avec React
- SVG
- Déploiement : basename, homepage

## Deployment steps for github pages

- Install gh-pages
- Add scripts : "predeploy": "npm run build", "deploy": "gh-pages -d build"
- On github project, select "gh-pages" branch and "/" root.
- Handle routing
  - package.json : "homepage": "https://<username>.github.io/<project-repo>",
  - AppRouter.jsx (or App): add basename to the second argument of createBrowserRouuter : createBrowserRouter( [<routes>], { basename: '/<project-repo>' })
  - When Fetching Data, add <project-repo> to the URL : fetch('/<project-repo>/data.json' )
  - Error 404 issue : modify build script to copy a 404.html file : "build": "react-scripts build && cp build/index.html build/404.html"
- npm run deploy and pray

## Resources

- [Creat React App + Github branch](https://dev.to/kristenkinnearohlmann/basic-setup-for-create-react-app-1e3m)
- [React Router](https://reactrouter.com/en/main)
- https://create-react-app.dev/docs/adding-a-stylesheet/
- https://create-react-app.dev/docs/adding-a-css-modules-stylesheet/
- https://developers.google.com/web/fundamentals/web-app-manifest/

## Project resources

- Fichier json
- Coding guidelines.pdf
  - Code sans erreurs ou warnings dans la console
  - React + Router seulement, Pas de librairie React externe
  - CSS / SASS si besoin
  - composants/fichier + props + state + map + gestion des événements ?
  - Router : 1 fichier router, 1 page / route, error 404 (page inexistante ou si une valeur présente dans l’URL ne fait pas partie des données renseignées.,
- Etapes clés.pdf
- [Maquette Figma](https://www.figma.com/file/bAnXDNqRKCRRP8mY2gcb5p/UI-Design-Kasa-FR?node-id=4%3A1&t=uGuxfsom3TmlLbZy-0)
  - Cliquer sur la ressource > exporter
  - Gallery : Boucle première/dernière image, une seule image pas de flèches, images à la même hauter (crop/centrées)
  - Collapse : Fermer au démarrage, Toggle ouvert/fermé
- Code React Router pour les routes dans un fichier dédié

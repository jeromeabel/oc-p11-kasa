import { Link } from 'react-router-dom'

export default function Error404() {

  return (
    <div style={{
      display:'flex',
      flexDirection:'column',
      alignItems:'center',
      justifyContent:'space-around',
      height:'60vh',
      textAlign:'center'
    }}>
      <h1 style={{ fontSize:'288px', }}>404</h1>
      <h2 style={{ fontWeight:'500' }}>Oups ! La page que vous demandez n'existe pas</h2>
      <Link style={{ textDecoration:'underline',}} to="/">Retourner sur le page d'accueil</Link>
    </div>
  );
}
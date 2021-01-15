import { Link } from 'react-router-dom'

export default function Header(props) {
  return (
    <nav>
      <Link to="/login"> GO TO LOGIN</Link>
      <Link to="/"> GO TO HOME</Link>

      <h1>Welcome to fake tinyapp</h1>
    </nav>
  )
}
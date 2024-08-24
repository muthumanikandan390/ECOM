import { Link } from 'react-router-dom';
function home() {
  return (
    <div>
      hello world
      <Link to="/login" >
      <button >click me </button>
      </Link>
    </div>

  )
}

export default home

import { Link } from 'react-router-dom'

import Error from '../assets/Error404.svg'

export function NotFound() {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-2">
      <Link to="/" className="dark:sky-400 text-sky-600">
        <img
          src={Error}
          alt="Error 404"
          width={480}
          className="hover:opacity-80"
        />
      </Link>
    </div>
  )
}

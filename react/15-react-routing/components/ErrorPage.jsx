import { useRouteError } from 'react-router'

export default function ErrorPage() {
    const error=useRouteError()
    console.log(error.status);
  return (
    <div>
        Unexpected Error {error.status}
    </div>
  )
}

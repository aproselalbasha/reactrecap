import { useRouteError } from "react-router-dom"
function Error()
{ const err=useRouteError()
    return(
        <>
        <h2>opps... something went wrong</h2>
        <h3>{err.status}:{err.statusText }</h3>
        </>
    )
}
export default Error
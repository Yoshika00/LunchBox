import { useRouteError } from "react-router-dom"

const Error = ( ) => {
    const err = useRouteError();
    console.log(err);
    return (
        <div className="border w-4/12 text-center bg-slate-400 mx-auto my-60 text-2xl font-bold">
            <h1>Error</h1>
            <div className="border bg-slate-200 text-lg font-normal">
                <h2>Oops, something went wrong . Please try again later !!</h2> 
                <h2>{err.status + " : " + err.statusText}</h2>
            </div>
            
        </div>
    )
}

export default Error
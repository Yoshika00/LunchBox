import { useRouteError } from "react-router-dom";

const Error = () => {

    const err = useRouteError();
    //console.log(err);
    return (
        <div className="border border-solid border-black p-4 text-ceneter  absolute top-[45%] left-[45%]">
            <h1 className="font-bold ">Opps ...!!!!</h1>
            <h2 className="font-bold ">Something went wrong....!!!</h2>
            <h2 className="font-semibold ">{err.status } : {err.statusText}</h2>
        </div>
    )
}

export default Error;
import food3 from "../assets/img/food3.png"

const About = () => {
    return (
        <div className="pl-2 flex justify-around w-[80%]">
            <img
               className=""  
               src={food3} />

            <div className="font-serif text-center">
                <h1 className="text-7xl pt-4 ">Elevate Your Lunch </h1>
                <h1 className="text-7xl "> Break with Our </h1>
                <div className="text-9xl text-green-700"> Lunch Box</div>
            </div>
        </div>
    )
}


export default About;


    /*

    <div className="w-1/2 m-auto font-bold p-3 bg-green-500 text-white">
            <h1 className="text-5xl ">Elevate Your Lunch </h1>
            <h1 className="text-7xl p-2"> Break with Our </h1>
            <div className="text-9xl p-2">Lunch Box</div>
            
        </div>
    */

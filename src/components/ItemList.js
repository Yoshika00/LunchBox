import { CDN_IMG } from "../utils/constant";

const ItemList = ({items}) => {
    //console.log(items);
    return (
        <div>
            {items.map((item) => (
                <div key={item.card.info.id}
                     className="p-4 m-4 border-gray-200 border-b-2 text-left flex justify-between">

                    <div className="w-9/12">
                       <div className="font-semibold">
                           <span>{item?.card?.info?.name}</span>
                           <span> - ₹{item.card.info.price ? item.card?.info?.price /100 : item?.card?.info?.defaultPrice / 100}</span>
                       </div>

                       <p className="text-xs">{item.card.info.description}</p>
                    </div>

                    <div className="w-3/12 p-4">
                        <div className="absolute">
                             <button className="p-1 px-4 mx-6 my-20 rounded-lg bg-white text-green-600 font-bold shadow-lg">Add +</button>
                        </div>
                        <img src={CDN_IMG + item.card.info.imageId} className="w-full rounded-md" />
                    </div>
                </div>
                 
            ))}
        </div>
    )
}
    

export default ItemList;
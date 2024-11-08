const CatalogItem = ({truck}) => {
    const {
        name,
        price,
        rating,
        location,
        description,
        AC,
        bathroom,
        kitchen,
        TV,
        radio,
        refrigerator,
        microwave,
        gas,
        water,
        gallery
    } = truck;

    return (
        <div>
            <img src={gallery[0].thumb} alt="" />
            <div>
                <div><h2>{name}</h2>
            <h2>{price}</h2>
            <button>
                <svg>
                    <use href="../../../public/img/icons.svg#icon-heart"></use>
                </svg>
            </button></div>
                
                <div>
                    <svg>
                        <use href="../../../public/img/icons.svg#icon-star"></use>
                    </svg>
                    <p>
                        <svg>
                            <use href='../../../public/img/icons.svg#icon-map'></use>
                        </svg>
                        {location}
                    </p>
                </div>
                <p>{description}</p>
                <ul>
                    
                </ul>
            </div>
            
        </div>
    )
}

export default CatalogItem;
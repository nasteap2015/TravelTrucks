import css from './ItemDetails.module.css';

const ItemDetails = (truck) => {
    console.log(truck.name);
    return (
        <div>
            <h2>{truck.name}</h2>
            <div className={css.ratingLocationContainer}>
                <p>
                    <svg width="16px" height="16px" fill="#FFC531">
                        <use href="../../../public/img/icons.svg#icon-star"></use>
                    </svg>
                    {truck.rating}( Reviews)</p>
                <p>
                    <svg width="16px" height="16px" className={css.mapIcon}>
                        <use href='../../../public/img/icons.svg#icon-map'></use>
                    </svg>
                    {truck.location}
                </p>
            </div>
        </div>
    )
};

export default ItemDetails;
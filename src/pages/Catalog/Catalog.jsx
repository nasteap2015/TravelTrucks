import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTrucks } from "../../redux/trucks/operations";
import { selectFilters } from '../../redux/filters/selectors';
import CatalogItemList from '../../components/CatalogItemList/CatalogItemList';
import FiltersBar from "../../components/FiltersBar/FiltersBar";
import css from './Catalog.module.css';

const Catalog = () => {
  const dispatch = useDispatch();
  const filters = useSelector(selectFilters);
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(fetchTrucks({page:1, reset: true}));
  }, [dispatch]);

  const loadMore = async () => {
    dispatch(fetchTrucks({ page: page + 1, filters }));
      setPage((prev) => prev + 1);
    };;

    return (
      <div className={css.catalogContainer}>
        <FiltersBar/>
        <CatalogItemList onLoadMore={loadMore}  />
      </div>
    )
      
};

export default Catalog;
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTrucks } from "../../redux/trucks/operations";
import { selectLoading, selectError, selectTrucks } from "../../redux/trucks/selectors";
import { selectFilters } from '../../redux/filters/selectors';
import CatalogItemList from '../../components/CatalogItemList/CatalogItemList';
import FiltersBar from "../../components/FiltersBar/FiltersBar";
import Loader from "../../components/Loader/Loader";
import css from './Catalog.module.css';

const Catalog = () => {
  const dispatch = useDispatch();
  const filters = useSelector(selectFilters);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const [page, setPage] = useState(1);
  console.log(page);

  useEffect(() => {
    dispatch(fetchTrucks({page:1, reset: true}));
  }, [dispatch]);

  const loadMore = async () => {
    dispatch(fetchTrucks({ page: page + 1, filters }));
      setPage((prev) => prev + 1);
    };;

  const trucks = useSelector(selectTrucks);

    return (
      <div className={css.catalogContainer}>
        <FiltersBar/>
        {loading && <Loader />}
        {error && <p>Couldn't load information, please try later</p>}
        <CatalogItemList onLoadMore={loadMore}  />
      </div>
    )
      
};

export default Catalog;
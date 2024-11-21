import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTrucks } from "../../redux/trucks/operations";
import { selectLoading, selectError } from "../../redux/trucks/selectors";
import CatalogItemList from '../../components/CatalogItemList/CatalogItemList';
import FiltersBar from "../../components/FiltersBar/FiltersBar";
import Loader from "../../components/Loader/Loader";
import css from './Catalog.module.css';

const Catalog = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchTrucks());
  }, [dispatch]);

    return (
      <div className={css.catalogContainer}>
        <FiltersBar/>
        {loading && <Loader />}
        {error && <p>Couldn't load information, please try later</p>}
        <CatalogItemList/>
      </div>
    )
      
};

export default Catalog;
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTrucks } from "../../redux/trucks/operations";
import { selectLoading, selectError } from "../../redux/trucks/selectors";
import CatalogItemList from '../../components/CatalogItemList/CatalogItemList';
import Loader from "../../components/Loader/Loader";

const Catalog = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchTrucks());
  }, [dispatch]);

    return (
      <div>
        {loading && <Loader/>}
            <CatalogItemList/>
        </div>
    )
      
};

export default Catalog;
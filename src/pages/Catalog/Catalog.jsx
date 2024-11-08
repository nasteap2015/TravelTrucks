import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTrucks } from "../../redux/trucks/operations";
import { selectLoading, selectError } from "../../redux/trucks/selectors";
import CatalogItemList from '../../components/CatalogItemList/CatalogItemList';

const Catalog = () => {
    const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchTrucks());
  }, [dispatch]);

    return (
        <div>
            <CatalogItemList/>
        </div>
    )
      
};

export default Catalog;
import css from './FiltersBar.module.css';
import { Formik, Form, Field } from 'formik';
import { useId } from "react";
import { changeFilter } from '../../redux/filters/slice';
import { useDispatch } from "react-redux";
import {fetchTrucks} from '../../redux/trucks/operations';

const FiltersBar = () => {
    const equipmentId = useId();
    const transmissionId = useId();
    const typeId = useId();
    const dispatch = useDispatch();

    const initialValues = {
        location: '',
        truckEquipment: [],
        transmission: '',
        type: ''
    }
    
    const onSubmit = (values) => {
        dispatch(changeFilter(values));
        dispatch(fetchTrucks({ page: 1, filters: values, reset: true }));  
    }

    return (
        <div className={css.filtersContainer}>
            <Formik initialValues={initialValues} onSubmit={onSubmit}>
                <Form>
                    <div>
                        <p className={css.locationTitle}>Location</p>
                        <Field type="text" name="location" id="locationInput" className={css.locationInput} placeholder="Kyiv, Ukraine"/>
                    </div>
                    <p className={css.filtersTitle}>Filters</p>
                    <div>
                        <h3 className={css.title}>Vehicle equipment</h3>
                        <div className={css.filtersButtonContainer}>
                            <label htmlFor={equipmentId} className={css.filterLabel}>
                                <Field type="checkbox" id={equipmentId} name="truckEquipment" value="AC"/>
                                AC
                            </label>
                            <label htmlFor={equipmentId}>
                                <Field type="checkbox" id={equipmentId} name="truckEquipment" value="kitchen"/>
                                Kitchen
                            </label>
                            <label htmlFor={equipmentId}>
                                <Field type="checkbox" id={equipmentId} name="truckEquipment" value="TV"/>
                                TV
                            </label>
                            <label htmlFor={equipmentId}>
                                <Field type="checkbox" id={equipmentId} name="truckEquipment" value="bathroom"/>
                                Bathroom
                            </label>
                        </div>
                    </div>
                    <div>
                        <h3>Transmission</h3>
                        <div>
                            <label htmlFor={transmissionId}>
                            <Field type="radio" id={transmissionId} name="transmission" value="Automatic"/>
                            Automatic
                        </label>
                        <label htmlFor={transmissionId}>
                            <Field type="radio" id={transmissionId} name="transmission" value="Manual"/>
                            Manual
                        </label>
                        </div>
                    </div>
                    <div>
                        <h3>Vehicle type</h3>
                        <div>
                            <label htmlFor={typeId}>
                                <Field type="radio" id={typeId} name="type" value="panelTruck" />
                                Van
                            </label>
                            <label htmlFor={typeId}>
                                <Field type="radio" id={typeId} name="type" value="fullyIntegrated"/>
                                Fully integrated
                            </label>
                            <label htmlFor={typeId}>
                                <Field type="radio" id={typeId} name="type" value="alcove"/>
                                Alcove
                            </label>
                        </div>
                    </div>
                    <button type="submit">Search</button>
                </Form>
            </Formik>          
        </div>
    )
};

export default FiltersBar;
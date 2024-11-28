import css from './FiltersBar.module.css';
import { Formik, Form, Field } from 'formik';
import { useId } from "react";
import { changeFilter } from '../../redux/filters/slice';
import { useDispatch } from "react-redux";
import {fetchTrucks} from '../../redux/trucks/operations';

const FiltersBar = () => {
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

    const Icon = ({ path }) => {
        return (
            <svg width="32px" height="32px">
                <use href={path}></use>
            </svg>
        );
    };


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
                            <Field type="checkbox" id="ac" name="truckEquipment" value="AC" className={css.checkbox} />
                            <label htmlFor="ac" className={css.filterLabel}>
                                <Icon path={`../../../public/img/icons.svg#icon-AC`}/>
                                AC
                            </label>
                            <Field type="checkbox" id="kitchen" name="truckEquipment" value="kitchen" className={css.checkbox}/>
                            <label htmlFor="kitchen" className={css.filterLabel}>
                                <Icon path={`../../../public/img/icons.svg#icon-kitchen`}/>
                                Kitchen
                            </label>
                            <Field type="checkbox" id="TV" name="truckEquipment" value="TV" className={css.checkbox}/>
                            <label htmlFor="TV" className={css.filterLabel}>
                                <Icon path={`../../../public/img/icons.svg#icon-TV`}/>
                                TV
                            </label>
                            <Field type="checkbox" id="bathroom" name="truckEquipment" value="bathroom" className={css.checkbox}/>
                            <label htmlFor="bathroom" className={css.filterLabel}>
                                <Icon path={`../../../public/img/icons.svg#icon-bathroom`}/>
                                Bathroom
                            </label>
                            <Field type="checkbox" id="refrigerator" name="truckEquipment" value="refrigerator" className={css.checkbox}/>
                            <label htmlFor="refrigerator" className={css.filterLabel}>
                                <Icon path={`../../../public/img/icons.svg#icon-refrigerator`}/>
                                Refrigerator
                            </label>
                            <Field type="checkbox" id="microwave" name="truckEquipment" value="microwave" className={css.checkbox}/>
                            <label htmlFor="microwave" className={css.filterLabel}>
                                <Icon path={`../../../public/img/icons.svg#icon-microwave`} className={css.microwaveIcon}/>
                                Microwave
                            </label>
                            <Field type="checkbox" id="water" name="truckEquipment" value="water" className={css.checkbox}/>
                            <label htmlFor="water" className={css.filterLabel}>
                                <Icon path={`../../../public/img/icons.svg#icon-water`}/>
                                Water
                            </label>    
                        </div>
                    </div>
                    <div>
                        <h3>Transmission</h3>
                        <div>
                            <label htmlFor="Automatic">
                            <Field type="radio" id="Automatic" name="transmission" value="Automatic"/>
                            Automatic
                        </label>
                        <label htmlFor="Manual">
                            <Field type="radio" id="Manual" name="transmission" value="Manual"/>
                            Manual
                        </label>
                        </div>
                    </div>
                    <div>
                        <h3>Vehicle type</h3>
                        <div>
                            <label htmlFor="panelTruck">
                                <Field type="radio" id="panelTruck" name="type" value="panelTruck" />
                                Van
                            </label>
                            <label htmlFor="fullyIntegrated">
                                <Field type="radio" id="fullyIntegrated" name="type" value="fullyIntegrated"/>
                                Fully integrated
                            </label>
                            <label htmlFor="alcove">
                                <Field type="radio" id="alcove" name="type" value="alcove"/>
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
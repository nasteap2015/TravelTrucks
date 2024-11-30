import css from './FiltersBar.module.css';
import { Formik, Form, Field } from 'formik';
import { changeFilter } from '../../redux/filters/slice';
import { useDispatch } from "react-redux";
import { fetchTrucks } from '../../redux/trucks/operations';
import { LuMicrowave, LuRefrigerator } from "react-icons/lu";
import { IoWaterOutline } from "react-icons/io5";
import { PiShower } from "react-icons/pi";
import { FiTv } from "react-icons/fi";
import { BsCupHot, BsGrid3X3Gap } from "react-icons/bs";
import { FaWind } from "react-icons/fa";
import { TbManualGearbox, TbAutomaticGearbox } from "react-icons/tb";
import { CiGrid31, CiGrid41 } from "react-icons/ci";


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
    
    const handleReset = () => {
        dispatch(changeFilter(initialValues));
        dispatch(fetchTrucks({ page: 1, reset: true }));
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
                            <Field type="checkbox" id="ac" name="truckEquipment" value="AC" className={css.checkbox} />
                            <label htmlFor="ac" className={css.filterLabel}>
                                <FaWind className={css.icon} />
                                AC
                            </label>
                            <Field type="checkbox" id="kitchen" name="truckEquipment" value="kitchen" className={css.checkbox}/>
                            <label htmlFor="kitchen" className={css.filterLabel}>
                                <BsCupHot className={css.icon} />
                                Kitchen
                            </label>
                            <Field type="checkbox" id="TV" name="truckEquipment" value="TV" className={css.checkbox}/>
                            <label htmlFor="TV" className={css.filterLabel}>
                                <FiTv className={css.icon} />
                                TV
                            </label>
                            <Field type="checkbox" id="bathroom" name="truckEquipment" value="bathroom" className={css.checkbox}/>
                            <label htmlFor="bathroom" className={css.filterLabel}>
                                <PiShower className={css.icon} />
                                Bathroom
                            </label>
                            <Field type="checkbox" id="refrigerator" name="truckEquipment" value="refrigerator" className={css.checkbox}/>
                            <label htmlFor="refrigerator" className={css.filterLabel}>
                                <LuRefrigerator className={css.icon} />
                                Refrigerator
                            </label>
                            <Field type="checkbox" id="microwave" name="truckEquipment" value="microwave" className={css.checkbox}/>
                            <label htmlFor="microwave" className={css.filterLabel}>
                                <LuMicrowave className={css.icon} />
                                Microwave
                            </label>
                            <Field type="checkbox" id="water" name="truckEquipment" value="water" className={css.checkbox}/>
                            <label htmlFor="water" className={css.filterLabel}>
                                <IoWaterOutline className={css.icon} />
                                Water
                            </label>    
                        </div>
                    </div>
                    <div>
                        <h3 className={css.title}>Transmission</h3>
                        <div className={css.filtersButtonContainer}>
                            <Field type="radio" id="Automatic" name="transmission" value="Automatic" className={css.checkbox}/>
                            <label htmlFor="Automatic" className={css.filterLabel}>
                                <TbAutomaticGearbox className={css.icon} />
                                Automatic
                            </label>
                            <Field type="radio" id="Manual" name="transmission" value="Manual" className={css.checkbox}/>
                            <label htmlFor="Manual" className={css.filterLabel}>
                                <TbManualGearbox className={css.icon} />
                                Manual
                            </label>
                        </div>
                    </div>
                    <div>
                        <h3 className={css.title}>Vehicle type</h3>
                        <div className={css.filtersButtonContainer}>
                            <Field type="radio" id="panelTruck" name="type" value="panelTruck"  className={css.checkbox}/>
                            <label htmlFor="panelTruck" className={css.filterLabel}>
                                <CiGrid31 className={css.icon} />
                                Van
                            </label>
                            <Field type="radio" id="fullyIntegrated" name="type" value="fullyIntegrated"  className={css.checkbox}/>
                            <label htmlFor="fullyIntegrated" className={css.filterLabel}>
                                <CiGrid41 className={css.icon} />
                                Fully integrated
                            </label>
                            <Field type="radio" id="alcove" name="type" value="alcove"  className={css.checkbox}/>
                            <label htmlFor="alcove" className={css.filterLabel}>
                                <BsGrid3X3Gap className={css.icon} />
                                Alcove
                            </label>
                        </div>
                    </div>
                    <div className={css.buttonContainer}>
                        <button type="submit" className={css.filtersButton}>Search</button>
                        <button onClick={handleReset} type="reset" className={css.filtersButton}>Delete filter</button>
                    </div>
                </Form>
            </Formik>          
        </div>
    )
};

export default FiltersBar;
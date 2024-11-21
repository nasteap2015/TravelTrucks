import css from './FiltersBar.module.css';
import { Formik, Form, Field } from 'formik';

const FiltersBar = () => {
    return (
        <div className={css.filtersContainer}>
            <Formik>
                <Form>
                    <div>
                        <label htmlFor="locationInput">
                            Location
                            <Field type="text" name="location" id="locationInput"/>
                        </label>
                    </div>
                    <p>Filters</p>
                    <div>
                        <h3>Vehicle equipment</h3>
                        <div></div>
                    </div>
                    <div>
                        <h3>Vehicle type</h3>
                        <div></div>
                    </div>
                    <button type="submit">Search</button>
                </Form>
            </Formik>          
        </div>
    )
};

export default FiltersBar;
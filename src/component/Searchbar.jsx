import React, { Fragment } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import SearchIcon from "@material-ui/icons/Search";
import { useDispatch } from "react-redux";
// import { fetchTrip } from "../redux/actions/mainAction";
import { Formik } from "formik";
import Grid from '@material-ui/core/Grid';

function SearchInput() {
    const dispatch = useDispatch();

    return (
        
            <Formik
                initialValues={{ destination: "" }}
                onSubmit={(values) => {
                    // dispatch(fetchTrip(values));
                    // setTimeout(() => {
                    //     alert(JSON.stringify(values, null, 2));
                    //     setSubmitting(false);
                    // }, 400);
                }}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                    /* and other goodies */
                }) => (
                    <form onSubmit={handleSubmit}>
                    <Grid container spacing={3} style={{alignItems: 'center', background: 'lightblue'}}>
                        <Grid item xs={12} md={12} lg={8}>
                        <TextField
                            id="destination"
                            name="destination"
                            style={{background: 'white' }}
                            placeholder="Movie's Title"
                            fullWidth
                            onBlur={handleBlur}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            variant="outlined"
                            onChange={handleChange}
                            value={values.destination}
                        />
                        </Grid>
                        {/* <p style={{ color: "red", fontStyle: "italic" }}>
                            {errors.destination &&
                                touched.destination &&
                                errors.destination}
                        </p> */}
                        <Grid item xs={12} md={12} lg={4}>
                        <Button
                            variant="contained"
                            color="secondary"
                            type="submit"
                            style={{ marginTop: 17 }}
                        >
                           <SearchIcon />
                        </Button>
                        </Grid>
                        </Grid>
                    </form>
                )}
            </Formik>
    );
}

export default SearchInput;

import React, { Fragment } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import SearchIcon from "@material-ui/icons/Search";
import { useDispatch } from "react-redux";
import { searchMovie } from "../redux/actions/moviesAction";
import { Formik } from "formik";
import Grid from '@material-ui/core/Grid';

function SearchInput() {
    const dispatch = useDispatch();

    return (
        
            <Formik
                initialValues={{ title: "" }}
                onSubmit={(values) => {
                    dispatch(searchMovie(values));
                    
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
                  
                }) => (
                    <form onSubmit={handleSubmit}>
                    <Grid container spacing={3} style={{backgroundColor: 'ligthblue'}}>
                        <Grid item xs={8} md={8} lg={8}>
                        <TextField
                            id="title"
                            name="title"
                            style={{background: 'white' }}
                            placeholder="Movie's Title"
                            fullWidth
                            onBlur={handleBlur}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            variant="outlined"
                            onChange={handleChange}
                            value={values.title}
                            size='small'
                        />
                        </Grid>
                       
                        <Grid item xs={4} md={4} lg={4}>
                        <Button
                            variant="contained"
                            type="submit"
                            style={{ marginTop: 3, backgroundColor: 'red' }}
                        >
                           <SearchIcon style={{color: 'white'}} />
                        </Button>
                        </Grid>
                        </Grid>
                    </form>
                )}
            </Formik>
    );
}

export default SearchInput;

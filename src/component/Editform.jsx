import React, {useEffect} from 'react';
import { Formik } from 'formik';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {addMovie} from '../redux/actions/moviesAction'
import {useDispatch} from 'react-redux'
import { useHistory } from 'react-router-dom';
import {getMovieID} from '../redux/actions/moviesAction'


export default function Add(edit) {
	console.log(edit);

	// const movieId= edit.match.params.movieId;
    const [movie, setMovie] = React.useState({});
    
	const dispatch = useDispatch()
	const history = useHistory();

	// useEffect(() => {
	// 	getMovieID(movieId).then(res => {
	// 		console.log(res)
	// 	 setMovie(state => {
	// 		 return {
	// 			 ...state, ...res.data.data
	// 		 }
	// 	 })       
	// 	})
	 
	//  }, []);

    return(
                        <Formik
									initialValues={{
										// id : movieId,
										title : movie.title, 
                                        poster: movie.poster, 
                                        resume: movie.resume, 
                                        rating: movie.rating, 
                                        genre : movie.genre, 
                                        year  : movie.year,
									}}
									
									onSubmit={async(values) => {
										// await dispatch(addMovie(values));
										// await alert('Movie successfully added');
										// await window.location.reload();
                                        // await history.push('/');
                                        
									}}
								>
									{({ handleChange, handleSubmit, values, isSubmitting, errors, touched }) => {
										return (
											<form  noValidate onSubmit={handleSubmit}>
												<TextField
													variant="outlined"
													required
													fullWidth
													id="title"
													label="Film's title"
													name="title"
													autoComplete="title"
													onChange={handleChange}
													values={values.title}
                                                    size="small"
                                                    style={{ marginTop: 20, marginBottom: 20, background: 'white'}}
												/>
												<TextField
													variant="outlined"
													style={{ marginBottom: 20, background: 'white'}}
													required
													fullWidth
													id="poster"
													label="Poster's url"
													name="poster"
													autoComplete="poster"
													onChange={handleChange}
													values={values.poster}
													size="small"
												/>
												 <TextField
													variant="outlined"
													style={{ marginBottom: 20, background: 'white'}}
													required
													fullWidth
													name="year"
													label="Year"
													type="year"
													id="year"
													autoComplete="year"
													onChange={handleChange}
													values={values.year}
													size="small"
												/>
												<TextField
													variant="outlined"
													style={{ marginBottom: 20, background: 'white'}}
													required
													fullWidth
													name="genre"
													label="Genre"
													type="genre"
													id="genre"
													autoComplete="genre"
													onChange={handleChange}
													values={values.genre}
													size="small"
												/>
                                                <TextField
													variant="outlined"
													style={{ marginBottom: 20, background: 'white'}}
													required
													fullWidth
													name="rating"
													label="Rating"
													type="rating"
													id="rating"
													autoComplete="rating"
													onChange={handleChange}
													values={values.rating}
													size="small"
												/>
                                               <TextField
													variant="outlined"
													style={{ marginBottom: 20, background: 'white'}}
													required
													fullWidth
													name="resume"
													label="Resume"
													type="resume"
													id="resume"
													autoComplete="resume"
													onChange={handleChange}
													values={values.resume}
													size="small"
												/>
												<Button
													type="submit"
													fullWidth
													variant="contained"
													color="inherit"
													disabled={isSubmitting}
													style={{
														borderRadius: '3px',
														fontFamily: 'Roboto, sans-serif',
														backgroundColor: '#329da8',
														marginTop: '10px',
														color: '#6C5434',
														marginBottom: 20
													}}
												>
													<b>Edit</b>
												</Button>
											</form>
										);
									}}
								</Formik>
    )
}
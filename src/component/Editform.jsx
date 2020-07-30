import React, {useEffect} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {useDispatch} from 'react-redux'
import { useHistory } from 'react-router-dom';
import {getMovieID} from '../redux/actions/moviesAction'
import {editMovie} from '../redux/actions/moviesAction'
import { connect } from "react-redux";


function Add(props) {
	console.log(props);

	const [title, setTitle] = React.useState(props.movie.title);
    const [poster, setPoster] = React.useState(props.movie.poster);
    const [year, setYear] = React.useState(props.movie.year);
    const [genre, setGenre] = React.useState(props.movie.genre);
    const [rating, setRating] = React.useState(props.movie.rating);
    const [resume, setResume] = React.useState(props.movie.resume);

    
	const dispatch = useDispatch()
	const history = useHistory();

	const handleEdit = async() => {

        const movies={
            id: props.movie._id,
            title,
            poster,
            year,
            genre,
			rating,
			resume
        }

 
    await  dispatch(editMovie(movies))
	await  alert ('Edit movie success')
	await  history.push('/')
      };

	

    return(
                        
					<div>
						<TextField
                        autoFocus
                        margin="dense"
                        id="Title"
                        label="Movie's title"
                        type="text"
                        fullWidth
                        value={title}
						onChange={(e) => setTitle(e.target.value)}
						style={{ backgroundColor: 'white'}}
                    />
                    <TextField
                        margin="dense"
                        id="Poster"
                        label="Poster's url"
                        type="text"
                        fullWidth
                        value={poster}
						onChange={(e) => setPoster(e.target.value)}
						style={{ backgroundColor: 'white'}}
                    />
                    <TextField
                        margin="dense"
                        id="Year"
                        label="Year"
                        type="number"
                        fullWidth
                        value={year}
						onChange={(e) => setYear(e.target.value)}
						style={{ backgroundColor: 'white'}}
                    />
                    <TextField
                        margin="dense"
                        id="Genre"
                        label="Genre"
                        type="text"
                        fullWidth
                        value={genre}
						onChange={(e) => setGenre(e.target.value)}
						style={{ backgroundColor: 'white'}}
                    />
                    <TextField
                        margin="dense"
                        id="Rating"
                        label="Rating"
                        type="number"
                        fullWidth
                        value={rating}
						onChange={(e) => setRating(e.target.value)}
						style={{ backgroundColor: 'white'}}
                    />
					<TextField
                        margin="dense"
                        id="Resume"
                        label="Resume"
                        type="text"
                        fullWidth
                        value={resume}
						onChange={(e) => setResume(e.target.value)}
						style={{ backgroundColor: 'white'}}
                    />
												<Button
													onClick={handleEdit}
													fullWidth
													variant="contained"
													color="inherit"
													
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
												</div>
    )
}

export default connect(null)(Add);
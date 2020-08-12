import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {useDispatch} from 'react-redux'
import { useHistory } from 'react-router-dom';
import {editMovie} from '../redux/actions/moviesAction'
import { connect } from "react-redux";
import { useEffect } from 'react';

function Edit({movie}) {
  
    console.log(movie)
    
    const [title, setTitle] = React.useState("");
    const [poster, setPoster] = React.useState("");
    const [year, setYear] = React.useState("");
    const [genre, setGenre] = React.useState("");
    const [rating, setRating] = React.useState("");
    const [resume, setResume] = React.useState("");
    const [trailer, setTrailer] = React.useState("");


   useEffect(()=>{
        setTitle(movie.title)
        setPoster(movie.poster)
        setYear(movie.year)
        setGenre(movie.genre)
        setRating(movie.rating)
        setResume(movie.resume)
        setTrailer(movie.trailer)
    },[movie._id])
    console.log(title);
    
	const dispatch = useDispatch()
	const history = useHistory();

	const handleEdit = async() => {

        const movies={
            id: movie._id,
            title,
            poster,
            year,
            genre,
			rating,
            resume,
            trailer
        }

 
    await  dispatch(editMovie(movies))
	await  alert ('Edit movie success')
	await  history.push('/admin')
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
                        value={title||""}
						onChange={(e) => setTitle(e.target.value)}
                        
                        variant="outlined"
                    />
                    <TextField
                        margin="dense"
                        id="Poster"
                        label="Poster's url"
                        type="text"
                        fullWidth
                        value={poster||""}
						onChange={(e) => setPoster(e.target.value)}
                        
                        variant="outlined"
                    />
                    <TextField
                        margin="dense"
                        id="Year"
                        label="Year"
                        type="number"
                        fullWidth
                        value={year||""}
						onChange={(e) => setYear(e.target.value)}
                       
                        variant="outlined"
                    />
                    <TextField
                        margin="dense"
                        id="Genre"
                        label="Genre"
                        type="text"
                        fullWidth
                        value={genre||""}
						onChange={(e) => setGenre(e.target.value)}
                      
                        variant="outlined"
                    />
                    <TextField
                        margin="dense"
                        id="Rating"
                        label="Rating"
                        type="number"
                        fullWidth
                        value={rating||""}
						onChange={(e) => setRating(e.target.value)}
                        
                        variant="outlined"
                    />
					<TextField
                        margin="dense"
                        id="Resume"
                        label="Resume"
                        type="text"
                        fullWidth
                        value={resume||""}
						onChange={(e) => setResume(e.target.value)}
                        variant="outlined"
                        size="small"
                    />
                    <TextField
                        margin="dense"
                        id="Trailer"
                        label="Copy src of embed code trailer (example: https://www.youtube.com/embed/KK8FHdFluOQ)"
                        type="text"
                        fullWidth
                        value={trailer||""}
						onChange={(e) => setTrailer(e.target.value)}
                        variant="outlined"
                        size="small"
                    />
												<Button
													onClick={handleEdit}
													fullWidth
													variant="contained"
													color="inherit"
													
													style={{
														borderRadius: '3px',
														fontFamily: 'Roboto, sans-serif',
														backgroundColor: 'red',
														marginTop: '10px',
														color: 'white',
														marginBottom: 20
													}}
												>
													<b>SAVE</b>
												</Button>
												</div>
    )
}

export default connect(null)(Edit);
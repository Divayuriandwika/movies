import axios from 'axios';

const apiUrl ='https://moviestest-api.herokuapp.com'


export const addMovie = (values) => {
	return (dispatch) => {
		return axios
			.post(`${apiUrl}/movies`, values)
			.then((response) => {
				dispatch(postMovieSuccess(response.data.data));
				console.log(response);
				
			})
			.catch((error) => {
				alert(error.response.data);
				console.log(error);
				throw error;
			});
	};
};

export const postMovieSuccess = (data) => {
	return {
		type: 'POST_MOVIE',
		payload: {
			data
		}
	};
};


export const getMovieSuccess = (data) => {
	return {
		type: 'GET_MOVIE',
		payload: {
			data
		}
	};
};


export const getAll = () => {
	return (dispatch) => {
		return axios
		.get(`${apiUrl}/movies`)
		.then((response) => {
				dispatch(getMovieSuccess(response.data.data))
		})
		.catch((error) => {
			console.log(error);
			throw error;
			
		})
	}
}


export const getMovieID = (id) => {
		return axios
			.get(`${apiUrl}/movies/${id}`);
};
export const getMovieIDSuccess = (data) => {
	return {
		type: 'GET_MOVIEID',
		payload: {
			data
		}
	};
};


export const deleteMovie = (id) => {
	return (dispatch) => {
		return axios
		.delete(`${apiUrl}/movies/${id}`)
		.then((response) => {
			dispatch(deleteIDSuccess(response.data.data));
		})
		.catch((error) => {
			console.log(error);
			throw error;
			
		})
	}
}

export const deleteIDSuccess = (data) => {
	return {
		type: 'DELETE_MOVIE',
		payload: {
			data
		}
	};
};



export const editMovie = (id) => {
	console.log(id)
	return (dispatch) => {
		console.log(id)
		return axios
		.put(`${apiUrl}/movies/${id.id}`,id)
		.then((response) => {
			console.log(response)
			dispatch(getAll());
		})
		.catch((error) => {
			console.log(error);
			throw error;
		});
	}
}
	


export const editTaskSuccess = (data) => {
	return {
		type: 'EDIT_TASK',
		payload: {
			data
		}
	};
};


export const searchMovie =  (data) => { 
    return (dispatch) => {   
        return axios
            .get(`${apiUrl}/movies/title/${data.title}`, {})
            .then((response) => {
				console.log(response);
				
			 dispatch(searchMovieTitle(response.data.data)); 
            })
            .catch((error) => {
                throw error;
            });
    };
};

export const searchMovieTitle = (data) => {
    return {
        type: "GET_MOVIETITLE",
        payload: {
            data,
        },
    };
};


export const sortRatingHigh = () => {
	return (dispatch) => {
		return axios
		.get(`${apiUrl}/movies`)
		.then((response) => {
				dispatch(sortRatingHighSuccess(response.data.data))
		})
		.catch((error) => {
			console.log(error);
			throw error;
			
		})
	}
};

export const sortRatingHighSuccess = (data) => {
    return {
        type: "GET_BYRATINGUP",
        payload: {
            data,
        },
    };
};


export const sortRatingLow = () => {
	return (dispatch) => {
		return axios
		.get(`${apiUrl}/movies`)
		.then((response) => {
				dispatch(sortRatingLowSuccess(response.data.data))
		})
		.catch((error) => {
			console.log(error);
			throw error;
			
		})
	}
};

export const sortRatingLowSuccess = (data) => {
    return {
        type: "GET_BYRATINGDOWN",
        payload: {
            data,
        },
    };
};





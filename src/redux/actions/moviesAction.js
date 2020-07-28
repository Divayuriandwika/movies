import axios from 'axios';

const apiUrl = process.env.REACT_APP_API_URL;


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


// export const getTaskID = (id) => {
// 	return (dispatch) => {
// 		return axios
// 			.get(`${apiUrl}/task/manager/${id}`)
// 			.then((response) => {
// 				dispatch(getTaskIDSuccess(response.data));
// 			})
// 			.catch((error) => {
// 				console.log(error);
// 				throw error;
// 			});
// 	};
// };
// export const getTaskIDSuccess = (data) => {
// 	return {
// 		type: 'GET_TASK',
// 		payload: {
// 			data
// 		}
// 	};
// };


export const deleteTask = (id) => {
	return (dispatch) => {
		return axios
		.delete(`${apiUrl}/task/${id}`)
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
		type: 'DELETE_TASK',
		payload: {
			data
		}
	};
};



export const editTask = (id) => {
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

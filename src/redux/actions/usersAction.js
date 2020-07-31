import axios from 'axios';

const apiUrl = process.env.REACT_APP_API_URL;

// POST new user to API
export const addUser = (values) => {
	return (dispatch) => {
		return axios
			.post(`${apiUrl}/users`, values)
			.then((response) => {
				// dispatch(addUserSuccess(response.data));
				// dispatch(createStorage(response.data.data._id));
				console.log(response);
				
			})
			.catch((error) => {
				alert(error.response.data);
				console.log(error);
				throw error;
			});
	};
};

export const addUserSuccess = (data) => {
	return {
		type: 'POST_USER',
		payload: { data }
	};
};


export const loginUser = (values, history) => {
	return (dispatch) => {
		return axios
			.post(`${apiUrl}/users/login`, values)
			.then((response) => {
				localStorage.setItem('id', response.data.id);
				localStorage.setItem('role', response.data.role);
				localStorage.setItem('message', response.data.message);
				dispatch(newLogin(response.data.role, history))
                
			})
			.catch((error) => {
				// alert(error.response.data);
				throw error;
			});
	};
};

export const newLogin = (data, history) => {
	return () => {
		
		if(data === 'admin') {
			history.push('/admin')
			
		}
		else if(data === 'user') {
			history.push('/user')
		}
		// 	
		console.log(data);
		
	}
}

export const loginSuccess = (data) => {
	return {
		type: 'LOGIN',
		payload: {
			data
		}
	};
};
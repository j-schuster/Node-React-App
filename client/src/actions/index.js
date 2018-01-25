import axios from 'axios';
import { FETCH_USER, 
		 UPDATE_USER, ADD_JOB, 
		 GET_JOB_POST, 
		 GET_ALL_JOBS, 
		 ADD_SERVICE,
		 GET_ALL_SERVICES,
		 GET_SERVICE,
		 GET_USER_INFO,
		 CONTACT_USER,
		SAVE_JOB } from './types';

export const fetchUser = () => async dispatch => {
    const user = await axios.get('/api/current_user');

    dispatch({ type: FETCH_USER,
                user
              });
    };

export const updateUser = (data) => async dispatch => {	
	const updatedUser = await axios.post('/api/current_user', {data})

	dispatch({
		type: UPDATE_USER,
		updatedUser
	})
}

export const addJob = (data) => async dispatch => {
	const job = await axios.post('/api/jobs', {data});

	dispatch({
		type: ADD_JOB,
		job
	})
}

export const fetchJob = (id) => async dispatch => {
	const job = await axios.get(`/api/jobs/${id}`);

	dispatch({
		type: GET_JOB_POST,
		job
	})
}

export const fetchAllJobs = () => async dispatch => {
	const jobs = await axios.get('/api/jobs');

	dispatch({
		type: GET_ALL_JOBS,
		jobs
	})
}

export const fetchAllServices = () => async dispatch => {
	const services = await axios.get('/api/services');

	dispatch({
		type: GET_ALL_SERVICES,
		services
	})
}

export const fetchService = (id) => async dispatch => {
	const service = await axios.get(`/api/services/${id}`);

	dispatch({
		type: GET_SERVICE,
		service
	})
}

export const addService = (data) => async dispatch => {
	const addedService = await axios.post('/api/services', {data});

	dispatch({
		type: ADD_SERVICE,
		addedService
	})
} 

export const getUserInfo = (id) => async dispatch => {
	 const userInfo = await axios.get(`/api/user/${id}`);

	 dispatch({
	 	type: GET_USER_INFO,
	 	userInfo
	 })
}

export const contactUser = (data) => async dispatch => {
	const contactUser = await axios.post(`/api/contact`, {data});

	dispatch({
		type: CONTACT_USER,
		contactUser
	})
}

export const saveJob = (data) => async dispatch => {
	const savedJob = await axios.post('/api/savedJobs', {data})

	dispatch({
		type: SAVE_JOB,
		savedJob
	})
}














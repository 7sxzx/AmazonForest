import axios from 'axios';

// export const fetchReviews = (id) => {
// 	return axios.get(`/api/reviews?itemId=${id}`);
// };
export const fetchReviews = () => {
	return axios.get(`/api/reviews`);
};

export const fetchReview = (id) => {
	return axios.get(`/api/reviews/${id}`);
};

export const createReview = (data) => {
	return axios.post(`/api/reviews/`, data);
};

export const updateReview = (review, id) => {
	return axios.patch(`api/reviews/${id}`, review);
};

// export const deleteReview = (review) => {
// 	return axios.delete(`/api/items/${itemId}/reviews/${review.id}`);
// };

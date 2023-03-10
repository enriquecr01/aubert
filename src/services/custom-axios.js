import axios from 'axios';

const customAxios = axios.create({
    timeout: 10000, 
});

const requestHandler = request => {
    // Token will be dynamic so we can use any app-specific way to always   
    // fetch the new token before making the call

    let token = localStorage.getItem("token");
    request.headers.Authorization = `Bearer ${ token }`;
  
    return request;
};

const errorHandler = error => {
    return Promise.reject(error);
};

customAxios.interceptors.request.use(
    (request) => requestHandler(request),
    (error) => errorHandler(error)
);

// https://blog.clairvoyantsoft.com/intercepting-requests-responses-using-axios-df498b6cab62
export default customAxios;


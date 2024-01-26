// import axios from 'axios';

// const BASE_URL = 'https://api.worldnewsapi.com/api/v1/';
// const API_KEY = '9fa6d511acff4039bdfe3a7ff8f3872e'; // Replace 'YOUR_API_KEY' with your actual API key
// const instance = axios.create({
//   baseURL: BASE_URL,
//   headers: {
//     Authorization: `Bearer ${API_KEY}`,
//   },
// });
// export const fetchDataFromAPI = async (language = 'en') => {
//   try {
//     const response = await instance.get('/news', {
//       params: {
//         language,
//         // Any other parameters required by the API
//       },
//     });
//     return response.data;
//   } catch (error) {
//     console.error('Error fetching data:', error);
//     throw error;
//   }
// };
// export const searchNews = async (searchQuery, language = 'en') => {
//   try {
//     const response = await instance.get('/search-news', {
//       params: {
//         q: searchQuery,
//         language,
//         // Other parameters for search if needed
//       },
//     });
//     return response.data;
//   } catch (error) {
//     console.error('Error searching news:', error);
//     throw error;
//   }
// };

// export default instance;


// import axios from 'axios';

// const BASE_URL = 'https://api.worldnewsapi.com/api/v1/';
// const API_KEY = '9fa6d511acff4039bdfe3a7ff8f3872e'; // Replace 'YOUR_API_KEY' with your actual API key

// const instance = axios.create({
//   baseURL: BASE_URL,
// });

// instance.interceptors.request.use(
//   (config) => {
//     config.headers['Content-Type'] = 'application/json';
//     config.headers['Authorization'] = `Bearer ${API_KEY}`;
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );
// instance.interceptors.response.use(
//   (response) => {
//     // Accessing the response headers
//     const quotaRequest = response.headers['x-api-quota-request'];
//     const quotaUsed = response.headers['x-api-quota-used'];

//     console.log('Quota Request:', quotaRequest);
//     console.log('Quota Used:', quotaUsed);

//     return response;
//   },
//   (error) => {
//     console.error('Error:', error);
//     return Promise.reject(error);
//   }
// );
// export const fetchDataFromAPI = async (language = 'en') => {
//   try {
//     const response = await instance.get('/news', {
//       params: {
//         language,
//         // Any other parameters required by the API
//       },
//     });
//     return response.data;
//   } catch (error) {
//     console.error('Error fetching data:', error);
//     throw error;
//   }
// };

// export const searchNews = async (searchQuery, language = 'en') => {
//   try {
//     const response = await instance.get('/search-news', {
//       params: {
//         q: searchQuery,
//         language,
//         // Any other parameters for search if needed
//       },
//     });
//     return response.data;
//   } catch (error) {
//     console.error('Error searching news:', error);
//     throw error;
//   }
// };

// export default instance;






// import axios from 'axios';

// const BASE_URL = 'https://api.worldnewsapi.com/api/v1/';
// const API_KEY = '9fa6d511acff4039bdfe3a7ff8f3872e'; // Replace 'YOUR_API_KEY' with your actual API key

// const instance = axios.create({
//   baseURL: BASE_URL,
// });

// instance.interceptors.request.use(
//   (config) => {
//     config.headers['Content-Type'] = 'application/json';
//     config.headers['Authorization'] = `Bearer ${API_KEY}`;
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// export const fetchDataFromAPI = async (language = 'en') => {
//   try {
//     const response = await instance.get(BASE_URL+API_KEY, {
//       params: {
//         language,
//       },
//     });
//     return response.data;
//   } catch (error) {
//     console.error('Error fetching data:', error);
//     throw error;
//   }
// };

// export const searchNews = async (searchQuery, language = 'en') => {
//   try {
//     const response = await instance.get('/search-news', {
//       params: {
//         q: searchQuery,
//         language,
//         // Any other parameters for search if needed
//       },
//     });
//     return response.data;
//   } catch (error) {
//     console.error('Error searching news:', error);
//     throw error;
//   }
// };

// export default instance;












// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

// const apiKey = '8cfdec75';
// const apiUrl = 'http://www.omdbapi.com/';

// // Create an Axios instance with interceptors and headers
// const axiosInstance = axios.create({
//   baseURL: apiUrl,
//   params: {
//     apikey: apiKey,
//   },
// });

// axiosInstance.interceptors.request.use(
//   (config) => {
//     // Add any headers or request transformations here
//     config.headers['Authorization'] = `Bearer ${'8cfdec75'}`;
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// axiosInstance.interceptors.response.use(
//   (response) => {
//     // Any additional processing of responses can be done here
//     return response;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// // Async action to fetch movies
// export const fetchMovies = createAsyncThunk('movies/fetchMovies', async (searchTerm) => {
//   try {
//     const response = await axiosInstance.get('', { params: { s: searchTerm } });
//     return response.data;
//   } catch (error) {
//     throw Error(error.response?.data?.Error || 'Failed to fetch movies.');
//   }
// });

// // ... (rest of the slice remains the same)


/**axios is javascript library that is used to interact with API to
 * hit API endpoints using HTTP protocols.
 * We will send HTTP requests to jsonplaceholder API
 */
// import axios from "axios";

// const moviesInstance = axios.create();


// moviesInstance.interceptors.response.use(
//  (response) => {
//       return response;
//      },
//  (error) => {
//       return Promise.reject(error);
//      }
// );


// export const fetchMoviesData = () => {
   
//    return moviesInstance.get('https://api.worldnewsapi.com/api/v1=9fa6d511acff4039bdfe3a7ff8f3872e');
// };
// export default moviesInstance;











// https://api.worldnewsapi.com/search-news?api-key=9fa6d511acff4039bdfe3a7ff8f3872e












// import axios from "axios";

// const instance = axios.create();

// instance.interceptors.request.use(function (config) {
//   // document.getElementById('overlay').style.display = 'block';
//   // document.getElementById('overlay').style.display = 'block';
// //   console.log('Request config:', config); // Logging the request config
//   return config;
// }, function (error) {
//   return Promise.reject(error);
// });

// instance.interceptors.response.use(function (response) {
//   // document.getElementById('overlay').style.display = 'none'
  
// //   console.log('Response:', response); // Logging the response
//   return response;
// }, function (error) {
//   return Promise.reject(error);
// });

// export const fetchNewsData = () => {
//   return instance.get('https://api.worldnewsapi.com/search-news?api-key=9fa6d511acff4039bdfe3a7ff8f3872e', {
//     headers: {
//       'Content-Type': 'application/json',
//       'Authorization': 'Bearer vxbasx?/~~9(sajhx677!@>>jk788ZOP90>:"/'
//     }
//   });
// };

// export default instance;





// import axios from "axios";

// const instance = axios.create();

// // Add a request interceptor
// instance.interceptors.request.use(
//   function (config) {
//     const apiKey = '9fa6d511acff4039bdfe3a7ff8f3872e'; // Replace with your actual API key
//     config.headers['Authorization'] = `Bearer ${apiKey}`;
//     return config;
//   },
//   function (error) {
//     return Promise.reject(error);
//   }
// );

// // Add a response interceptor
// instance.interceptors.response.use(
//   function (response) {
//     // You can handle the response here if needed
//     return response;
//   },
//   function (error) {
//     return Promise.reject(error);
//   }
// );

// export const fetchNewsData = () => {
//   return instance.get('https://api.worldnewsapi.com/search-news', {
//     params: {
//       'api-key': '9fa6d511acff4039bdfe3a7ff8f3872e' // You can also pass the API key as a query parameter if needed
//     },
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   });
// };

// export default instance;






import axios from "axios";

const instance = axios.create();

instance.interceptors.request.use(
  function (config) {
    const apiKey = '5673a582c7204eb4aac96c939d25390d'; 
    config.headers['Authorization'] = `Bearer ${apiKey}`;
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// export const fetchBitcoinTechnologyData = () => {
//   return instance.get(`https://newsapi.org/v2/everything?q=bitcoin`);
// };
// export const fetchSportsData = () => {
//   return instance.get(`https://newsapi.org/v2/everything?q=sports`);
// };
export const fetchNewsData = () => {
  return instance.get(`https://newsapi.org/v2/everything?q=today`);
};
// export const fetchNewsData = () => {
//   return instance.get(`https://newsapi.org/v2/top-headlines?country=us`);
// };
// export const fetchFinanceData = () => {
//    return instance.get(`https://newsapi.org/v2/everything?q=finance`)
//    };

export const fetchStoriesData = () => {
   return instance.get(`https://newsapi.org/v2/everything?q=stories`)
   };



export default instance;

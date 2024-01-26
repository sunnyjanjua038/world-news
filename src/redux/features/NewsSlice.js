// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import { fetchDataFromAPI, searchNews } from '../../Api/apiService';

// export const fetchNewsData = createAsyncThunk(
//   'news/fetchNewsData',
//   async (language, thunkAPI) => {
//     try {
//       const response = await fetchDataFromAPI(language);
//       return response;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

// export const searchNewsData = createAsyncThunk(
//   'news/searchNewsData',
//   async ({ searchQuery, language }, thunkAPI) => {
//     try {
//       const response = await searchNews(searchQuery, language);
//       return response;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

// const NewsSlice = createSlice({
//   name: 'news',
//   initialState: {
//     data: [],
//     loading: false,
//     error: null,
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchNewsData.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(fetchNewsData.fulfilled, (state, action) => {
//         state.loading = false;
//         state.data = action.payload;
//       })
//       .addCase(fetchNewsData.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       })
//       .addCase(searchNewsData.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(searchNewsData.fulfilled, (state, action) => {
//         state.loading = false;
//         state.data = action.payload;
//       })
//       .addCase(searchNewsData.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       });
//   },
// });

// export default NewsSlice.reducer;






// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import { fetchNewsData } from '../../Api/apiService'; // Replace with your correct path to fetch data

// export const getNewsData = createAsyncThunk('news/getNewsData', async () => {
//   try {
//     const response = await fetchNewsData('news', 'en'); // Fetch 'news' with default language 'en'
//     console.log("articles data in Slice",response.data.articles);
//     const articlesData=response.data.articles;
//     console.log("articlesData",articlesData);
//     return articlesData; // Assuming the API response contains the required news data
//   } catch (error) {
//     throw error;
//   }
// });


// const initialState = {
//   news: [],
//   loading: false,
//   error: null,
// };

// const NewsSlice = createSlice({
//   name: 'news',
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(getNewsData.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(getNewsData.fulfilled, (state, action) => {
//         state.loading = false;
//         state.news = action.payload;
//       })
//       .addCase(getNewsData.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       });
//   },
// });
// export default NewsSlice.reducer;








// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import { fetchBitcoinTechnologyData,fetchNewsData,fetchSoortsData,fetchFinanceData,fetchStoriesData} from '../../Api/apiService'; // Replace with the correct path to fetch data
//   // import {fetchStoriesData} from '../../Api/apiService'
 

//   export const getStoriesData = createAsyncThunk('stories/getBitcoinNews', async () => {
//   try {
//     const response = await fetchStoriesData('stories'); // Fetch Bitcoin news data from the API
//     // return response.data.articles;
//     const SportsData= response.data.articles;
//     console.log("articlesData",SportsData);
//     return SportsData
//   } catch (error) {
//     throw error;
//   }
// });

// export const getNewsData = createAsyncThunk('latestnews/getNewsData', async () => {
//   try {
//     const response = await fetchNewsData('latestnews'); 
//     console.log("articles data in Slice",response.data.articles);
//     // return response.data.articles
//     const articlesData= response.data.articles;
//     console.log("articlesData",articlesData);
//     return articlesData
//     // return articlesData; // Assuming the API response contains the required news data
//   } catch (error) {
//     throw error;
//   }
// });

// // export const getBitcoinNews = createAsyncThunk('news/getBitcoinNews', async () => {
// //   try {
// //     const response = await fetchBitcoinTechnologyData('bitcoin'); // Fetch Bitcoin news data from the API
// //     return response.data.articles;
    
// //   } catch (error) {
// //     throw error;
// //   }
// // });

// // export const getTechnologyNews = createAsyncThunk('news/getTechnologyNews', async () => {
// //   try {
// //     const response = await fetchBitcoinTechnologyData('technology'); 
// //     return response.data.articles;
// //   } catch (error) {
// //     throw error;
// //   }
// // });
// // export const getSportsNews = createAsyncThunk('sportsnews/getSportsNews', async () => {
// //   try {
// //     const response = await fetchSoortsData('sportsnews'); 
// //     // const sportsNews=response.data.articles;
// //     // console.log("Sports News",sportsNews);
// //     return response.data.articles;
   
// //   } catch (error) {
// //     throw error;
// //   }
// // });
// // export const getFinanceData = createAsyncThunk('finance/getFinanceData', async () => {
// //   try {
// //     const response = await fetchFinanceData('finance'); 
// //     const financeData = response.data.articles;
// //     return financeData;
// //   } catch (error) {
// //     throw error;
// //   }
// // });

// const initialState = {
//   stories:[],
//   loadingStories: false,
//   errorStories:null,
//   // bitcoinNews: [],
//   // technologyNews: [],
//    latestnews:[],
//   // sportsnews:[],
//   // finance:[],
//   // loadingfinance: false,
//   // errorfinance: null,
//   // loadingSports:false,
//   // errorSports:null,
//    loading:false,
//    error: null,
//   // loadingBitcoin: false,
//   // loadingTechnology: false,
//   // errorBitcoin: null,
//   // errorTechnology: null,
// };

// const NewsSlice = createSlice({
//   name: 'news',
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//    builder
//       // .addCase(getBitcoinNews.pending, (state) => {
//       //   state.loadingBitcoin = true;
//       //   state.errorBitcoin = null;
//       // })
//       // .addCase(getBitcoinNews.fulfilled, (state, action) => {
//       //   state.loadingBitcoin = false;
//       //   state.bitcoinNews = action.payload;
//       // })
//       // .addCase(getBitcoinNews.rejected, (state, action) => {
//       //   state.loadingBitcoin = false;
//       //   state.errorBitcoin = action.error.message;
//       // })
//       // .addCase(getTechnologyNews.pending, (state) => {
//       //   state.loadingTechnology = true;
//       //   state.errorTechnology = null;
//       // })
//       // .addCase(getTechnologyNews.fulfilled, (state, action) => {
//       //   state.loadingTechnology = false;
//       //   state.technologyNews = action.payload;
//       // })
//       // .addCase(getTechnologyNews.rejected, (state, action) => {
//       //   state.loadingTechnology = false;
//       //   state.errorTechnology = action.error.message;
//       // })
//       .addCase(getNewsData.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(getNewsData.fulfilled, (state, action) => {
//         state.loading = false;
//         state.latestnews = action.payload;
//       })
//       .addCase(getNewsData.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       })
//       // .addCase(getSportsNews.pending, (state) => {
//       //   state.loadingSports = true;
//       //   state.errorSports = null;
//       // })
//       // .addCase(getSportsNews.fulfilled, (state, action) => {
//       //   state.loadingSports = false;
//       //   state.sportsnews = action.payload;
//       // })
//       // .addCase(getSportsNews.rejected, (state, action) => {
//       //   state.loadingSports = false;
//       //   state.errorSports = action.payload;
//       // })
//       // .addCase(getFinanceData.pending, (state) => {
//       //   state.loadingfinance = true;
//       //   state.errorfinance = null;
//       // })
//       // .addCase(getFinanceData.fulfilled, (state, action) => {
//       //   state.loadingfinance = false;
//       //   state.finance = action.payload;
//       // })
//       // .addCase(getFinanceData.rejected, (state, action) => {
//       //   state.loadingfinance = false;
//       //   state.errorfinance = action.payload;
//       // })
//       .addCase(getStoriesData.pending, (state) => {
//         state.loadingfinance = true;
//         state.errorStories = null;
//       })
//       .addCase(getStoriesData.fulfilled, (state, action) => {
//         state.loadingStories = false;
//         state.stories = action.payload;
//       })
//       .addCase(getStoriesData.rejected, (state, action) => {
//         state.loadingfinance = false;
//         state.errorStories = action.payload;
//       });


      
//   },
// });

// export default NewsSlice.reducer;
// // export { getBitcoinNews, getTechnologyNews };









// import { createSlice } from '@reduxjs/toolkit';
// import {fetchNewsData, fetchStoriesData } from '../../Api/apiService';
// export const getStoriesData = () => async (dispatch) => {
//   try {
//     const response = await fetchStoriesData('stories');
//     const storiesData = response.data.articles;
//     console.log('This is stories data',storiesData);
//     dispatch(setStoriesData(storiesData));
//   } 
//   catch (error) {
//     console.log('Stores data not found',error)
//   }};


// export const getNewsData = () => async (dispatch) => {
//   try {
//     const response = await fetchNewsData('latestnews');
//     const newsData = response.data.articles;
//     dispatch(setNewsData(newsData));
//   } catch (error) {
//     console.log('News data not found',error)
//   }};
// const initialState = {
//   stories: [],
//   latestnews: [],
// };
// const NewsSlice = createSlice({
//   name: 'news',
//   initialState,
//   reducers: {
//     setStoriesData(state, action) {
//       state.stories = action.payload;
//     },
//     setNewsData(state, action) {
//       state.latestnews = action.payload;
//     },},
// });
// export const { setStoriesData, setNewsData } = NewsSlice.actions;
// export default NewsSlice.reducer;










import { createSlice } from '@reduxjs/toolkit';
import { fetchNewsData, fetchStoriesData } from '../../Api/apiService';
export const getStoriesData = () => (dispatch) => {
  fetchStoriesData('stories')
    .then((response) => {
      dispatch(setStoriesData(response.data.articles));
    })
    .catch((error) => {
      console.log('Error fetching stories:', error);
    });
};
export const getNewsData = () => (dispatch) => {
  fetchNewsData('latestnews')
    .then((response) => {
      dispatch(setNewsData(response.data.articles));
    })
    .catch((error) => {
      console.log('Error fetching news:', error);
    });
};
const initialState = {
  stories: [],
  latestnews: [],
};
const NewsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    // action creater
    setStoriesData(state, action) {
      state.stories = action.payload;
    },
    setNewsData(state, action) {
      state.latestnews = action.payload;
    },
  },
});
export const { setStoriesData, setNewsData } = NewsSlice.actions;
export default NewsSlice.reducer;

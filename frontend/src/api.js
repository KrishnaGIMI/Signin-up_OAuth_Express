import store from "../src/redux/store"

const api = axios.create({
  baseURL: 'http://localhost:3001/api',
  withCredentials: true // important to send cookies
})

//U Cant use react hooks inside of an axios api
// attach access token to every request if present
api.interceptors.request.use((config) => {
  //const authState = useSelector(state => state.authReducer)
  const token = store.getState().authReducer.token;
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

api.interceptors.response.use(
  (res) => res,
  async (error) => {
    const originalRequest = error.config;
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const token = store.getState().authReducer.token;
        const r = await axios.post('http://localhost:3001/auth/refresh', {accessToken: token}, { withCredentials: true });
        const newToken = r.data.accessToken;
        store.dispatch(setToken(newToken));
        originalRequest.headers.Authorization = `Bearer ${newToken}`;
        return api(originalRequest);
      } catch (err) {
        // refresh failed — logout
        store.dispatch(logout());
        return Promise.reject(err);
      }
    }
    return Promise.reject(error);
  }
);

export default api;
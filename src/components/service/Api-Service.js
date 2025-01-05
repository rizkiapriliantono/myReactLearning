import axios from 'axios';
// Create an Axios instance with base configuration
const apiClient = axios.create({
  baseURL: 'https://bwacharity.fly.dev', // Proxy akan mengarahkan ke https://prod-qore-app.qorebase.io
//   baseURL: 'https://jsonplaceholder.typicode.com',
  timeout: 10000, // Timeout dalam milidetik
});

// Tambahkan Header
apiClient.interceptors.request.use(
  (config) => {
    config.headers['Content-Type'] = 'application/json';
    config.headers['accept'] = 'application/json';
    config.headers['x-api-key'] = process.env.REACT_APP_APIKEY; // API Key
    return config;
  },
  (error) => Promise.reject(error)
);

// Tangani response
apiClient.interceptors.response.use(
  (response) => response.data,
  (error) => {
    if (error.response) {
      console.error('Error Response:', error.response.data);
    } else if (error.request) {
      console.error('No Response Received:', error.request);
    } else {
      console.error('Request Error:', error.message);
    }
    return Promise.reject(error);
  }
);

// Fungsi untuk mendapatkan nama Employee
apiClient.getDataInformation = async () => {
  return apiClient.get('/items');
// return apiClient.get('/todos/1');
};

export default apiClient;
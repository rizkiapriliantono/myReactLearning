import axios from 'axios';

// Membuat instance Axios dengan konfigurasi dasar
const apiClient = axios.create({
  baseURL: 'https://bwacharity.fly.dev', // URL utama untuk semua request
  timeout: 10000, // Timeout dalam milidetik
});

// Menambahkan header pada setiap permintaan
apiClient.interceptors.request.use(
  (config) => {
    config.headers['Content-Type'] = 'application/json';
    config.headers['accept'] = 'application/json';
    config.headers['x-api-key'] = process.env.REACT_APP_APIKEY; // API Key dari environment
    return config;
  },
  (error) => {
    console.error('Request Error:', error);
    return Promise.reject(error);
  }
);

// Menangani response dan error
apiClient.interceptors.response.use(
  (response) => {
    // Mengembalikan data langsung jika respons sukses
    return response.data;
  },
  (error) => {
    if (error.response) {
      // Error dari server (HTTP status code 4xx atau 5xx)
      console.error('Error Response:', error.response.data);
    } else if (error.request) {
      // Tidak ada respons yang diterima
      console.error('No Response Received:', error.request);
    } else {
      // Error konfigurasi atau permintaan
      console.error('Request Error:', error.message);
    }
    return Promise.reject(error);
  }
);

// Fungsi untuk mendapatkan data dari endpoint '/items'
apiClient.getDataInformation = async () => {
  try {
    const data = await apiClient.get('/items');
    console.log('Fetched Data:', data);
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

// Fungsi untuk menambahkan data baru
// apiClient.addDataInformation = async (payload) => {
//   try {
//     const data = await apiClient.post('/items', payload);
//     console.log('Data Added:', data);
//     return data;
//   } catch (error) {
//     console.error('Error adding data:', error);
//     throw error;
//   }
// };

// Fungsi untuk memperbarui data
// apiClient.updateDataInformation = async (id, payload) => {
//   try {
//     const data = await apiClient.put(`/items/${id}`, payload);
//     console.log('Data Updated:', data);
//     return data;
//   } catch (error) {
//     console.error('Error updating data:', error);
//     throw error;
//   }
// };

// Fungsi untuk menghapus data
// apiClient.deleteDataInformation = async (id) => {
//   try {
//     const data = await apiClient.delete(`/items/${id}`);
//     console.log('Data Deleted:', data);
//     return data;
//   } catch (error) {
//     console.error('Error deleting data:', error);
//     throw error;
//   }
// };

export default apiClient;

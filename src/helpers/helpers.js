import axios from 'axios';

export const reqAxios = async (method, url, data) => {
  try {
    const response = await axios({
      method: method,
      url: url,
      data: data,
    });
    return response;
  } catch (error) {
    return error;
  }
};


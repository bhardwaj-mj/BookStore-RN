import axios from 'axios';

export const myAxiosGetRequest = async () => {
  const res = await axios({
    method: 'get',
    url: 'http://192.168.0.140:4003/book',
  });
  return res;
};

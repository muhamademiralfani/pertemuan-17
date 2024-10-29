import axios from 'axios';

console.log('loding..');
axios
  .get(`https://lumoshive-academy-media-api.vercel.app/api/games`)
  .then((res) => {
    headers : {
        "x-api-key" : "camp-id"
    }
  })
  .catch((err) => {
    console.log(err);
  });

import axios from "axios";
const route = "http://localhost:3000"

const imgRecognition = async (uri) =>{
    const json = {uri: uri};
    console.log(json);
    const data = await axios.post(route+'/image_recognition', json)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return error
    });
    return data;
}

module.exports = imgRecognition;

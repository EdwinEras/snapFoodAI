import axios from "axios";
const route = "http://localhost:3000"
const route2 = "http://192.168.2.143:3000"
const route3 = "http://172.20.10.5:3000"

const imgRecognition = async (uri) =>{
    const formData = new FormData();
    formData.append('image', {
      uri: uri,
      type: 'image/jpeg',
      name: 'image.jpg',
    });
    const data = await axios.post(route3+'/image_recognition', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    .then(response => response.data)
    .catch(error => error)
    return data;
}

module.exports = imgRecognition;

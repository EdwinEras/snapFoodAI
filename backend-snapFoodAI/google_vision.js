const vision = require('@google-cloud/vision');
const fs = require('fs');
const path = require('path');

const client = new vision.ImageAnnotatorClient({
    keyFilename: 'snapfoodai-key.json'
});

// async function uriToBase64(uri) {
//     try {
//       const fileBuffer = fs.readFileSync(uri);
//       const base64Image = fileBuffer.toString('base64');
//       console.log('Base64 Image:', base64Image);
//       return base64Image;
//     } catch (error) {
//       console.error('Error URI to Base64: ', error);
//     }
//   }

async function mealDetection(imgUri) {
    const [ result ] = await client.labelDetection(imgUri);
    const labels = result.labelAnnotations;
    console.log(labels);
    return labels;
}

module.exports = mealDetection;


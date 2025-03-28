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
    // const [ result ] = await client.labelDetection(imgUri);
    const [result] = {"labelAnnotations":[{"boundingPoly": null, "confidence": 0, "description": "Fruit", "locale": "", "locations": [], "mid": "/m/02xwb", "properties": [], "score": 0.9893391132354736, "topicality": 0.21864494681358337}, {"boundingPoly": null, "confidence": 0, "description": "Produce", "locale": "", "locations": [], "mid": "/m/036qh8", "properties": [], "score": 0.9838829040527344, "topicality": 0.005581946112215519}, {"boundingPoly": null, "confidence": 0, "description": "Natural foods", "locale": "", "locations": [], "mid": "/m/08tlbj", "properties": [], "score": 0.9769315719604492, "topicality": 0.0030765829142183065}, {"boundingPoly": null, "confidence": 0, "description": "Food", "locale": "", "locations": [], "mid": "/m/02wbm", "properties": [], "score": 0.969595730304718, "topicality": 0.11363613605499268}, {"boundingPoly": null, "confidence": 0, "description": "Banana", "locale": "", "locations": [], "mid": "/m/09qck", "properties": [], "score": 0.9665544033050537, "topicality": 0.6187468767166138}, {"boundingPoly": null, "confidence": 0, "description": "Apple", "locale": "", "locations": [], "mid": "/m/014j1m", "properties": [], "score": 0.9446126818656921, "topicality": 0.24990753829479218}, {"boundingPoly": null, "confidence": 0, "description": "Cooking banana", "locale": "", "locations": [], "mid": "/m/09qdd", "properties": [], "score": 0.9239223003387451, "topicality": 0.08900392055511475}, {"boundingPoly": null, "confidence": 0, "description": "Ingredient", "locale": "", "locations": [], "mid": "/m/07xgrh", "properties": [], "score": 0.8772764801979065, "topicality": 0.007746815215796232}, {"boundingPoly": null, "confidence": 0, "description": "Bananas", "locale": "", "locations": [], "mid": "/m/013xk6", "properties": [], "score": 0.8597550392150879, "topicality": 0.00890698004513979}, {"boundingPoly": null, "confidence": 0, "description": "Saba banana", "locale": "", "locations": [], "mid": "/m/0g5pzh_", "properties": [], "score": 0.8306582570075989, "topicality": 0.008476793766021729}]};
    const labels = result.labelAnnotations.map(label => label.description);
    console.log(labels);
    return labels;
}

module.exports = mealDetection;


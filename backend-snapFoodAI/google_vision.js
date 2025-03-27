const vision = require('@google-cloud/vision');
const client = new vision.ImageAnnotatorClient({
    keyFilename: 'snapfoodai-key.json'
});

async function mealDeteaction(imgUri) {
    const [ result ] = await client.labelDetection(imgUri);
    const labels = result.labelAnnotations.map((label)=>{
        label.description.toLowerCase();
    })
    console.log('Labels:');
    labels.forEach(label => console.log(label.description));
}

module.exports = {mealDeteaction};


const admin = require("firebase-admin");
const serviceAccount = require("./snapfoodai-sdk.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
});

async function testFirestore() {
    try {
        const db = admin.firestore();  // ✅ Now admin is defined
        console.log("🔥 Firebase Admin SDK connected to Firestore!\n"+db);
    } catch (error) {
        console.error("❌ Firestore connection failed:", error);
    }
}

testFirestore();

module.exports = admin; 

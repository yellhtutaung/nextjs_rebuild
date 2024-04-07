const mongoose = require('mongoose');
export async function connectDb ()
{
    try{
        const conn = await mongoose.connect(process.env.MONGO_URL);
        console.log(`MongoDb is connected : ${conn.connection.host}`);
        console.log('******************************************');
    }catch (err) {
        console.log(`Connecting mongodb issue .. ${err}`);
    }
}

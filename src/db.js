import mongoose from'mongoose';

const mongoURI = 'mongodb+srv://gruapp_database:NofbfBbgoUdFqAuC@gruappdata.x2nvprw.mongodb.net/?retryWrites=true&w=majority&appName=gruappdata';

export const connectDB = async () => {
    try {
        await mongoose.connect(mongoURI, {
            ssl: true,
            
        });
        console.log('Conexión a MongoDB Atlas establecida');
    } catch (error) {
        console.error('Error al conectar a MongoDB Atlas:', error.message);
        process.exit(1);
    }
};
  
//NofbfBbgoUdFqAuC

//conexion a base de datos de forma local
// export const connectDB = async () => {
//     try{
//         await mongoose.connect('mongodb://localhost/fullstackdb');
//         console.log(">>> DB is connected");
//     }catch (error){
//         console.log(error);
//     }
// }  
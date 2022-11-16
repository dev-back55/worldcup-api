import app from './app.js';
import { sequelize } from './database/db.js'
import './models/Partidos.js'
import './models/Equipos.js'
//setting
const PORT = process.env.PORT || 3001;

//Iniciamos Server
async function main() {
    try {
        await sequelize.sync({ force: false })
        app.listen(PORT, () => {
            console.log(`Server on port:${PORT}`)
        })
    } catch (error) {
        console.error('Unable to connect to the database', error)
    }
}
main()

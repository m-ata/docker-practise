import express from "express";
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

class Server {
    public app: express.Application;

    constructor() {
        this.app = express();
        this.config();
        this.mongoDBConnection();
        dotenv.config();
      }

    private config(): void {
        this.app.set('port', 3000);
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use(cors());
    }

    private mongoDBConnection(): void {
        const connect = async () => {
            try {
                await mongoose.connect(`mongodb+srv://mata:12345ABCXYZm@ecommerce.3txsz.mongodb.net/sample_product`, {
                    useNewUrlParser: true
                });
                console.log('MongoDB Connected')
            } catch (e) {
                console.log(e);
                throw e;
            }
        }
        connect();
    }

    public start(): void {
        this.app.listen(this.app.get('port'), () => {
            console.log(`Server is listening at port ${this.app.get('port')}`)
        })
    }
}

const server = new Server();

server.start();
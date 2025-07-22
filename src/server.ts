import * as http from 'http';
import { getListEpisodes } from './controllers/podcasts.controller';

const server = http.createServer(async (req : http.IncomingMessage, res: http.ServerResponse) => {
    
    if (req.url === '/episodes' && req.method === 'GET') {
        await getListEpisodes(req, res);
    }

});



server.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
});
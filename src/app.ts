import * as http from 'http';
import { getFilteredEpisodes, getListEpisodes } from './controllers/podcasts.controller';
import { Routes } from './routes/routes';
import { HttpMethods } from './utils/http-methods';

export const app = http.createServer(async (request: http.IncomingMessage, response: http.ServerResponse) => {
    const [baseUrl, querystring] = request.url?.split('?') || [];

    if (baseUrl === Routes.LISTAR_PODCAST && HttpMethods.GET === request.method) {
        await getListEpisodes(request, response);
    }

    if (baseUrl === Routes.PODCAST_EPISODE && HttpMethods.GET === request.method) {
        await getFilteredEpisodes(request, response);
    }
});
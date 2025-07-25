import { IncomingMessage } from "http";
import { repositoryPodcast } from "../repositories/podcast.repository"
import { FilterPodcastModel } from "../models/filter-podcast-model";
import { StatusCode } from "../utils/status-code";
import { response } from "express";

export const serviceFilterEpisodes = async (
    podcastName: string | undefined)  : Promise<FilterPodcastModel> => {

    let responseFormat: FilterPodcastModel = {
        statusCode: 0,
        body: []
        }

    const querystring = podcastName?.split('?p=')[1];
    const data = await repositoryPodcast(querystring);

    if (data.length > 0) {
        responseFormat.statusCode = StatusCode.Ok;
        responseFormat.body = data;
    } else {
        responseFormat.statusCode = StatusCode.NoContent;
        responseFormat.body = [];
    }

    //se não houver querystring, retorna erro
    if (!querystring) {
        responseFormat.statusCode = StatusCode.BadRequest;
        responseFormat.body = [];
        //retornar mensagem de erro com "querystring não fornecida" para o usuário
        return {
            statusCode: StatusCode.BadRequest,
            body: []
        }
    }

    responseFormat.body = data;

    return responseFormat;
   
}
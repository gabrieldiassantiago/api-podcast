import { FilterPodcastModel } from "../models/filter-podcast-model";
import { repositoryPodcast } from "../repositories/podcast.repository";
import { StatusCode } from "../utils/status-code";

export const serviceListEpisodes = async () : Promise <FilterPodcastModel> => {

    const data = await repositoryPodcast();

    let responseFormat: FilterPodcastModel = {
        statusCode: 0,
        body: []
    }
    
    responseFormat.statusCode = data.length > 0 ? StatusCode.Ok : StatusCode.NoContent;
    responseFormat.body = data;

    return responseFormat;
}
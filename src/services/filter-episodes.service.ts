import { IncomingMessage } from "http";
import { repositoryPodcast } from "../repositories/podcast.repository"

export const serviceFilterEpisodes = async (
    podcastName: string | undefined) => {

    const querystring = podcastName?.split('?p=')[1];

    const data = await repositoryPodcast(querystring);
    const filteredEpisodes = data.filter(episode => episode.podcastName === querystring);
    return filteredEpisodes;
}
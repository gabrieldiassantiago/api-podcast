import { getPodCastData } from "../repositories/podcast.repository";

export const serviceListEpisodes = async (podcastName: string) => {
    const data = await getPodCastData();

    if (podcastName) {
        return data.filter(episode => episode.podcastName === podcastName);
    }

    return data;


}
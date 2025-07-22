import { getPodCastData } from "../repositories/podcast.repository";

export const serviceListEpisodes = async () => {
    const data = await getPodCastData();
    return data;
}
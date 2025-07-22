import { repositoryPodcast } from "../repositories/podcast.repository";

export const serviceListEpisodes = async () => {
    const data = await repositoryPodcast();

    if (!data || data.length === 0) {
        throw new Error("Não há episódios disponíveis");
        //retornar status code
        //retornar mensagem de erro
        
    }

    return data;
}
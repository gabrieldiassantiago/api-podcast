import fs from 'fs'; //file system module (ler e escrever arquivos)
import path from 'path'; //path module
import { PodcastEpisode } from '../models/podcast-model';

const pathData = path.join(__dirname, ".././repositories/podcast.json"); //path to the data file

export const repositoryPodcast = async (podcastName?: string) : Promise<PodcastEpisode[]> =>  {
    const data = fs.readFileSync(pathData, 'utf-8');
    let jsonFile = JSON.parse(data); 

    if (podcastName) {
        jsonFile = jsonFile.filter((episode: PodcastEpisode) => episode.podcastName === podcastName);
        return jsonFile;
    }
    
    return jsonFile;
}


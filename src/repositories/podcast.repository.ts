import fs from 'fs';
import path from "path";
import { PodcastEpisode } from '../models/podcast-model';

const pathData = path.join(__dirname, 'podcast.json');

export const getPodCastData = async (podcastName?:string) : Promise<PodcastEpisode[]> => {
    if (!fs.existsSync(pathData)) {
        throw new Error('Podcast data file not found');
    }
    const data = fs.readFileSync(pathData, 'utf-8');

    if (podcastName) {
        const episodes = JSON.parse(data) as PodcastEpisode[];
        return episodes.filter(episode => episode.podcastName === podcastName);
    }

    return JSON.parse(data) as PodcastEpisode[];

}

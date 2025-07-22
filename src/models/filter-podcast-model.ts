import { PodcastEpisode } from "./podcast-model";

export interface FilterPodcastModel {
    statusCode: number;
    body: PodcastEpisode[];
}
import { PodcastEpisode } from "../models/podcast-model";
import { getPodCastData } from "../repositories/podcast.repository";
import fs from 'fs/promises';
import path from 'path';

export const createEpisodesService = async (episodeData: PodcastEpisode) => {
    try {
        // Define o caminho do arquivo JSON
        const filePath = path.join(__dirname, '..', 'data', 'podcasts.json');

        // Lê o arquivo existente
        let episodes: PodcastEpisode[] = [];
        try {
            const fileContent = await fs.readFile(filePath, 'utf-8');
            episodes = JSON.parse(fileContent);
        } catch (error) {
            // Se o arquivo não existir, começamos com um array vazio
            episodes = [];
        }

        // Adiciona o novo episódio
        const newEpisode: PodcastEpisode = {
            ...episodeData,
            videoId: episodeData.videoId || `video-${Date.now()}`,
            
        };

        episodes.push(newEpisode);

        // Salva o arquivo atualizado
        await fs.writeFile(filePath, JSON.stringify(episodes, null, 2));

        return {
            success: true,
            message: 'Episódio criado com sucesso',
            data: newEpisode
        };

    } catch (error) {
        console.error('Erro ao criar episódio:', error);
        throw new Error('Erro ao criar episódio');
    }
};
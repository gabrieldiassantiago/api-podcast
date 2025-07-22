# API de Gerenciamento de Podcasts *educacional

## 📝 Descrição
API REST para gerenciamento de episódios de podcasts, permitindo criar, listar, atualizar e deletar informações sobre episódios.

## 🚀 Tecnologias Utilizadas
- Node.js
- TypeScript
- File System (fs) para persistência de dados

## 📁 Estrutura do Projeto
```
src/
├── controllers/
│   └── podcast.controller.ts
├── models/
│   └── podcast-model.ts
├── services/
│   └── create-episodes.service.ts
├── repositories/
│   └── podcast.repository.ts
└── data/
    └── podcast.json
```

## 📊 Modelo de Dados
### Episódio de Podcast
```typescript
interface PodcastEpisode {
    id: string;
    podcastName: string;
    episode: string;
    videoId: string;
    cover: string;
    link: string;
    category: string[];
    createdAt: string;
}
```

## 🔗 Endpoints

### Criar Episódio
```http
POST /api/episodes
```

#### Request Body
```json
{
    "podcastName": "Flow Podcast",
    "episode": "Flow #123",
    "videoId": "abc123",
    "cover": "https://exemplo.com/cover.jpg",
    "link": "https://exemplo.com/episodio",
    "category": ["entretenimento", "entrevista"]
}
```

#### Response (200 OK)
```json
{
    "success": true,
    "message": "Episódio criado com sucesso",
    "data": {
        "id": "1",
        "podcastName": "Flow Podcast",
        "episode": "Flow #123",
        "videoId": "abc123",
        "cover": "https://exemplo.com/cover.jpg",
        "link": "https://exemplo.com/episodio",
        "category": ["entretenimento", "entrevista"],
        "createdAt": "2025-07-22T10:30:00Z"
    }
}
```

### Listar Episódios
```http
GET /api/episodes
```

#### Response (200 OK)
```json
{
    "success": true,
    "data": [
        {
            "id": "1",
            "podcastName": "Flow Podcast",
            "episode": "Flow #123",
            "videoId": "abc123",
            "cover": "https://exemplo.com/cover.jpg",
            "link": "https://exemplo.com/episodio",
            "category": ["entretenimento", "entrevista"],
            "createdAt": "2025-07-22T10:30:00Z"
        }
    ]
}
```

## 🔧 Configuração e Instalação

1. **Clonar o repositório**
```bash
git clone https://github.com/gabrieldiassantiago/api-podcast.git
cd api-podcast
```

2. **Instalar dependências**
```bash
npm install
```

3. **Configurar ambiente**
- Criar pasta `data` no diretório `src`
```bash
mkdir src/data
```

4. **Executar o projeto**
```bash
npm run dev
```

## 🧪 Testes
Para executar os testes:
```bash
npm test
```

## 🔒 Tratamento de Erros
A API inclui tratamento de erros para:
- Arquivo JSON não encontrado
- Erro ao criar episódio
- Dados inválidos no request

## 📝 Exemplos de Uso

### Usando cURL
```bash
curl -X POST http://localhost:3000/api/episodes \
-H "Content-Type: application/json" \
-d '{
    "podcastName": "Flow Podcast",
    "episode": "Flow #123",
    "videoId": "abc123",
    "cover": "https://exemplo.com/cover.jpg",
    "link": "https://exemplo.com/episodio",
    "category": ["entretenimento", "entrevista"]
}'
```

## 🤝 Contribuição
1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença
Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
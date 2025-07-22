export enum StatusCode {
    // 1xx Informational
  Continue = 100, // O servidor recebeu a solicitação e o cliente pode continuar
  SwitchingProtocols = 101, // O servidor concorda em mudar de protocolo
  Processing = 102, // O servidor recebeu e está processando a requisição (WebDAV)

  // 2xx Success
  Ok = 200, // Requisição bem-sucedida
  Created = 201, // Recurso criado com sucesso
  Accepted = 202, // Requisição aceita para processamento
  NonAuthoritativeInformation = 203, // Informação não-autoritativa
  NoContent = 204, // Sem conteúdo de resposta
  ResetContent = 205, // Resetar conteúdo do documento
  PartialContent = 206, // Conteúdo parcial (usado em downloads)
  MultiStatus = 207, // Vários status (WebDAV)
  AlreadyReported = 208, // Já reportado (WebDAV)
  IMUsed = 226, // IM usado (RFC 3229)

  // 3xx Redirection
  MultipleChoices = 300, // Várias opções
  MovedPermanently = 301, // Movido permanentemente
  Found = 302, // Encontrado (anteriormente "Moved Temporarily")
  SeeOther = 303, // Veja outro
  NotModified = 304, // Não modificado (cache)
  UseProxy = 305, // Use proxy
  TemporaryRedirect = 307, // Redirecionamento temporário
  PermanentRedirect = 308, // Redirecionamento permanente

  // 4xx Client Error
  BadRequest = 400, // Requisição inválida
  Unauthorized = 401, // Não autorizado (necessita autenticação)
  PaymentRequired = 402, // Pagamento requerido (reservado)
  Forbidden = 403, // Proibido
  NotFound = 404, // Não encontrado
  MethodNotAllowed = 405, // Método não permitido
  NotAcceptable = 406, // Não aceitável
  ProxyAuthenticationRequired = 407, // Autenticação de proxy requerida
  RequestTimeout = 408, // Timeout da requisição
  Conflict = 409, // Conflito
  Gone = 410, // Recurso não está mais disponível
  LengthRequired = 411, // Comprimento requerido
  PreconditionFailed = 412, // Pré-condição falhou
  PayloadTooLarge = 413, // Payload muito grande
  URITooLong = 414, // URI muito longa
  UnsupportedMediaType = 415, // Tipo de mídia não suportado
  RangeNotSatisfiable = 416, // Intervalo não satisfatório
  ExpectationFailed = 417, // Falha na expectativa
  ImATeapot = 418, // Eu sou um bule de chá (Easter egg RFC 2324)
  MisdirectedRequest = 421, // Requisição mal direcionada
  UnprocessableEntity = 422, // Entidade não processável (WebDAV)
  Locked = 423, // Recurso bloqueado (WebDAV)
  FailedDependency = 424, // Falha de dependência (WebDAV)
  TooEarly = 425, // Muito cedo
  UpgradeRequired = 426, // Upgrade requerido
  PreconditionRequired = 428, // Pré-condição requerida
  TooManyRequests = 429, // Muitas requisições
  RequestHeaderFieldsTooLarge = 431, // Campos de cabeçalho muito grandes
  UnavailableForLegalReasons = 451, // Indisponível por razões legais

  // 5xx Server Error
  InternalServerError = 500, // Erro interno do servidor
  NotImplemented = 501, // Não implementado
  BadGateway = 502, // Gateway ruim
  ServiceUnavailable = 503, // Serviço indisponível
  GatewayTimeout = 504, // Timeout do gateway
  HTTPVersionNotSupported = 505, // Versão HTTP não suportada
  VariantAlsoNegotiates = 506, // Variante também negocia
  InsufficientStorage = 507, // Armazenamento insuficiente (WebDAV)
  LoopDetected = 508, // Loop detectado (WebDAV)
  NotExtended = 510, // Não estendido
  NetworkAuthenticationRequired = 511, // Autenticação de rede requerida
}
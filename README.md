Projeto Next.js IP Info

Este projeto utiliza o framework Next.js para criar uma aplicação web que recolhe informações relacionadas com endereços IP e domínios. Integra três APIs: ipify, WhoisXML API e ipinfo.io para obter o IP do utilizador, informações do registrar de domínio e dados de geolocalização, respetivamente.

APIs Utilizadas

1. ipify

   Propósito: Obter o endereço IP público do utilizador.
   Chave de API Necessária: Não

2. WhoisXML API

   Propósito: Obter informações do registrar de domínio com base no nome de domínio fornecido.
   Chave de API Necessária: Sim

3. ipinfo.io

   Propósito: Obter geolocalização e dados gerais com base no endereço IP.
   Chave de API Necessária: Não

Configuração

    IPIFY_API_KEY: Sua chave de API do ipify. (Não é necessário registo)
    WHOISXML_API_KEY: Sua chave de API do WhoisXML. (Registo necessário)

Notas Adicionais

    Certifique-se de que tem as chaves de API corretas para ipify e WhoisXML API.
    A aplicação fará pedidos para ipify, WhoisXML API e ipinfo.io para recolher as informações necessárias.
    Para implantação em produção, certifique-se de lidar adequadamente com os limites de taxa de API e erros.

Como usar:

Certifique-se que tem a versão mais recente do NodeJS e depois:

    Instale as dependências:

      npm install

      npm run dev

A aplicação estará disponível em http://localhost:3000.

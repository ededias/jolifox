# Configurações necessárias
Alterar o arquivo `.env.example` para `.env` e alterar os campos em branco.

```env
    NOTION_API_KEY=
    DATABASE_ID=
```


# Documentação da API


## Introdução

Esta é a documentação da API para gerenciar recursos que incluem informações de conteúdo, imagem e campanhas.

## Endpoints

Cria um novo recurso.

URL: api/v1/create

Método: POST

Corpo da Requisição:

````http
{
  "content": "Conteúdo de exemplo",
  "language": "English",
  "image": {
    "files": [
      {
        "type": "external",
        "name": "imagem-de-exemplo",
        "external": {
          "url": "https://picsum.photos/200"
        }
      },
      {
        "type": "external",
        "name": "imagem-de-exemplo",
        "external": {
          "url": "https://picsum.photos/200"
        }
      },
      {
        "type": "external",
        "name": "imagem-de-exemplo",
        "external": {
          "url": "https://picsum.photos/200"
        }
      }
    ]
  },
  "image_content": "conteudo",
  "description": "Descrição da página",
  "campaign": "Campanha de Exemplo",
  "where": "Localização exemplo",
  "plannedDate": "2024-12-20",
  "company": "jolifox"
}

````

---

Atualiza um dado.

URL: api/v1/update/:id

Método: POST

Corpo da Requisição:

````http
{
  "content": "Conteúdo de exemplo",
  "language": "English",
  "image": {
    "files": [
      {
        "type": "external",
        "name": "imagem-de-exemplo",
        "external": {
          "url": "https://picsum.photos/200"
        }
      },
      {
        "type": "external",
        "name": "imagem-de-exemplo",
        "external": {
          "url": "https://picsum.photos/200"
        }
      },
      {
        "type": "external",
        "name": "imagem-de-exemplo",
        "external": {
          "url": "https://picsum.photos/200"
        }
      }
    ]
  },
  "image_content": "conteudo",
  "description": "Descrição da página",
  "campaign": "Campanha de Exemplo",
  "where": "Localização exemplo",
  "plannedDate": "2024-12-20",
  "company": "jolifox"
}

````


---
## Endpoint: Obter uma lista de dados

### Método: `GET`
### URL: `/api/v1/`

### Descrição
Este endpoint permite obter as de várias campanhas. 
### Cabeçalhos da Requisição


## Endpoint: Obter listar uma unica campanha

### Método: `GET`
### URL: `/api/v1/list/:id`

### Descrição
Este endpoint permite obter dados de uma unica campanha. 
### Cabeçalhos da Requisição

| Cabeçalho         | Tipo   | Obrigatório | Descrição                       |
|-------------------|--------|-------------|---------------------------------|
| `id`   | String | Sim         | id da campanha que deseja buscar |



## Endpoint: excluir uma unica campanha

### Método: `GET`
### URL: `/api/v1/delete/:id`

### Descrição
Este endpoint irá excluir uma campanha. 
### Cabeçalhos da Requisição

| Cabeçalho         | Tipo   | Obrigatório | Descrição                       |
|-------------------|--------|-------------|---------------------------------|
| `id`   | String | Sim         | id da campanha que deseja excluir |

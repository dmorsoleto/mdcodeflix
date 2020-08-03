import config from '../config';

const URL_CATEGORIES = `${config.urlBackEnd}/categorias`;

function getAllWithVideos() {
  return fetch(`${URL_CATEGORIES}?embed_videos`)
    .then(async (response) => {
      if (response.ok) {
        const resposta = await response.json();
        return resposta;
      }

      throw new Error('Não foi possível pegar os dados :(');
    });
}

export default {
  getAllWithVideos,
};

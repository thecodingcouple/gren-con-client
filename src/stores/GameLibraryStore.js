import { defineStore } from 'pinia';

export const useGameLibraryStore = defineStore({
  id: 'GameLibraryStore',
  state: () => ({
    username: 'townsean',
    games: []
  }),
  getters: {
  },
  actions: {
    loadGameLibrary() {
      const url = `https://boardgamegeek.com/xmlapi2/collection?username=${this.username}&own=1`;

      fetch(url).then(response => response.text())
                .then(data => {
                  const parser = new DOMParser();
                  const document = parser.parseFromString(data, "text/xml");

                  const items = Array.from(document.getElementsByTagName("item"));
                  console.dir(items);

                  this.games = items.map(item => {
                    let nameChildNode = Array.from(item.children).find(c => c.nodeName == "name");
                    let name = nameChildNode.innerHTML;

                    let imageUrlChildNode = Array.from(item.children).find(c => c.nodeName == "image");
                    let imageUrl = imageUrlChildNode.innerHTML;

                    return {
                      name,
                      imageUrl
                    }
                  });
                });

      
    }
  }
})

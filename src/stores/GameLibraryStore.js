import { defineStore } from 'pinia';

export const useGameLibraryStore = defineStore({
  id: 'GameLibraryStore',
  state: () => ({
    username: 'townsean',
    games: [],
    gameDetails: {}
  }),
  getters: {
    count: (state) => state.games.length,
    roundedCount: (state) => Math.round(state.games.length / 10) * 10
  },
  actions: {
    async loadGameLibrary() {
      const url = `https://boardgamegeek.com/xmlapi2/collection?username=${this.username}&own=1`;

      await fetch(url).then(response => response.text())
                      .then(data => {
                        const parser = new DOMParser();
                        const document = parser.parseFromString(data, "text/xml");
                        const items = Array.from(document.getElementsByTagName("item"));

                        this.games = items.map(item => {
                          let nameChildNode = Array.from(item.children).find(c => c.nodeName == "name");
                          let name = nameChildNode.textContent;

                          let imageUrlChildNode = Array.from(item.children).find(c => c.nodeName == "image");
                          let imageUrl = imageUrlChildNode.textContent;

                          return {
                            name,
                            imageUrl
                          }
                        });
                      });

      
    },
    async getGameDetails(id) {
      if(this.gameDetails[id]) {
        return this.gameDetails[id]
      }

      const url = `https://boardgamegeek.com/xmlapi2/thing?id=${id}`;

      await fetch(url).then(response => response.text())
                      .then(data => {
                        const parser = new DOMParser();
                        const document = parser.parseFromString(data, "text/xml");

                        const items = Array.from(document.getElementsByName("item"));
                        const item = items[0];

                        if(!item) {
                          return;
                        }

                        const descriptionChildNode = Array.from(item.children).find(c => c.nodeName == "description");
                        const description = descriptionChildNode.textContent;

                        console.log(description);

                      });
    }
  }
})

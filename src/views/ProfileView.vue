<script>
const API_URL = `https://www.gren-con.com`

export default {
  data: () => ({
    events: [],
    profile: {}
  }),

  created() {
    // fetch profile and events on init
    this.profile = this.fetchData('/my-profile')
    this.events = this.fetchData('/my-events')
  },

  methods: {
    async fetchData(path) {
      const url = `${API_URL}${path}`
      return (await fetch(url)).json()
    }
  }
}
</script>

<template>
  <main>
    <h1>{{ profile }}</h1>
  </main>
  <section>
    <h2>My Events</h2>
    <ul>
      <li v-for="event in events">{{ event }}</li>
    </ul>
  </section>
</template>

<style>

</style>

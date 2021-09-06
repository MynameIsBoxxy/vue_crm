<template>
    
<div>
  <div class="page-title">
    <h3>{{'ProfileTitle' | localize}}</h3>
  </div>

  <form class="form" @submit.prevent="submitHandler">
    <div class="input-field">
      <input
          id="description"
          type="text"
          v-model = "name"
      >
      <label  :class="{active: name.length}" for="description">{{'Name' | localize}}</label>
      <span
            class="helper-text invalid">name</span>
    </div>

  <div class="switch">
    <label>
      English
      <input type="checkbox" v-model="isRuLocale">
      <span class="lever"></span>
      Русский
    </label>
  </div>


    <button class="btn waves-effect waves-light" type="submit">
      {{"Update" | localize}}
      <i class="material-icons right">send</i>
    </button>
  </form>
</div>
</template>

<style scoped>
  .switch {
    margin-bottom: 2rem;
  }
</style>

<script>
import {mapGetters, mapActions} from 'vuex'
export default {
  data: () => ({
    name: '',
    isRuLocale: true,
  }),
  mounted() {
    this.name = this.info.name
    this.isRuLocale = this.info.locale === "ru-RU"
  },
  computed: {
    ...mapGetters(['info']),
  },
    methods: {
      ...mapActions(['updateInfo']),
    async submitHandler() {
      
      
      try {
          await this.updateInfo({
            name: this.name,
            locale: this.isRuLocale ? 'ru-RU' : 'en-US'
          })
      } catch (error) {
        
      }
      

      
    }
  }
}
</script>
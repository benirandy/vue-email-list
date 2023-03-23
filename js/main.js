const { createApp } = Vue

createApp({
  data() {
    return {
      emailList: [],
      emailsGenerated: false
    }
  },
  
  methods: {
    generateEmails() {
      axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then(response => {
          this.emailList.push(response.data.response);
          if (this.emailList.length === 10) {
            this.emailsGenerated = true;
          }
        })
        .catch(error => {
          console.log(error);
        });
    }


  }

}).mount('#app')

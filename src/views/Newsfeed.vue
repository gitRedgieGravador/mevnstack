<template>
  <div>
    <div class="bv-example-row pd-side">
      <b-card>
        <b-row class="justify-content-md-center">
          <b-col cols="4" class="text-center">
            <img src="@/assets/image.png" class />
          </b-col>
          <b-col class="border-left">
            <h4>{{ badgename }}</h4>
            <p>{{ description }}</p>
            <p>Event: {{ event }}</p>
            <p>Venue: {{ venue }}</p>
            <p>Date: {{ date }} at {{ time }}</p>
            <p></p>
          </b-col>
        </b-row>
      </b-card>
    </div>
  </div>
</template>

<script>
export default {
  // data() {
  //   return {
  //     post: {},
  //     name: "Redgie Gravador",
  //     age: 22,
  //     gender: "Male",
  //     occupation: "Web Developer",
  //     years: 10,
  //     address: "Talamban, Cebu",
  //     email: "redgie@gmail.com",
  //     badgename: "Medical Mission",
  //     description:
  //       "This certificate is issue upon the active voluntarism offered",
  //     event: "Medical Mission for free vacination",
  //     venue: "Talamban health center",
  //     date: new Date().toDateString(),
  //     time: "9 AM"
  //   };
  // },
  // created() {
  //   let uri = `http://localhost:4000/posts/edit/${this.$route.params.id}`;
  //   this.axios.get(uri).then(response => {
  //     this.post = response.data;
  //   });
  // },
  // methods: {
  //   updatePost() {
  //     let uri = `http://localhost:4000/posts/update/${this.$route.params.id}`;
  //     this.axios.post(uri, this.post).then(() => {
  //       this.$router.push({ name: "posts" });
  //     });
  //   }
  // }
};
</script>
<style scoped>
#profile {
  height: 200px;
}
.pd-side {
  padding-left: 20px;
  padding-right: 20px;
}

div {
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
}
</style>

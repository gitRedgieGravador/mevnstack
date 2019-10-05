<template>
  <div>
    <div id="Updateinfo">
      <b-card class="text-center">
        <h1>Update Profile</h1>
      </b-card>
      <b-card>
        <b-form @submit="submitUpdates">
          <b-row>
            <b-col>
              <b-input-group prepend="Firstname" class="mb-3">
                <b-form-input aria-label="Firstname" v-model="newinfo.firstname"></b-form-input>
              </b-input-group>
            </b-col>
            <b-col>
              <b-input-group prepend="Lastname" class="mb-3">
                <b-form-input aria-label="Lastname" v-model="newinfo.lastname"></b-form-input>
              </b-input-group>
            </b-col>
          </b-row>
          <b-row>
            <b-col>
              <b-input-group prepend="Username" class="mb-3">
                <b-form-input aria-label="Username" v-model="newinfo.username"></b-form-input>
              </b-input-group>
            </b-col>
            <b-col cols="5">
              <b-input-group prepend="Age" class="mb-3">
                <b-form-input aria-label="Age" v-model="newinfo.age"></b-form-input>
              </b-input-group>
            </b-col>
          </b-row>
          <b-row>
            <b-col>
              <b-input-group prepend="Occupation" class="mb-3">
                <b-form-input aria-label="Occupation" v-model="newinfo.occupation"></b-form-input>
              </b-input-group>
            </b-col>
            <b-col cols="4">
              <b-input-group prepend="Years" class="mb-3">
                <b-form-input aria-label="Years" v-model="newinfo.years"></b-form-input>
              </b-input-group>
            </b-col>
          </b-row>
          <b-input-group prepend="Address" class="mb-3">
            <b-form-input aria-label="Address" v-model="newinfo.address"></b-form-input>
          </b-input-group>
          <b-input-group prepend="Email" class="mb-3">
            <b-form-input aria-label="Email" v-model="newinfo.email"></b-form-input>
          </b-input-group>
          <b-form-group label="Gender">
            <b-form-radio-group id="radio-gender" v-model="newinfo.gender" name="radio-gender">
              <b-form-radio value="Male">Male</b-form-radio>
              <b-form-radio value="Female">Female</b-form-radio>
            </b-form-radio-group>
          </b-form-group>
        </b-form>
        <button class="btn btn-primary btn-block btn-lg">Save</button>
      </b-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "Updateinfo",
  props: {
    username: String
  },
  data() {
    return {
      newinfo: {}
    };
  },
  created() {
    this.newinfo = {
      firstname: "Redgie",
      lastname: "Gravador",
      age: 22,
      gender: "Male",
      occupation: "Web Developer",
      years: 5,
      address: "Tamlamban Cebu",
      email: "redgie@gmail.com",
      username: "mrclay"
    };

    let uri_profile = `http://localhost:4000/user/regular/profile/`;
    this.axios.post(uri_profile).then(response => {
      this.newinfo = response.data;
    });
  },

  methods: {
    updateProfile() {
      let uri_sendUpdated = `http://localhost:4000/user/regular/profile/update/`;
      this.axios.post(uri_sendUpdated, this.newinfo).then(() => {
        // console.log(response.data);
      });
    }
  }
};
</script>
<style scoped>
div {
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
}
</style>

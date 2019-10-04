<template>
  <div id="userpage">
    <div class="bv-example-row pd-side">
      <b-row>
        <b-col class="border-right">
          <div class="text-center">
            <b-card>
              <img src="@/assets/profile.png" alt class="border" id="profile">
            </b-card>
            <div class="card-header">
              <h3>{{ name }}</h3>
              <button
                v-on:click="gotoUpdateProfile"
                class="btn btn-primary btn-block"
              >Update Profile</button>
            </div>
          </div>
          <div class="card-body">
            <h5 class="card-title">Personal Imformation</h5>
            <div class="card-text">
              <p>Username: {{ username }}</p>
              <p>Age: {{age}} years old</p>
              <p>Gender: {{ gender }}</p>
              <p>Occupation: {{occupation}}</p>
              <p>Experience: {{ years }} years of work experience</p>
              <p>Address: {{address}}</p>
              <p>Email: {{ email }}</p>
            </div>
          </div>
        </b-col>
        <b-col cols="9" class>
          <div class="bg-light text-center">
            <div>
              <b-tabs>
                <b-tab v-on:click="gotoNewsfeed" title="News feed" active align="left"></b-tab>
                <b-tab v-on:click="gotoBadgeList" title="Badge List" align="right"></b-tab>
              </b-tabs>
            </div>
          </div>
          <div v-if="isBadgeList">
            <div id="divBabge">
              <div v-for="(badge, index) in this.badgelist" :key="index">
                <b-card>
                  <b-row class="justify-content-md-center">
                    <b-col class="text-center">
                      <img src="@/assets/image.png" class>
                    </b-col>
                    <b-col cols="8" class="border-left">
                      <h4>{{ badge.badgename }}</h4>
                      <p>{{ badge.descriptions }}</p>
                      <p>Venue: {{ badge.venue }}</p>
                      <p>Date: {{ badge.date }} at {{ badge.time }}</p>
                      <p>Issued by: {{ badge.organization }}</p>
                      <p></p>
                    </b-col>
                  </b-row>
                </b-card>
              </div>
            </div>
          </div>
          <div v-if="isUpdateProfile">
            <b-card class="text-center">
              <h1>Update Profile</h1>
            </b-card>
            <b-card>
              <b-form>
                <b-row>
                  <b-col>
                    <b-input-group prepend="Firstname" class="mb-3">
                      <b-form-input aria-label="Firstname"></b-form-input>
                    </b-input-group>
                  </b-col>
                  <b-col>
                    <b-input-group prepend="Lastname" class="mb-3">
                      <b-form-input aria-label="Lastname"></b-form-input>
                    </b-input-group>
                  </b-col>
                </b-row>
                <b-row>
                  <b-col>
                    <b-input-group prepend="Username" class="mb-3">
                      <b-form-input aria-label="Username"></b-form-input>
                    </b-input-group>
                  </b-col>
                  <b-col cols="5">
                    <b-input-group prepend="Age" class="mb-3">
                      <b-form-input aria-label="Age"></b-form-input>
                    </b-input-group>
                  </b-col>
                </b-row>
                <b-row>
                  <b-col>
                    <b-input-group prepend="Occupation" class="mb-3">
                      <b-form-input aria-label="Occupation"></b-form-input>
                    </b-input-group>
                  </b-col>
                  <b-col cols="4">
                    <b-input-group prepend="Years" class="mb-3">
                      <b-form-input aria-label="Occupation"></b-form-input>
                    </b-input-group>
                  </b-col>
                </b-row>
                <b-input-group prepend="Address" class="mb-3">
                  <b-form-input aria-label="Address"></b-form-input>
                </b-input-group>
                <b-input-group prepend="Email" class="mb-3" v-model="email">
                  <b-form-input aria-label="Email"></b-form-input>
                </b-input-group>
                <b-form-group label="Gender">
                  <b-form-radio-group id="radio-gender" v-model="gender" name="radio-gender">
                    <b-form-radio value="Male">Male</b-form-radio>
                    <b-form-radio value="Female">Female</b-form-radio>
                  </b-form-radio-group>
                </b-form-group>
              </b-form>
              <button class="btn btn-primary btn-block btn-lg">Save</button>
            </b-card>
          </div>
          <div v-if="isNewsfeed">
              <b-row>
                <div v-for="(badge, index) in this.upcoming_list1" :key="index">
                <b-col class="text-center">
                  <b-card>
                    <img src="@/assets/image.png" class>
                    <h5>{{badge.name}}</h5>
                    <p>{{badge.venue}}</p>
                  </b-card>
                </b-col>
                </div>
              </b-row>
            <br>
            <b-row>
              <div v-for="(badge, index) in this.upcoming_list2" :key="index">
                <b-col class="text-center">
                  <b-card>
                    <img src="@/assets/image.png" class>
                    <h5>{{badge.name}}</h5>
                    <p>{{badge.venue}}</p>
                  </b-card>
                </b-col>
              </div>
            </b-row>
          </div>
        </b-col>
      </b-row>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      badgelist: [
        {
          badgename: "Medical Mission",
          description:
            "This certificate is issue upon the active voluntarism offered during the medical mission for free vacination",
          venue: "Talamban health center",
          date: new Date().toDateString(),
          time: "9 AM",
          organization: "Passerelles Numeriques"
        },
        {
          badgename: "Medical Mission",
          description:
            "This certificate is issue upon the active voluntarism offered during the medical mission for free vacination",
          venue: "Talamban health center",
          date: new Date().toDateString(),
          time: "9 AM",
          organization: "Passerelles Numeriques"
        }
      ],
      upcoming_list1: [
        { name: "Programming Workshop", venue: "J Center Mall Mandaue" },
        { name: "Programming Workshop", venue: "J Center Mall Mandaue" },
        { name: "Programming Workshop", venue: "J Center Mall Mandaue" }
      ],
      upcoming_list2: [
        { name: "Programming Workshop", venue: "J Center Mall Mandaue" },
        { name: "Programming Workshop", venue: "J Center Mall Mandaue" },
        { name: "Programming Workshop", venue: "J Center Mall Mandaue" }
      ],
      name: "Redgie Gravador",
      age: 22,
      gender: "Male",
      occupation: "Web Developer",
      years: 5,
      address: "Tamlamban Cebu",
      email: "redgie@gmail.com",
      username: "mrclay",
      isBadgeList: false,
      isNewsfeed: true,
      isUpdateProfile: false
    };
  },
  created() {
    let uri_badgelist = `http://localhost:4000/user/regular/${this.username}`;
    this.axios.post(uri_badgelist).then(response => {
      this.badgelist = response.data;
    });

    let uri_profile = `http://localhost:4000/user/regular/profile/${
      this.username
    }`;
    this.axios.post(uri_profile).then(response => {
      this.username = response.username;
      this.name = response.name;
      this.age = response.age;
      this.gender = response.gender;
      this.occupation = response.occupation;
      this.years = response.years;
      this.address = response.address;
      this.email = response.email;
    });
    let uri_upcomingbadge = `http://localhost:4000/user/regular/${
      this.username
    }`;
    this.axios.post(uri_upcomingbadge).then(response => {
      for (let i = 0; i <= 6; ++i) {
        if (i <= 3) {
          this.upcoming_list1 = response.data[i];
        } else {
          this.upcoming_list2 = response.data[i];
        }
      }
    });
  },
  methods: {
    updateProfile() {
      let uri = `http://localhost:4000/user/regular/profile/update/${
        this.username
      }`;
      this.axios.post(uri, this.post).then(() => {
        //this.upcoming_list = response.data;
      });
    },

    gotoNewsfeed() {
      this.isNewsfeed = true;
      this.isBadgeList = false;
      this.isUpdateProfile = false;
    },
    gotoBadgeList() {
      this.isBadgeList = true;
      this.isNewsfeed = false;
      this.isUpdateProfile = false;
    },
    gotoUpdateProfile() {
      this.isUpdateProfile = true;
      this.isBadgeList = false;
      this.isNewsfeed = false;
    }
  }
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

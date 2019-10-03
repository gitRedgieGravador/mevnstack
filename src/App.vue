<template>
  <div>
    <div id="header">
      <b-navbar toggleable="lg" type="dark" variant="primary">
        <b-navbar-brand>
          <img src="@/assets/image.png" id="bb-logo">
          <b-span class="font">Badgebook</b-span>
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-form>
              <ul class="navbar-nav">
                <li class="nav-item">
                  <b-input-group>
                    <b-form-input size="md" class="mr-ms-0" placeholder="Search"></b-form-input>
                    <b-input-group-append>
                      <b-button variant="info" type="submit">&#128269; Search</b-button>
                    </b-input-group-append>
                  </b-input-group>
                </li>
              </ul>
            </b-nav-form>
            <ul class="navbar-nav">
              <li class="nav-item">
                <router-link to="/" class="nav-link">Home</router-link>
              </li>

              <li class="nav-item">
                <router-link to="/user/regular" class="nav-link">Login</router-link>
              </li>
            </ul>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
      <br>
      <transition name="fade">
        <router-view></router-view>
      </transition>
    </div>`
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-active {
  opacity: 0;
}
#bb-logo {
  height: 50px;
}

.font {
  font-family: Impact, Charcoal, sans-serif;
  color: whitesmoke;
  font-size: 30px;
}

.center {
  margin: auto;
}

#header {
  position: sticky;
}
</style>

<script>
export default {};
</script>
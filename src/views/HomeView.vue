<script setup>
import TheFooter from "../components/partials/TheFooter.vue";
import TheServices from "../components/partials/TheServices.vue";
import TheSpecialBanner from "../components/partials/TheSpecialBanner.vue";
import ItemList from "../components/items/ItemList.vue";
import TheCategory from "../components/partials/TheCategory.vue";
import ThePartners from "../components/partials/ThePartners.vue";
import HelloWorld from "../components/HelloWorld.vue";
import TheNavbar from "../components/partials/TheNavbar.vue";
import IconShoppingCart from "../components/icons/IconShoppingCart.vue";
import IconUserProfile from "../components/icons/IconUserProfile.vue";
import TheAdvert from "../components/partials/TheAdvert.vue";
</script>

<template>
  <header class="relative overflow-hidden cover">
    <TheNavbar classes="text-white bg-sky-800/60" numclass="text-white">
      <template #shopCart>
        <IconShoppingCart classes="fill-white" />
      </template>

      <template #userProfile>
        <IconUserProfile color="#ffffff" />
      </template>
    </TheNavbar>

    <div class="items-center h-screen header-content bg-sky-800/40">
      <HelloWorld title="Raining Offers For Hot Summer!" msg="25% Off On All Products" />
    </div>
  </header>

  <main>
    <!-- Partners -->
    <ThePartners />
    <!-- End -->
    <!-- Category -->
    <TheCategory />
    <!-- End -->
    <div class="my-[6rem]"></div>
    <!-- Items List -->
    <ItemList />
    <!-- End -->
    <!-- Special Banner -->
    <TheSpecialBanner />
    <!-- End -->
    <!-- Our Services -->
    <TheServices />
    <!-- End -->
    <TheAdvert />
  </main>
  <!-- Footer -->
  <TheFooter />
  <!-- End -->
</template>

<style scoped>
.cover {
  background-image: url("@/assets/img/home-new-bg-free-img.jpg");
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}

.header-content {
  display: grid;
  /* grid-template-columns: 50% 50%; */
}

header {
  min-height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>

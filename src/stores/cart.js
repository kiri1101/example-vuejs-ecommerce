import { reactive } from "vue";
import { defineStore } from "pinia";

export const useCartStore = defineStore(
  "cart",
  () => {
    const cartStore = reactive({
      list: [],
      sum: 0.0,
      show: false,
    });

    function store(data, qty) {
      const item = {};
      const key1 = "title";
      const key2 = "image";
      const key3 = "amount";
      const key4 = "qty";
      const key5 = "id";
      const key6 = "alt";
      //create Obj
      item[key1] = data.title;
      item[key2] = data.image.source;
      item[key3] = data.oldAmount;
      item[key4] = qty;
      item[key5] = data.id;
      item[key6] = data.image.alt;
      //store data in pinia
      cartStore.list.push(item);
      //execute sum()
      sum();
    }

    function sum() {
      cartStore.sum = cartStore.list.reduce((acum, obj) => {
        return acum + obj.qty * obj.amount;
      }, 0);
    }

    function toggle() {
      return (cartStore.show = !cartStore.show);
    }

    return { store, cartStore, toggle };
  },
  { persist: true }
);

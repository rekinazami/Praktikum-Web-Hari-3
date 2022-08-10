const { createApp, ref, onMounted } = Vue;

const app = createApp({
   setup(){
      const makanan = ref([]);
      const minuman = ref([]);
      const urlMakanan = "http://localhost:7000/makanan";
      const urlMinuman = "http://localhost:7000/minuman";
      const div = document.getElementById("data");
      
      const generateMakanan = async () => {
         const resMakanan = await axios.get(urlMakanan);
         makanan.value = resMakanan.data;
         minuman.value = "";
      };

      const generateMinuman = async () => {
         const resMinuman = await axios.get(urlMinuman);
         minuman.value = resMinuman.data;
         makanan.value = "";
      };

      return{
         generateMakanan,
         generateMinuman,
         makanan,
         minuman,
         div
      };
   },
});

app.mount("#app");
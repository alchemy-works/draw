export default {
    template: `
      <div class="text-center overflow-hidden mx-auto bg-white rounded-xl shadow-md">
      <img class="h-72 w-full object-cover" :src="data.image" alt="">
      <div class="text-xl my-4 font-semibold">{{ data.name }}</div>
      </div>
    `,
    props: {
        data: {
            type: Object,
            required: true,
        },
    }
}
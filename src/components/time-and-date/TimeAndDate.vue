<script lang="ts">
export default {
  name: "TimeAndDate",
  data() {
    return {
      currentTimeAndDate: "",
    };
  },
  methods: {
    updateTimeAndDate() {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const ampm = hours >= 12 ? "PM" : "AM";
      const formattedHours = hours % 12 === 0 ? 12 : hours % 12;
      const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
      const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
      const dayOfWeek = daysOfWeek[now.getDay()];
      const day = now.getDate();
      const months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ];
      const month = months[now.getMonth()];
      const year = now.getFullYear();

      this.currentTimeAndDate = `${formattedHours}:${formattedMinutes} ${ampm} ${dayOfWeek}, ${day} ${month} ${year}`;
    },
    updateTimeOnMinuteChange() {
      const now = new Date();
      const secondsUntilNextMinute = 60 - now.getSeconds();
      setTimeout(() => {
        this.updateTimeAndDate();
        setInterval(() => {
          this.updateTimeAndDate();
        }, 60000);
      }, secondsUntilNextMinute * 1000);
    },
  },
  mounted() {
    this.updateTimeAndDate();
    this.updateTimeOnMinuteChange();
  },
};
</script>

<template>
  <p class="p2">{{ currentTimeAndDate }}</p>
</template>

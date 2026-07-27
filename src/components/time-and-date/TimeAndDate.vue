<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from "vue";

const currentTimeAndDate = ref("");
let tickTimeout: number | null = null;
let tickInterval: number | null = null;

const updateTimeAndDate = () => {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const ampm = hours >= 12 ? "PM" : "AM";
  const formattedHours = hours % 12 === 0 ? 12 : hours % 12;
  const formattedMinutes = minutes < 10 ? `0${minutes}` : String(minutes);
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const dayOfWeek = daysOfWeek[now.getDay()];
  const day = now.getDate();
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const month = months[now.getMonth()];
  const year = now.getFullYear();

  currentTimeAndDate.value = `${formattedHours}:${formattedMinutes} ${ampm} ${dayOfWeek}, ${day} ${month} ${year}`;
};

const startClock = () => {
  const now = new Date();
  const secondsUntilNextMinute = 60 - now.getSeconds();

  tickTimeout = window.setTimeout(() => {
    updateTimeAndDate();
    tickInterval = window.setInterval(updateTimeAndDate, 60000);
  }, secondsUntilNextMinute * 1000);
};

onMounted(() => {
  updateTimeAndDate();
  startClock();
});

onBeforeUnmount(() => {
  if (tickTimeout !== null) {
    window.clearTimeout(tickTimeout);
  }
  if (tickInterval !== null) {
    window.clearInterval(tickInterval);
  }
});
</script>

<template>
  <p class="p2">{{ currentTimeAndDate }}</p>
</template>

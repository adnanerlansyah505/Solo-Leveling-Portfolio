<template>
  <div class="w-full p-6 glass-heavy rounded-none border border-purple-500/30 h-full relative overflow-hidden">
    <!-- corner brackets similar to reference -->
    <div class="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-purple-500"></div>
    <div class="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-purple-500"></div>
    <div class="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-purple-500"></div>
    <div class="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-purple-500"></div>

    <div class="h-full grid grid-cols-1 gap-8 content-start">
        <div class="w-full flex justify-center">
            <RadarChart />
        </div>

        <div class="w-full">
            <SkillBars />
        </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import RadarChart from './RadarChart.vue'
import SkillBars from './SkillBars.vue'
</script>

<style scoped>
/* ensure corner brackets sit above background */
.glass-heavy > .absolute { pointer-events: none; }
</style>

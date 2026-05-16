<template>
  <div class="w-full p-6 glass-heavy rounded-b-lg border border-purple-500/30">
    <h2 class="text-2xl font-bold text-glow mb-8 uppercase tracking-wider">Skill Progression</h2>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div v-for="skill in skillLevels" :key="skill.name" class="group">
        <div class="flex justify-between items-center mb-3">
          <div>
            <p class="text-sm font-semibold text-gray-200">{{ skill.name }}</p>
            <p class="text-xs text-purple-400/70 uppercase tracking-widest">{{ skill.category }}</p>
          </div>
          <span class="text-lg font-bold text-cyan-400 font-mono">{{ skill.value }}</span>
        </div>
        
        <!-- Skill bar with glow -->
        <div class="relative h-3 bg-gray-800 rounded-full border border-purple-500/30 overflow-hidden group-hover:border-purple-500 transition-colors">
          <!-- Animated gradient bar -->
          <div
            class="h-full bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 rounded-full shadow-lg"
            :style="{ width: skill.value + '%', transition: 'width 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)' }"
            :class="{ 'animate-pulse-glow': true }"
          ></div>
          
          <!-- Shimmer effect on hover -->
          <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { skillLevels } from '~/data/skills'

const text_glow = '#c084fc'
</script>

<style scoped>
.text-glow {
  color: #c084fc;
  text-shadow: 0 0 10px rgba(168, 85, 247, 0.8), 0 0 20px rgba(168, 85, 247, 0.4);
}
</style>

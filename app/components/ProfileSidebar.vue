<template>
  <div class="w-full md:w-80 p-6 glass-heavy rounded-lg border border-purple-500/30 h-fit">
    <!-- Profile Header -->
    <div class="text-center mb-6">
      <!-- Avatar with glow -->
      <div class="relative w-32 h-32 mx-auto mb-4">
        <div class="absolute inset-0 animate-pulse-glow rounded-full"></div>
        <img
          :src="profile.avatar"
          :alt="profile.name"
          class="w-full h-full rounded-full border-2 border-purple-500 object-cover relative z-10"
        />
        <!-- Rotating ring animation -->
        <div class="absolute inset-0 border-2 border-transparent border-t-purple-500 border-r-purple-500 rounded-full animate-spin" style="animation-duration: 4s;"></div>
      </div>

      <!-- Name and Title -->
      <h2 class="text-2xl font-bold text-glow mb-1">{{ profile.name }}</h2>
      <p class="text-sm text-cyan-400 font-mono mb-3">{{ profile.class }}</p>
      <p class="text-gray-300 text-sm mb-4">{{ profile.company }}</p>
    </div>

    <!-- Profile Stats -->
    <div class="grid grid-cols-2 gap-3 mb-6 text-sm">
      <div class="p-3 bg-gray-900/40 border border-purple-500/20 rounded-lg">
        <p class="text-gray-400 text-xs">Title</p>
        <p class="text-purple-400 font-semibold">{{ profile.title }}</p>
      </div>
      <div class="p-3 bg-gray-900/40 border border-purple-500/20 rounded-lg">
        <p class="text-gray-400 text-xs">Location</p>
        <p class="text-purple-400 font-semibold">{{ profile.location }}</p>
      </div>
      <div class="p-3 bg-gray-900/40 border border-purple-500/20 rounded-lg">
        <p class="text-gray-400 text-xs">Join Date</p>
        <p class="text-purple-400 font-semibold">{{ profile.joinDate }}</p>
      </div>
      <div class="p-3 bg-gray-900/40 border border-purple-500/20 rounded-lg">
        <p class="text-gray-400 text-xs">Status</p>
        <p class="text-green-400 font-semibold">Active</p>
      </div>
    </div>

    <!-- Divider -->
    <div class="h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent mb-6"></div>

    <!-- Ability Skills -->
    <div class="mb-6">
      <h3 class="text-sm font-bold text-glow mb-4 uppercase tracking-wider">Ability Skills</h3>
      <div class="space-y-4">
        <div v-for="skill in profile.abilities" :key="skill.name" class="group">
          <div class="flex justify-between items-center mb-2">
            <span class="text-sm text-gray-300 font-mono">{{ skill.name }}</span>
            <span class="text-xs text-purple-400">{{ skill.value }}%</span>
          </div>
          <div class="w-full h-2 bg-gray-800 rounded-full border border-purple-500/30 overflow-hidden">
            <div
              :style="{ width: skill.value + '%' }"
              class="h-full bg-gradient-to-r from-purple-600 to-pink-600 shadow-lg transition-all duration-1000 ease-out"
              :class="{ 'animate-pulse-glow': true }"
            ></div>
          </div>
        </div>
      </div>
    </div>

    <!-- Divider -->
    <div class="h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent mb-6"></div>

    <!-- Bio -->
    <div>
      <h3 class="text-sm font-bold text-glow mb-3 uppercase tracking-wider">Bio</h3>
      <p class="text-xs text-gray-400 leading-relaxed">{{ profile.bio }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { profile } from '~/data/profile'

const text_glow = '#c084fc'
</script>

<style scoped>
.text-glow {
  color: #c084fc;
  text-shadow: 0 0 10px rgba(168, 85, 247, 0.8), 0 0 20px rgba(168, 85, 247, 0.4);
}
</style>

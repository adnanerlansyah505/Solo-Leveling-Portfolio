<template>
  <div class="group p-6 glass-heavy rounded-lg border border-purple-500/20 hover:border-purple-500/60 transition-all duration-300 cursor-pointer overflow-hidden"
       @mouseenter="isHovered = true"
       @mouseleave="isHovered = false">
    <!-- Background image -->
    <div class="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none">
      <img :src="project.image" :alt="project.name" class="w-full h-full object-cover" />
    </div>

    <!-- Content -->
    <div class="relative z-10">
      <!-- Status badge -->
      <div class="inline-block mb-3">
        <span :class="[
          'px-3 py-1 text-xs font-bold uppercase rounded-full transition-all',
          project.status === 'Completed' 
            ? 'bg-green-500/20 text-green-400 border border-green-500/50' 
            : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/50'
        ]">
          {{ project.status }}
        </span>
      </div>

      <!-- Project name -->
      <h3 class="text-lg font-bold text-white mb-2">{{ project.name }}</h3>

      <!-- Description -->
      <p class="text-sm text-gray-300 mb-4 line-clamp-3">{{ project.description }}</p>

      <!-- Tech stack -->
      <div class="flex flex-wrap gap-2 mb-4 items-center">
        <span
          v-for="tech in displayedTech"
          :key="tech"
          class="text-xs px-2 py-1 bg-purple-500/10 border border-purple-500/30 text-purple-300 rounded"
        >
          {{ tech }}
        </span>
        <button
          v-if="project.tech.length > 3"
          type="button"
          @click.stop="showAllTech = !showAllTech"
          class="text-xs px-2 py-1 bg-gray-800/70 border border-gray-700 text-gray-300 rounded hover:bg-gray-700 transition-colors"
        >
          {{ showAllTech ? 'Show less' : `+${project.tech.length - 3} more` }}
        </button>
      </div>

      <!-- Buttons -->
      <div class="flex gap-3">
        <a
          :href="project.github"
          target="_blank"
          class="flex-1 py-2 px-4 text-sm font-bold text-center bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 rounded-lg transition-all duration-300 hover:shadow-lg"
        >
          GitHub
        </a>
        <a
          :href="project.demo"
          target="_blank"
          class="flex-1 py-2 px-4 text-sm font-bold text-center border border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 rounded-lg transition-all duration-300"
          v-if="project?.demo"
        >
          Demo
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

interface Project {
  id: number
  name: string
  description: string
  tech: string[]
  status: string
  github: string
  demo: string
  image: string
}

interface Props {
  project: Project
}

const props = defineProps<Props>()
const project = props.project

const showAllTech = ref(false)
const isHovered = ref(false)

const displayedTech = computed(() => {
  return showAllTech.value ? project.tech : project.tech.slice(0, 3)
})
</script>

<style scoped>
</style>

<template>
  <div class="p-6 glass-heavy rounded-lg border border-purple-500/20 hover:border-purple-500/60 transition-all duration-300">
    <h4 class="text-sm font-bold text-purple-400 mb-4 uppercase tracking-wider">{{ title }}</h4>
    
    <div class="space-y-3">
      <div
        v-for="skill in skills"
        :key="skill.name"
        class="p-3 bg-gray-900/30 border border-purple-500/20 rounded-lg hover:border-cyan-500/50 transition-all group cursor-default"
      >
        <div class="flex justify-between items-center">
          <span class="text-sm text-gray-300 group-hover:text-cyan-400 transition-colors">{{ skill.name }}</span>
          <span class="text-xs text-purple-400 font-bold">LVL {{ Math.ceil(skill.level / 10) }}</span>
        </div>
        
        <!-- Mini progress bar -->
        <div class="mt-2 h-1 bg-gray-800 rounded-full overflow-hidden">
          <div
            :style="{ width: skill.level + '%' }"
            class="h-full bg-gradient-to-r from-purple-600 to-cyan-600"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Skill {
  name: string
  level: number
}

interface Props {
  title: string
  skills: Skill[]
}

defineProps<Props>()
</script>

<style scoped>
</style>

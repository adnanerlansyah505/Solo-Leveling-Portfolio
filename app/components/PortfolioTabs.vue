<template>
  <div class="w-full p-6 glass-heavy rounded-lg border border-purple-500/30">
    <!-- Portfolio Directory Header -->
    <h2 class="text-3xl font-bold text-glow mb-8 uppercase tracking-wider text-center">Portfolio Directory</h2>
    
    <!-- Tab Navigation -->
    <div class="flex flex-wrap gap-2 mb-8 border-b border-purple-500/30">
      <button
        type="button"
        v-for="tab in tabs"
        :key="tab.id"
        @click="activeTab = tab.id"
        class="px-6 py-3 text-sm font-bold uppercase tracking-wider transition-all duration-300 relative group"
        :class="[
          activeTab === tab.id 
            ? 'text-purple-400' 
            : 'text-gray-400 hover:text-gray-300'
        ]"
      >
        {{ tab.label }}
        <!-- Animated underline -->
        <div
          v-if="activeTab === tab.id"
          class="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300"
          :style="{ width: '100%' }"
        ></div>
        <!-- Hover glow -->
        <div class="absolute -inset-2 bg-purple-500/0 group-hover:bg-purple-500/10 rounded-lg transition-colors -z-10"></div>
      </button>
    </div>

    <!-- Tab Content -->
    <div class="min-h-64">
      <!-- About Tab -->
      <div v-if="activeTab === 1" class="animate-fade-in">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="p-6 bg-gray-900/30 border border-purple-500/20 rounded-lg">
            <h3 class="text-lg font-bold text-purple-400 mb-4 uppercase">Bio & Vision</h3>
            <p class="text-gray-300 leading-relaxed text-sm">
              Full-Stack Sorcerer passionate about scalable, secure architectures and intuitive UX. 
              Dedicated to mastering the tech stacks of the future.
            </p>
          </div>
          <div class="p-6 bg-gray-900/30 border border-purple-500/20 rounded-lg">
            <h3 class="text-lg font-bold text-purple-400 mb-4 uppercase">Personal Statement</h3>
            <p class="text-gray-300 leading-relaxed text-sm">
              Well-articulated personal statement of the and embracing development vision, 
              dedicated to development similitudes, creativity, and innovation for the future.
            </p>
          </div>
        </div>
      </div>

      <!-- Projects Tab -->
      <div v-if="activeTab === 2" class="animate-fade-in">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ProjectCard v-for="project in projects" :key="project.id" :project="project" />
        </div>
      </div>

      <!-- Skills Tab -->
      <div v-if="activeTab === 3" class="animate-fade-in">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <SkillCategory v-for="(skills, category) in skillCategories" :key="category" :title="category" :skills="skills" />
        </div>
      </div>

      <!-- Social Media Tab -->
      <div v-if="activeTab === 4" class="animate-fade-in">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <SocialCard v-for="social in socials" :key="social.id" :social="social" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { projects } from '~/data/projects'
import { socials } from '~/data/socials'
import { skills } from '~/data/skills'
import ProjectCard from './ProjectCard.vue'
import SkillCategory from './SkillCategory.vue'
import SocialCard from './SocialCard.vue'

const activeTab = ref(1)

const tabs = [
  { id: 1, label: 'About' },
  { id: 2, label: 'Projects' },
  { id: 3, label: 'Skills' },
  { id: 4, label: 'Social Media' }
]

const skillCategories = {
  Frontend: skills.frameworks,
  Backend: skills.databases,
  'API Design': skills.apiDesign,
  DevOps: skills.devOps,
  Architecture: skills.architecture,
  'AI / Tools': skills.aiIntegration
}
</script>

<style scoped>
.text-glow {
  color: #c084fc;
  text-shadow: 0 0 10px rgba(168, 85, 247, 0.8), 0 0 20px rgba(168, 85, 247, 0.4);
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fadeIn 0.4s ease-out;
}
</style>

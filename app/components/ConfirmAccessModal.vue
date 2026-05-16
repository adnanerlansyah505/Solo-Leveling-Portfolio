<template>
  <div v-if="isOpen" class="fixed inset-0 z-50 flex items-center justify-center">
    <!-- Backdrop with glitch effect -->
    <div class="absolute inset-0 bg-black/80 backdrop-blur-sm" @click="handleDecline"></div>
    
    <!-- Modal Container -->
    <div class="relative z-10 w-full max-w-lg mx-4 p-8 rounded-lg glass-heavy border-2 border-cyan-500/50 shadow-2xl"
         :class="{ 'animate-pulse-glow': isOpen }">
      <!-- Decorative corners -->
      <div class="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-cyan-500"></div>
      <div class="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-cyan-500"></div>
      <div class="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-cyan-500"></div>
      <div class="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-cyan-500"></div>

      <!-- Content -->
      <div class="text-center mb-8">
        <h1 class="text-4xl font-bold text-glow-cyan mb-2">CONFIRM ACCESS</h1>
        <div class="h-1 w-24 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mb-4"></div>
        <p class="text-lg text-gray-300">Do you really want to see my portfolio system?</p>
      </div>

      <!-- Hunter info -->
      <div class="mb-6 p-4 bg-gray-900/30 border border-cyan-500/30 rounded-lg">
        <p class="text-center text-cyan-400 font-mono">
          Hunter ID: <span class="font-bold">{{ hunterID }}</span>
        </p>
      </div>

      <!-- Buttons -->
      <div class="flex gap-4">
        <button
          type="button"
          @click="handleAccept"
          :disabled="isProcessing"
          class="flex-1 py-3 px-6 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold rounded-lg hover:from-cyan-500 hover:to-blue-500 transition-all duration-300 neon-glow disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {{ isProcessing ? 'Processing...' : 'Accept' }}
        </button>
        <button
          type="button"
          @click="handleDecline"
          :disabled="isProcessing"
          class="flex-1 py-3 px-6 bg-gradient-to-r from-gray-700 to-gray-600 text-white font-bold rounded-lg hover:from-gray-600 hover:to-gray-500 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          Decline
        </button>
      </div>

      <!-- Processing indicator -->
      <div v-if="isProcessing" class="mt-4 text-center text-gray-300">
        <div class="inline-flex items-center justify-center gap-2">
          <div class="w-8 h-8 border-3 border-cyan-500 border-t-transparent rounded-full animate-spin"></div>
          <span class="text-sm">Validating access...</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface Props {
  isOpen: boolean
  hunterID: string
}

interface Emits {
  (e: 'accept'): void
  (e: 'decline'): void
}

defineProps<Props>()
const emit = defineEmits<Emits>()

const isProcessing = ref(false)

const handleAccept = async () => {
  isProcessing.value = true
  await new Promise(resolve => setTimeout(resolve, 600))
  emit('accept')
  isProcessing.value = false
}

const handleDecline = () => {
  emit('decline')
}
</script>

<style scoped>
.text-glow-cyan {
  color: #06b6d4;
  text-shadow: 0 0 10px rgba(6, 182, 212, 0.8), 0 0 20px rgba(6, 182, 212, 0.4);
}
</style>

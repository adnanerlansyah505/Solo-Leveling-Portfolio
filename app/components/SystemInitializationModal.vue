<template>
  <div v-if="isOpen" class="fixed inset-0 z-50 flex items-center justify-center">
    <!-- Backdrop -->
    <div class="absolute inset-0 bg-black/80 backdrop-blur-sm" @click="handleClose"></div>
    
    <!-- Modal Container -->
    <div class="relative z-10 w-full max-w-lg mx-4 p-8 rounded-lg glass-heavy border-2 border-purple-500/50 shadow-2xl"
         :class="{ 'animate-pulse-glow': isOpen }">
      <!-- Decorative corners -->
      <div class="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-purple-500"></div>
      <div class="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-purple-500"></div>
      <div class="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-purple-500"></div>
      <div class="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-purple-500"></div>

      <!-- Content -->
      <div class="text-center mb-6">
        <h1 class="text-4xl font-bold text-glow mb-2">SYSTEM INITIALIZATION</h1>
        <div class="h-1 w-24 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-4"></div>
        <p class="text-lg text-gray-300">Enter Hunter ID to access portfolio.</p>
      </div>

      <!-- Scan Animation -->
      <div class="mb-8 relative h-1 bg-gray-700 rounded-full overflow-hidden">
        <div class="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500 to-transparent animate-pulse"></div>
      </div>

      <!-- Input Field -->
      <div class="mb-6">
        <input
          v-model="hunterID"
          type="text"
          placeholder="Enter your Hunter ID..."
          class="w-full px-4 py-3 bg-gray-900/50 border-2 border-purple-500/50 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:shadow-lg transition-all"
          @keyup.enter="handleSubmit"
        />
      </div>

      <!-- Initialize Button -->
      <button
        @click="handleSubmit"
        :disabled="!hunterID.trim()"
        class="w-full py-3 px-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-lg hover:from-purple-500 hover:to-pink-500 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed neon-glow"
      >
        Initialize System
      </button>

      <!-- Status text -->
      <div v-if="isProcessing" class="mt-4 text-center text-purple-400 font-mono">
        <span class="animate-pulse">Initializing system...</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface Props {
  isOpen: boolean
}

interface Emits {
  (e: 'submit', hunterID: string): void
  (e: 'close'): void
}

defineProps<Props>()
const emit = defineEmits<Emits>()

const hunterID = ref('')
const isProcessing = ref(false)

const handleSubmit = async () => {
  if (!hunterID.value.trim()) return
  
  isProcessing.value = true
  await new Promise(resolve => setTimeout(resolve, 800))
  emit('submit', hunterID.value)
  isProcessing.value = false
  hunterID.value = ''
}

const handleClose = () => {
  emit('close')
}
</script>

<style scoped>
.text-glow {
  color: #c084fc;
  text-shadow: 0 0 10px rgba(168, 85, 247, 0.8), 0 0 20px rgba(168, 85, 247, 0.4);
}
</style>

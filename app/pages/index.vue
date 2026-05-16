<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
    <!-- Animated background particles -->
    <div class="fixed inset-0 pointer-events-none">
      <div v-for="i in 20" :key="i" 
           class="absolute w-2 h-2 bg-purple-500/20 rounded-full animate-float"
           :style="{ 
             left: Math.random() * 100 + '%', 
             top: Math.random() * 100 + '%',
             animationDelay: Math.random() * 2 + 's'
           }">
      </div>
    </div>

    <!-- Modals -->
    <SystemInitializationModal
      :is-open="showInitModal"
      @submit="handleInitSubmit"
      @close="handleInitClose"
    />

    <ConfirmAccessModal
      :is-open="showConfirmModal"
      :hunterID="hunterID"
      @accept="handleAccept"
      @decline="handleDecline"
    />

    <!-- Main Content (shown after modal acceptance) -->
    <div v-if="hasAccessed" class="relative z-10 min-h-screen">
      <div class="max-w-7xl mx-auto px-4 py-8 space-y-8">
        <!-- Header with system info -->
        <div class="flex justify-between items-center p-6 glass-heavy rounded-lg border border-purple-500/30">
          <div>
            <h1 class="text-3xl font-bold text-glow uppercase tracking-widest">Portfolio Leveling System</h1>
            <p class="text-sm text-gray-400 font-mono mt-2">Portfolio v1.0 | Unauthorized access monitored.</p>
          </div>
          <div class="text-right">
            <p class="text-xs text-gray-400">Hunter ID: <span class="text-cyan-400 font-bold">{{ hunterID }}</span></p>
            <p class="text-xs text-gray-400 mt-1">System Status: <span class="text-green-400 font-bold">ONLINE</span></p>
          </div>
        </div>

        <!-- Main Dashboard Layout -->
        <div class="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <!-- Left Sidebar (1 column) -->
          <div class="lg:col-span-1">
            <ProfileSidebar />
          </div>

          <!-- Main Content (3 columns) -->
          <div class="lg:col-span-3">
            <!-- Radar Chart -->
            <RadarChart />

            <!-- Skill Bars (Full width) -->
            <SkillBars />

            <!-- Portfolio Tabs -->
            <PortfolioTabs class="mt-4" />
          </div>
        </div>
      </div>

      <!-- Footer -->
      <div class="mt-16 py-8 border-t border-purple-500/30">
        <div class="max-w-7xl mx-auto px-4 text-center text-xs text-gray-500 font-mono">
          <p>Core Portfolio System Interface v1.0. Unauthorized access monitored.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import SystemInitializationModal from '~/components/SystemInitializationModal.vue'
import ConfirmAccessModal from '~/components/ConfirmAccessModal.vue'
import ProfileSidebar from '~/components/ProfileSidebar.vue'
import RadarChart from '~/components/RadarChart.vue'
import SkillBars from '~/components/SkillBars.vue'
import PortfolioTabs from '~/components/PortfolioTabs.vue'

const STORAGE_KEY = 'solo-leveling-portfolio-session'
const showInitModal = ref(true)
const showConfirmModal = ref(false)
const hasAccessed = ref(false)
const hunterID = ref('')

const loadSession = () => {
  const saved = window.localStorage.getItem(STORAGE_KEY)
  if (!saved) return
  try {
    const parsed = JSON.parse(saved)
    if (parsed?.accepted && parsed?.hunterID) {
      hunterID.value = parsed.hunterID
      hasAccessed.value = true
      showInitModal.value = false
      showConfirmModal.value = false
    }
  } catch (error) {
    window.localStorage.removeItem(STORAGE_KEY)
  }
}

const saveSession = () => {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify({ hunterID: hunterID.value, accepted: true }))
}

const handleInitSubmit = (id: string) => {
  hunterID.value = id
  showInitModal.value = false
  showConfirmModal.value = true
}

const handleInitClose = () => {
  showInitModal.value = false
}

const handleAccept = () => {
  hasAccessed.value = true
  showConfirmModal.value = false
  saveSession()
}

const handleDecline = () => {
  hunterID.value = ''
  showConfirmModal.value = false
  showInitModal.value = true
  window.localStorage.removeItem(STORAGE_KEY)
}

onMounted(() => {
  loadSession()

  // Add scroll animations
  const observeElements = (selector: string, callback: (el: Element) => void) => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            callback(entry.target)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )

    document.querySelectorAll(selector).forEach((el) => observer.observe(el))
  }

  // Animate elements on scroll
  observeElements('glass-heavy', (el) => {
    ;(el as HTMLElement).style.animation = 'fadeIn 0.6s ease-out'
  })
})
</script>

<style scoped>
.text-glow {
  color: #c084fc;
  text-shadow: 0 0 10px rgba(168, 85, 247, 0.8), 0 0 20px rgba(168, 85, 247, 0.4);
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>

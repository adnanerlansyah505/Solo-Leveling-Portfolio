<template>
  <div class="w-full h-full flex flex-col">
    <h2 class="text-xl font-bold text-glow mb-4 uppercase tracking-wider">Dev Mastery Radar</h2>
    
    <div class="flex-1 flex justify-center items-center max-h-[320px] p-2">
      <svg :viewBox="`0 0 ${size} ${size}`" class="w-full h-full max-h-full">
          <circle v-for="i in 5" :key="`grid-${i}`" 
            :cx="size / 2" :cy="size / 2" 
            :r="(i * size) / 12"
            fill="none" stroke="rgba(168, 85, 247, 0.1)" stroke-width="1"
          />
        
        <g v-for="(label, i) in labels" :key="`axis-${i}`">
          <line
            :x1="size / 2"
            :y1="size / 2"
            :x2="size / 2 + (size / 2.6) * Math.cos(angle(i) - Math.PI / 2)"
            :y2="size / 2 + (size / 2.6) * Math.sin(angle(i) - Math.PI / 2)"
            stroke="rgba(168, 85, 247, 0.3)"
            stroke-width="1"
          />
          <text
            :x="size / 2 + (size / 2.25) * Math.cos(angle(i) - Math.PI / 2)"
            :y="size / 2 + (size / 2.25) * Math.sin(angle(i) - Math.PI / 2)"
            text-anchor="middle"
            dy="0.3em"
            class="text-sm fill-purple-400 font-semibold tracking-wide"
          >
            {{ label }}
          </text>
        </g>

        <polygon
          :points="polygonPoints"
          fill="rgba(168, 85, 247, 0.15)"
          stroke="url(#radarGradient)"
          stroke-width="2"
          class="animate-fade-in"
        />

        <g>
          <defs>
            <linearGradient id="radarGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style="stop-color: #a855f7; stop-opacity: 1" />
              <stop offset="100%" style="stop-color: #ec4899; stop-opacity: 1" />
            </linearGradient>
          </defs>
          
          <circle
            v-for="(value, i) in values"
            :key="`point-${i}`"
            :cx="size / 2 + (value / 100) * (size / 2.6) * Math.cos(angle(i) - Math.PI / 2)"
            :cy="size / 2 + (value / 100) * (size / 2.6) * Math.sin(angle(i) - Math.PI / 2)"
            r="6"
            fill="#ec4899"
            stroke="#c084fc"
            stroke-width="2"
            class="hover:r-8 transition-all cursor-pointer"
            @mouseenter="hoveredIndex = i"
            @mouseleave="hoveredIndex = -1"
          />

          <text
            v-if="hoveredIndex === i"
            v-for="(value, i) in values"
            :key="`label-${i}`"
            :x="size / 2 + (value / 100) * (size / 2.6) * Math.cos(angle(i) - Math.PI / 2)"
            :y="size / 2 + (value / 100) * (size / 2.6) * Math.sin(angle(i) - Math.PI / 2) - 15"
            text-anchor="middle"
            class="text-base fill-cyan-400 font-bold"
          >
            {{ value }}%
          </text>
        </g>
      </svg>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

// Mengecilkan ukuran canvas virtual agar teks/titik terlihat proporsional saat scaling
const size = 450 
const labels = ['Frameworks', 'Databases', 'API Design', 'DevOps', 'Architecture']
const values = [92, 88, 90, 83, 87]
const hoveredIndex = ref(-1)

const angle = (index: number) => (index * 2 * Math.PI) / labels.length

const polygonPoints = computed(() => {
  return values
    .map((value, i) => {
      // Menggunakan pembagi 2.6 agar chart tidak terlalu mepet ke ujung text label
      const x = size / 2 + (value / 100) * (size / 2.6) * Math.cos(angle(i) - Math.PI / 2)
      const y = size / 2 + (value / 100) * (size / 2.6) * Math.sin(angle(i) - Math.PI / 2)
      return `${x},${y}`
    })
    .join(' ')
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
    stroke-dashoffset: 1000;
  }
  to {
    opacity: 1;
    stroke-dashoffset: 0;
  }
}

.animate-fade-in {
  animation: fadeIn 1.5s ease-out;
}
</style>

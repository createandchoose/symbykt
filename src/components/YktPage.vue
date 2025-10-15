<template>
  <div :class="['body', { dark: isDark }]">
    <div class="container">
      <!-- Header -->
      <div class="frame-2217">
        <img
          :src="isDark ? bLenks : frameImg"
          loading="lazy"
          width="160"
          height="32.85"
          alt="Белый журавль"
          class="frame-1511830620"
        />
        <a href="javascript:void(0)" @click="toggleTheme" class="frame-2218">
          <img
            :src="isDark ? bMoon : bxMoon"
            loading="lazy"
            width="24"
            height="24"
            alt="toggle theme"
            class="bx-moonsvg"
          />
        </a>
      </div>

      <!-- Spline -->
             <div class="frame-2169">
            <div class="spline-scene" data-w-id="ea36d5b5-8da0-9cb6-5964-e078be628576" data-animation-type="spline" data-spline-url="https://prod.spline.design/zDNO0wiUJPtWnFL8/scene.splinecode">
               <canvas></canvas>
            </div>
         </div>

      <!-- Description -->
      <div class="frame-2177">
        <div :class="['frame-447', { dark: isDark }]">
          <div :class="['text', { dark: isDark }]">Белый журавль (стерх)</div>
          <div :class="['text-2', { dark: isDark }]">
            Стерх — редкий журавль, символ чистоты и возрождения, стоит в величественной позе с широко расправленными крыльями, готовый к взлету. Модель стилизована в ледяной манере, с крупными плоскостями и устойчивой подставкой.
          </div>
        </div>

        <!-- Model info -->
        <div :class="['frame-447', { dark: isDark }]">
          <div class="frame-1511830573">
            <div class="frame-1511830572">
              <img :src="isDark ? bCube : bxCube" loading="lazy" width="24" height="24" alt="model icon" />
              <div :class="['text', { dark: isDark }]">Паспорт модели</div>
            </div>

            <div class="frame-2178">
              <div class="frame-2175">
                <div :class="['text-3', { dark: isDark }]">Размер:</div>
                <div class="frame-2179">
                  <div :class="['text-4', { dark: isDark }]">100×100×100 мм</div>
                </div>
              </div>
              <div class="hr1"></div>
              <div class="frame-2175">
                <div :class="['text-3', { dark: isDark }]">Материал:</div>
                <div :class="['text-4', { dark: isDark }]">PLA белый</div>
              </div>
              <div class="hr1"></div>
              <div class="frame-2175">
                <div :class="['text-3', { dark: isDark }]">Вес:</div>
                <div :class="['text-4', { dark: isDark }]">47 г</div>
              </div>
              <div class="hr1"></div>
              <div class="frame-2175">
                <div :class="['text-3', { dark: isDark }]">Особенности:</div>
                <div :class="['text-4', { dark: isDark }]">Печатается без поддержки</div>
              </div>
            </div>
          </div>

          <!-- Download -->
          <div class="frame-1511830574">
            <div class="frame-65">
              <div class="component elements">
                <div class="frame-2179">
                  <img :src="downArrow" loading="lazy" width="24" height="24" alt="" />
                  <div class="text-7">Скачать</div>
                </div>
                <div class="frame-1511830568">
                  <img :src="fileFilled" loading="lazy" width="24" height="24" alt="" />
                  <div class="text-8">.blend</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

          <div :class="['text', { dark: isDark }]">Другие модели</div>

          <div class="frame-1511830635">
            <div class="frame-1511830636">
               <div class="frame-1511830637">
                  <a href="#" target="_blank" class="button-style-2 icon"><img :src="desh" loading="lazy" width="12" height="12" alt="" class="vector"></a>
                  <div class="text-14">Белый медведь</div>
               </div>
               <div class="frame-1511830638">
                  <div class="frame-1511830639">
                     <img :src="zag" loading="lazy" width="214" height="214" alt="" class="frame-1511830640">
                     <div class="frame-1511830641">
                        <div class="text-15">Перейти к модели</div>
                     </div>
                  </div>
               </div>
            </div>
            <div class="frame-1511830642">
               <div class="frame-1511830637">
                  <a href="#" target="_blank" class="button-style-3 icon"><img :src="desh" loading="lazy" width="12" height="12" alt="" class="vector"></a>
                  <div class="text-14">Стерх</div>
               </div>
               <div class="frame-1511830638">
                  <div class="frame-1511830639">
                     <img :src="zag" loading="lazy" width="214" height="214" alt="" class="frame-1511830640">
                     <div class="frame-1511830641">
                        <div class="text-15">Перейти к модели</div>
                     </div>
                  </div>
               </div>
            </div>
            <div class="frame-1511830643">
               <div class="frame-1511830637">
                  <a href="#" target="_blank" class="button-style-4 icon"><img :src="desh" loading="lazy" width="12" height="12" alt="" class="vector"></a>
                  <div class="text-14">Трилобит</div>
               </div>
               <div class="frame-1511830638">
                  <div class="frame-1511830639">
                     <img :src="zag" loading="lazy" width="214" height="214" alt="" class="frame-1511830640">
                     <div class="frame-1511830641">
                        <div class="text-15">Перейти к модели</div>
                     </div>
                  </div>
               </div>
            </div>
            <div class="frame-1511830644">
               <div class="frame-1511830637">
                  <a href="#" target="_blank" class="button-style-4 icon"><img :src="desh" loading="lazy" width="12" height="12" alt="" class="vector"></a>
                  <div class="text-14">Ленские столбы</div>
               </div>
               <div class="frame-1511830638">
                  <div class="frame-1511830639">
                     <img :src="zag" loading="lazy" width="214" height="214" alt="" class="frame-1511830640">
                     <div class="frame-1511830641">
                        <div class="text-15">Перейти к модели</div>
                     </div>
                  </div>
               </div>
            </div>
            <div class="frame-1511830645">
               <div class="frame-1511830637">
                  <a href="#" target="_blank" class="button-style-4 icon"><img :src="desh" loading="lazy" width="12" height="12" alt="" class="vector"></a>
                  <div class="text-14">Подставка</div>
               </div>
               <div class="frame-1511830638">
                  <div class="frame-1511830639">
                     <img :src="zag" loading="lazy" width="214" height="214" alt="" class="frame-1511830640">
                     <div class="frame-1511830641">
                        <div class="text-15">Перейти к модели</div>
                     </div>
                  </div>
               </div>
            </div>
         </div>

      <!-- Footer -->
      <div class="frame-1511830570">
        <div class="frame-1511830571">
          <div :class="['text-9', { dark: isDark }]">Команда</div>
          <img :src="isDark ? bLogo : groupLogo" loading="lazy" width="99" height="32" alt="logo" class="group-2" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

// Тема
const isDark = ref(false)

function toggleTheme() {
  isDark.value = !isDark.value
  document.documentElement.classList.toggle('dark', isDark.value)
  localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
  updateThemeClasses()
}

function updateThemeClasses() {
  const elements = document.querySelectorAll('.text, .text-2, .text-3, .text-4, .frame-447')
  elements.forEach(el => {
    if (isDark.value) {
      el.classList.add('dark')
    } else {
      el.classList.remove('dark')
    }
  })
}

// Image paths
const bLenks = '/images/b-lensk.svg'
const frameImg = '/images/68ee885da4a997b59a681911_Frame-1511830620.svg'
const bMoon = '/images/b-moon.svg'
const bxMoon = '/images/68ee885d1e144f926ba7f335_bx-moon.svg'
const bCube = '/images/b-cube.svg'
const bxCube = '/images/68ee87887acc996afd9f9cf6_bx-cube.svg'
const bLogo = '/images/b-logo.svg'
const groupLogo = '/images/68ee88deaa92bc7005c0272a_Group-2.svg'
const downArrow = '/images/bx-down-arrow-circle.svg'
const fileFilled = '/images/file-filled.svg'
const zag = '/images/zag.png'
const desh = '/images/68ee89348cec47fffb483ddd_Vector.svg'

onMounted(() => {
  // Восстановление темы
  const saved = localStorage.getItem('theme')
  if (saved === 'dark') {
    isDark.value = true
    document.documentElement.classList.add('dark')
    updateThemeClasses()
  }

  // Инициализация Webflow и Spline
  initWebflow()
})

function initWebflow() {
  // Ждем пока DOM полностью обновится
  setTimeout(() => {
    // Проверяем доступен ли Webflow API
    if (window.Webflow && window.Webflow.require) {
      window.Webflow.require('ix2').init()
      console.log('Webflow IX2 инициализирован')
    }
    
    // Инициализируем Spline если нужно
    initSpline()
  }, 100)
}

function initSpline() {
  const splineElement = document.querySelector('.spline-scene')
  if (splineElement && window.Webflow) {
    // Webflow автоматически инициализирует Spline через data-атрибуты
    console.log('Spline элемент найден, ожидаем инициализацию Webflow')
  }
}
</script>
<style scoped>
.body {
  background: #ffffff;
  color: #111;
  transition: background 0.4s ease, color 0.4s ease;
  min-height: 100vh;
}

.body.dark {
  background: #0d0d0d;
  color: #ffffff;
}

.frame-447 {
  transition: background-color 0.4s ease;
}

.frame-447.dark {
  background-color: rgba(255, 255, 255, 0.08) !important;
}

.text,
.text-2,
.text-3,
.text-4 {
  transition: color 0.4s ease;
}

.text-9.dark {
  color: rgb(255, 255, 255, 0.60) !important;
}

.text.dark,
.text-2.dark,
.text-3.dark,
.text-4.dark {
  color: #ffffff !important;
}

a {
  cursor: pointer;
}

/* Добавляем более специфичные стили для темной темы */
:deep(.text.dark),
:deep(.text-2.dark),
:deep(.text-3.dark),
:deep(.text-4.dark) {
  color: #ffffff !important;
}

:deep(.text-2.dark),
:deep(.text-4.dark) {
  color: rgb(255, 255, 255, 0.80) !important;
}

:deep(.frame-447.dark) {
  background-color: rgba(255, 255, 255, 0.08) !important;
}
</style>
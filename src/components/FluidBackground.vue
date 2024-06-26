<template>
  <div class="canvas-container" ref="canvasContainer">
    <canvas ref="canvas" class="particles-canvas"></canvas>
  </div>
</template>

<script>
import { defineComponent, onMounted, onUnmounted, ref } from 'vue';

export default defineComponent({
  name: 'FluidBackground',
  setup() {
    const canvasContainer = ref(null);
    const canvas = ref(null);
    let ctx = null;
    const particles = [];
    let animationFrame = null;

    const colors = ['#2c3159', '#464c7c', '#222436', '#6f76af', '#fffff'];

    const initializeParticles = () => {
      ctx = canvas.value.getContext('2d');

      canvas.value.width = window.innerWidth;
      canvas.value.height = window.innerHeight;

      const particleCount = 200;
      for (let i = 0; i < particleCount; i++) {
        const randColor = colors[Math.floor(Math.random() * colors.length)];
        const baseSize = (Math.random() * 4 + 1) * 15;
        const GenBreatheDelay = Math.random() * 4000 + 4000;

        particles.push({
          x: Math.random() * canvas.value.width,
          y: Math.random() * canvas.value.height,
          originalX: Math.random() * canvas.value.width,
          originalY: Math.random() * canvas.value.height,
          radius: randColor === '#fffff' ? baseSize / 3 : baseSize,
          vx: 0,
          vy: 0,
          color: randColor,
          isMoving: false,
          breatheDelay: GenBreatheDelay,
          breatheStart: Date.now() + Math.random() * GenBreatheDelay,
        });
      }

      animateParticles();
      canvasContainer.value.addEventListener('mousemove', onMouseMove);
    };

    const animateParticles = () => {
      animationFrame = requestAnimationFrame(animateParticles);
      ctx.clearRect(0, 0, canvas.value.width, canvas.value.height);

      particles.forEach((particle) => {
        const now = Date.now();
        const bS = particle.breatheStart;
        const bD = particle.breatheDelay;
        const pR = particle.radius;
        const breatheProgress = (now - bS) % bD / bD;
        const breatheSize = pR + Math.sin(breatheProgress * Math.PI * 2) * pR * 0.2;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, breatheSize, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();

        if (particle.isMoving) {
          const dx = particle.x - mouseX;
          const dy = particle.y - mouseY;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            const angle = Math.atan2(dy, dx);
            const force = 10 / distance;
            particle.vx += force * Math.cos(angle) * 50;
            particle.vy += force * Math.sin(angle) * 50;
          }

          particle.x += particle.vx;
          particle.y += particle.vy;

          const px = particle.x;
          const py = particle.y;
          const ox = particle.originalX;
          const oy = particle.originalY;

          if (px !== ox || py !== oy) {
            const vx = ox - px;
            const vy = oy - py;
            const dist = Math.sqrt(vx * vx + vy * vy);
            particle.vx = vx / dist;
            particle.vy = vy / dist;
          }
        } else {
          const dx = particle.originalX - particle.x;
          const dy = particle.originalY - particle.y;
          particle.x += dx * 0.5;
          particle.y += dy * 0.5;
        }
      });
    };

    let mouseX = 0;
    let mouseY = 0;

    const onMouseMove = (event) => {
      mouseX = event.clientX - canvasContainer.value.getBoundingClientRect().left;
      mouseY = event.clientY - canvasContainer.value.getBoundingClientRect().top;

      particles.forEach((particle) => {
        particle.isMoving = true;
      });
    };

    onMounted(() => {
      initializeParticles();
    });

    onUnmounted(() => {
      cancelAnimationFrame(animationFrame);
      canvasContainer.value.removeEventListener('mousemove', onMouseMove);
    });

    return {
      canvasContainer,
      canvas,
    };
  },
});
</script>

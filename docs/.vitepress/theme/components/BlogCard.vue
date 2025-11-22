<template>
  <a :href="link" class="custom-card">
    <img :src="image" :alt="title" class="card-image" />
    <div class="card-content">
      <div v-if="tag" class="card-tag">{{ tag }}</div>
      <h3 class="=card-title">{{ title }}</h3>
      <hr />
      <p>{{ details }}</p>
      <div class="contaner-porfile">
        <img src="/profile.jpg" alt="profile" class="profile" />
        <p>Chafik Raden-ahmad</p>
      </div>
      <p class="card-date">{{ formatDate(date) }}</p>
    </div>
  </a>
</template>

<script setup lang="ts">
import { formatDate } from "../utils/date";

// กำหนด Props ด้วย TypeScript
defineProps<{
  title: string;
  details: string;
  date: string;
  image: string; // URL รูปภาพ
  tag?: string; // optional tag
  link: string; // ลิงก์ไปยังบทความ .md
}>();
</script>

<style scoped>
.custom-card {
  display: flex;
  flex-direction: column;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  background-color: var(--vp-c-bg-soft);
  text-decoration: none;
  max-width: 340px;
  width: full;
  color: var(--vp-c-text-1);
  overflow: hidden;
  transition: transform 0.2s ease, box-shadow 0.2s ease,
    background-color 0.2s ease;
}

.custom-card:hover {
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  border: 1px solid var(--vp-c-brand-1);
  color: var(--vp-c-text-1);
}

.card-image-wrapper {
  width: 100%;
  height: 180px;
  overflow: hidden;
  background-color: var(--vp-c-bg-alt);
}

.card-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.custom-card:hover .card-image {
  transform: scale(1.05);
}

.card-content {
  padding: 16px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.card-tag {
  display: inline-block;
  background-color: var(--vp-c-brand-1);
  color: var(--vp-c-bg-soft);
  padding: 4px 8px;
  border-radius: 100px;
  font-size: 0.75em;
  font-weight: 500;
  margin-bottom: 8px;
  align-self: flex-start;
}

.card-title {
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0 0 8px 0;
  color: var(--vp-c-text-1);
}

.card-details {
  font-size: 0.9em;
  color: var(--vp-c-text-2);
  margin-bottom: 12px;
  flex-grow: 1;
}

.read-more {
  font-size: 0.9em;
  color: var(--vp-c-brand-1);
  font-weight: 500;
  text-align: right;
  margin-top: auto;
}

.contaner-porfile {
  display: flex;
  align-items: center;
  gap: 16px;
  font-size: 1.125rem;
}
.profile {
  border-radius: 100%;
  width: 40px;
  height: 40px;
}
.card-date {
  text-align: end;
  font-size: small;
  margin: 0;
}
@media (max-width: 768px) {
  .custom-card {
    max-width: 100%;
  }
}
</style>

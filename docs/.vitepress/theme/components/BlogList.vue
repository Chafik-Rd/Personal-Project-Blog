<script setup lang="ts">
import { computed } from "vue";
import BlogCard from "./BlogCard.vue";

const posts = import.meta.glob("../../../blogs/*.md", { eager: true });

const data = computed(() => {
  return (
    Object.values(posts)

      .map((post: any) => ({
        title: post.__pageData.frontmatter.title,
        details: post.__pageData.frontmatter.description,
        tag: post.__pageData.frontmatter.tag,
        date: post.__pageData.frontmatter.date,
        image: post.__pageData.frontmatter.image,
        link: post.__pageData.relativePath
          .replace("/docs", "")
          .replace(".md", ""),
      }))
      // 5. เรียงลำดับตามวันที่ (สมมติว่ามี date ใน Frontmatter)
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  );
});
</script>

<template>
  <div class="custom-grid">
    <BlogCard
      v-for="post in data"
      :key="post.link"
      :title="post.title"
      :details="post.details"
      :date="post.date"
      :image="post.image"
      :tag="post.tag"
      :link="post.link"
    />
  </div>
</template>

<style scoped>
.custom-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  gap: 24px;
}
</style>

// src/lib/ghost.js

const GHOST_API_URL = "https://ghost.37orbit.com/ghost/api/content"; // 你的 ghost 线上地址
const GHOST_CONTENT_KEY = "d8cbb801849e912c8be5dde4bb"; // 不要漏字符

async function fetchFromGhost(path) {
  const url = `${GHOST_API_URL}${path}`;

  const res = await fetch(url);

  if (!res.ok) {
    console.error("Ghost API error:", res.status, res.statusText, url);
    throw new Error(`Ghost API error: ${res.status}`);
  }

  const data = await res.json();
  return data;
}

// 获取文章列表（首页用）
export async function getPosts() {
  // 你刚刚贴的 JSON 里字段有：title, slug, feature_image, excerpt, published_at, url
  const data = await fetchFromGhost(
    `/posts/?key=${GHOST_CONTENT_KEY}&fields=title,slug,feature_image,excerpt,published_at,url`
  );

  return data.posts ?? [];
}

// 根据 slug 获取单篇文章（详情页用）
export async function getPostBySlug(slug) {
  const data = await fetchFromGhost(
    `/posts/slug/${slug}/?key=${GHOST_CONTENT_KEY}&include=tags,authors&formats=html`
  );

  if (!data.posts || data.posts.length === 0) {
    return null;
  }

  return data.posts[0];
}

export async function getAllPosts() {
  const url = `${GHOST_API_URL}/posts/?key=${GHOST_CONTENT_KEY}&limit=all`;
  const res = await fetch(url);
  const data = await res.json();
  return data.posts;
}



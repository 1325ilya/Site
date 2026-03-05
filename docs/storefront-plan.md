# Assumptions
- Ниша: премиальная женская одежда (tailoring + essentials).
- Варианты: размеры XS/S/M/L/XL.
- Валюта/регион: RUB / РФ.
- Языки: RU/EN.
- SEO: важно (органический трафик и коллекционные страницы).
- Оплата/доставка: Stripe + CDEK/Boxberry интеграции.

# Шаг 1 — Выбор стека
## Вариант A (быстро в разработке)
- Frontend: Next.js 15 (App Router), TypeScript, Tailwind, Framer Motion.
- CMS: Sanity (managed studio + visual editing).
- DB/Storage: Sanity Content Lake + Image CDN.
- Auth: NextAuth (admin-only area) при необходимости.

## Вариант B (максимально удобный CMS)
- Frontend: Next.js 15 (App Router), TypeScript, Tailwind, Framer Motion.
- CMS: Shopify (Hydrogen-less, Storefront API + Admin UI).
- DB/Storage: Shopify infra + media CDN.
- Auth: Shopify customer accounts + optional Clerk for custom cabinet.

## Победитель
**Вариант B** для e-commerce production: быстрее до денег, минимальные риски по заказам/налогам/интеграциям, сильная редакторская админка, надежное масштабирование каталога. Вариант A дешевле при сложном кастоме контента, но потребует больше поддержки e-commerce ядра.

# Шаг 2 — Архитектура проекта (Next.js App Router)
```txt
app/
  (store)/
    page.tsx                # Главная
    catalog/page.tsx        # Каталог
    product/[slug]/page.tsx # Страница товара
    cart/page.tsx           # Корзина
  api/
    revalidate/route.ts
  layout.tsx
  globals.css
components/
  HeroBanner.tsx
  ProductGrid.tsx
  FeaturedCollection.tsx
  Footer.tsx
  ui/                       # Базовые кнопки/бейджи/инпуты
hooks/
  useCart.ts
  useFilters.ts
lib/
  cms/
    client.ts               # SDK / GraphQL client
    queries.ts              # Запросы к CMS
    mappers.ts              # Нормализация DTO -> domain
  seo/
    metadata.ts             # generateMetadata helpers
  utils/
    currency.ts
    image.ts
types/
  product.ts
  cart.ts
styles/
  tokens.css
```
- UI-компоненты: `components/`
- Анимации: внутри секций `components/*` через Framer Motion (+ guard на reduced motion)
- Запросы к CMS: `lib/cms/queries.ts`
- Типы: `types/`
- Утилиты: `lib/utils/`
- SEO metadata: `lib/seo/metadata.ts` + route-level `generateMetadata`

# Шаг 3 — Схема данных Product
```json
{
  "id": "prod_01HZXA...",
  "name": "Tailored Wool Blazer",
  "description": "Structured silhouette with soft shoulder and matte finish.",
  "images": [
    {
      "url": "https://cdn.example.com/products/blazer-1.jpg",
      "alt": "Charcoal tailored wool blazer front view",
      "order": 1,
      "dominantColor": "#3C3C3A",
      "blurDataURL": "data:image/jpeg;base64,/9j..."
    }
  ],
  "variants": [
    {
      "size": "S",
      "sku": "BLZ-CH-S",
      "price": 18990,
      "stock": 7,
      "isDefault": true
    },
    {
      "size": "M",
      "sku": "BLZ-CH-M",
      "price": 18990,
      "stock": 4,
      "isDefault": false
    }
  ],
  "category": "outerwear",
  "collections": ["new-arrivals", "atelier-core"],
  "seo": {
    "title": "Tailored Wool Blazer — Atelier Core",
    "description": "Minimalist charcoal blazer in premium wool blend.",
    "slug": "tailored-wool-blazer",
    "ogImage": "https://cdn.example.com/og/tailored-wool-blazer.jpg"
  },
  "status": "published",
  "createdAt": "2026-02-10T09:00:00.000Z",
  "updatedAt": "2026-02-20T12:30:00.000Z"
}
```

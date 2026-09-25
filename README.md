# flugel.biz Next.js Version

稼働している自分自身の SolidStart 製屋号サイトを、Next.js へリプレイスした実験リポジトリです。
状態管理は、以前行った伝播速度測定により、複雑でない利用の場合は Legendapp State が最速だったので、こちらを採用しました。

**Note:** 本リポジトリは、実験場という性質であるため Issues 及び Pull Requests は受け付けておりません。

## Tech Stack

- Next 16.3.4 (SSG)
- React 19.2.8
- Legendapp State
- TypeScript
- Sass
- ky
- Valibot
- Shiki

## Replaced Features

- SolidStart から Next.js への翻訳（Solid JSX → React JSX、Signal → State）
- SSR 安全なグローバルストア機構を Legendapp State に適用
- Meta 生成機構を Next.js に合わせた上で適用（Solid JSX → React JSX、SiteMeta コンポーネント → siteMeta ファイル、MetaTags コンポーネント → export const metadata）
- Shiki コードの色付け実行を非同期コンポーネントでビルド時に生成、クライアント時の実行なし

## Replaced Festival Repositories

- [SolidStart 版](https://github.com/wings1685/flugel-website)
- [SvelteKit 版](https://github.com/wings1685/flugel-website-sveltekit)
- [Qwik 版](https://github.com/wings1685/flugel-website-qwik)
- [Nuxt 版](https://github.com/wings1685/flugel-website-nuxt)
- [Astro + Solid / Svelte / Vue 版](https://github.com/wings1685/flugel-website-astro)
- [Astro + React 版](https://github.com/wings1685/flugel-website-astro-react)

## Related Articles

- [同一サイトの 9 フレームワークパターンでのリプレイス祭](https://wings.hatenablog.com/entry/replaceFestival)
- [【極限編】同一 Astro 上で Solid / Svelte / Vue / React それぞれの処理速度を計測してみた（Qwik は無し）](https://wings.hatenablog.com/entry/benchmarkExtreme)
- [Meta 生成機構祭](https://wings.hatenablog.com/entry/metaFestival)

## Folder Map

```
src/
├─ _global/
│ ├─ lib/
│ ├─ piquo/
│ ├─ styles/
│ ├─ types/
├─ app/
│ ├─ archives/
│ ├─ types/
├─ components/
│ ├─ features/
│ │ ├─ _models/
│ ├─ routes/
│ │ ├─ _models/
│ │ ├─ _parts/
│ │ ├─ archives/
│ │ │ ├─ _models/
│ │ │ ├─ _parts/
│ │ ├─ types/
│ │ │ ├─ _parts/
│ ├─ shared/
│ │ ├─ Sections/
│ │ ├─ Typography/
│ │ ├─ Utils/
```

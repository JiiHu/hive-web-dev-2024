# Hive: Getting Started with Web Development - 2024

This is project was created for a live coding session at [Hive Helsinki](https://www.hive.fi/en/) in October 2024. Goal of the session was to showcase how to get started with Web Development using React, Next.js, Tailwind CSS, and Spotify APIs.

This is v2.0 based on the [2023 presentation](https://github.com/JiiHu/hive-web-dev).

We will be using [Next.js](https://nextjs.org/) React framework and it's [App Router](https://nextjs.org/docs/app) version. `App Router` differs from "traditional" React in a way that all the content is rendered on server unless you explicitly say that you want to render content in browser using `use client` on top of a component. Here is short [Introduction to App Router](https://www.youtube.com/watch?v=DrxiNfbr63s).

## How to run the project

- Install Node if you don't have it already

  - You should install Node through [node version manager (nvm)](https://github.com/nvm-sh/nvm)
  - `nvm` allows you to later on easily change the used Node version. This is important especially if you work on different projects simultaneously, as they probably need different version of Node and you want to be able to change the used version easily.
  - Installing node without `nvm` will probably end up you having messy installation and problems later on

- Run `npm install` to install dependencies
- Add environment variables to `.env`. You can look for `.env.example` for what there should be
- Start with `npm run dev`

## Steps done before the presentation

Here is the list of steps one needs to complete to get to same point as I was before the presentation:

- Create project with `npx create-next-app@latest projectnamehere`
  - Choose the following:
    - Typescript: `Yes`
      - You can read more about [What is Typescript?](https://hygraph.com/blog/what-is-typescript) article
    - Eslint: `Yes`
    - Tailwind CSS: `Yes`
    - src/ directory: `No`
    - App Router: `Yes`
    - customise import alias: `No`
- Install `eslint`
  - Read more about eslint from [Why (and how) to use eslint](https://medium.com/the-node-js-collection/why-and-how-to-use-eslint-in-your-project-742d0bc61ed7) article
  - Install all needed packages for nice configuration
    - `npm install --save @babel/eslint-parser`
    - `npn install --save-dev eslint-config-airbnb`
    - `npm install --save-dev eslint-plugin-prettier`
    - `npm install --save-dev @next/eslint-plugin-next`
    - `npm install --save-dev eslint-config-prettier`
    - `npm install --save-dev eslint-plugin-react`
    - `npm install --save-dev @typescript-eslint/parser`
    - `npm install --save-dev @typescript-eslint/eslint-plugin`
- Copy nice `eslint` and `prettier` rules to `.eslintrc.js` and `.prettierrc.js`
  - I took these from my previous projects so there is no source to be shared

## Steps in live coding

Here is list of things that were done in the live coding session.

- Remove Vercel's placeholder content from `page.tsx`
- Implement search field to homepage with basic `Button` and `Input` components
- Create application to [Spotify for Developers](https://developer.spotify.com/dashboard/applications)
- Install [Clerk](https://clerk.com)
  - Remember to use custom scopes when adding Spotify SSO (list below)
  - Create `.env` file and add ENV variables based on `.env.example`
  - Create Login/Logout functionality with Clerk
- Install [`spotify-web-api-node`](https://github.com/thelinmichael/spotify-web-api-node)
  - `npm install --save spotify-web-api-node`
  - `npm install --save-dev @types/spotify-web-api-node`
- Implement search so it uses Spotify API
- Deploy the application on Vercel.com

### Spotify Scopes

Here is quite comprehensive list of Spotify scopes that allow us to do pretty much everything with account.

```
ugc-image-upload
user-read-playback-state
user-modify-playback-state
user-read-currently-playing
app-remote-control
streaming
playlist-read-private
playlist-read-collaborative
playlist-modify-private
playlist-modify-public
user-read-playback-position
user-top-read
user-read-recently-played
user-library-modify
user-library-read
user-read-email
user-read-private
```

## Main Tools

- [Next.js](https://nextjs.org/) as framework
- [TypeScript](https://www.typescriptlang.org) so you can use typing if you want
- [Tailwind CSS](https://tailwindcss.com/) for styles
- [Flowbite](https://flowbite.com/) for Tailwind component styles
- [Spotify Web API](https://developer.spotify.com/documentation/web-api/) through [spotify-web-api-node](https://github.com/thelinmichael/spotify-web-api-node)
- [Clerk](https://clerk.com) to authenticate with Spotify
  - If you want to do auth without 3rd party service, you can use [Auth.js](https://authjs.dev) instead

## Things to read

- Advanced: [Instant Search Params](https://buildui.com/posts/instant-search-params-with-react-server-components)

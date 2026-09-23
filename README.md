# Jotion — ready to follow the tutorial

Environment setup is complete. This project keeps your newer stack: Next.js 16.3.6, React 19.2.8, and Tailwind CSS 4. shadcn/ui is configured with Radix components, the Nova preset, neutral colors, CSS variables, Lucide icons, and the @/* import alias. The starter page displays a styled Button.

## Start locally

```sh
cd /Users/judyyang/Desktop/Jotion/notion-clone
npm run dev
```

Open http://localhost:3000. Keep the terminal running; stop with Control-C.

Resume the video at 27:08 for routing practice (21:23 begins the optional Trunk section):
https://www.youtube.com/watch?v=0OaDyjB9Ib8&t=1628s

## Differences from the 2023 video

- Setup chapter (06:23–21:23) is already done. Do not rerun create-next-app or the old shadcn-ui init command.
- Tailwind 4 uses @import "tailwindcss" and CSS theme configuration in app/globals.css. There is intentionally no tailwind.config.ts. Keep postcss.config.mjs using @tailwindcss/postcss.
- Add components with the installed CLI: npm run ui -- add dialog (replace dialog with the component name).
- Button is at components/ui/button.tsx. It has modern styling and React 19 types, so its source and appearance differ from the video's old Default style. The shared Button import, variant, size, and asChild usage remain available.
- The cn helper is available from @/lib/utils; the current CLI also imports it directly from the cn package. Both refer to the same utility.
- The existing Geist fonts are retained. Add the tutorial's Poppins logo font when you reach that lesson.
- Normal route folders, (route groups), _private folders, page.tsx, layout.tsx, and the @/* import alias are available. Your existing root layout already supplies full-height styling on html/body.
- Later chapters use older Clerk, Convex, and Next.js APIs. Check their current documentation as you reach those sections; this setup does not claim the entire 2023 course can be copied unchanged.

No backend accounts or environment variables are needed for this first setup section. Trunk is optional and has not been configured. VS Code recommendations for Tailwind CSS IntelliSense and Simple React Snippets are included; extensions are not installed globally. Landing-page components and routing exercises remain for you to build.

## Checks and reproducibility

```sh
npm run lint
npm run typecheck
npm run build
```

Use npm ci to restore the dependencies recorded in package-lock.json. Setup uses your existing Node 24.10.0 installation. Development is bound to 127.0.0.1.

References:
- https://ui.shadcn.com/docs/tailwind-v4
- https://nextjs.org/docs/app/getting-started/installation

The initial starter is preserved in Git commit 8a45922. Setup changes are uncommitted for review.

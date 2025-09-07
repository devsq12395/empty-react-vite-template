# SQ Framework 🚀

![Version](https://img.shields.io/badge/version-1.5-blue)

## Changelog
- **Added** custom hooks system
- **Added** `useTheme` hook

## How to Use

### Available Hooks

#### Theme

1. **Import the Hook**
   
   Add the following import statement to your component:
   
   ```tsx
   import { useTheme } from "../hooks/useTheme";

   const { token, fontFamily, themeName, setThemeName } = useTheme();
   // Note that "setThemeName" will change the theme name.
   // Example: setThemeName("light")
   ```

2. **Apply Theme Styles**

   Use the theme properties in your component styles:

   ```tsx
   <div
     className="mt-25 w-full h-full"
     style={{
       backgroundColor: token("page.bg"),
       fontFamily: fontFamily("inter"),
       color: token("text.primary"),
     }}
   >
   ```

---
# Fix: Hero Section Overlap on Mobile

This document explains the fix for a visual bug where the "Stats" section would improperly overlap the hero section image on mobile and tablet devices.

## The Problem

On screen widths between 768px and 1024px (and sometimes on smaller devices), a visual conflict occurred during scrolling:

1.  **CSS:** The `.stats-section` had a `margin-top: -80px`, pulling it upwards to create a layered effect on desktop.
2.  **JavaScript:** A parallax effect in `js/main.js` was applying a `transform: translateY(...)` to the `.hero` section, pushing it downwards on scroll.

The combination of these two opposing movements caused the `.hero` section to slide down *behind* the `.stats-section` as the user scrolled, making the profile image appear to be prematurely covered or disappear entirely.

## The Solution

The fix involved synchronizing the CSS and JavaScript to disable both conflicting effects at the same breakpoint.

1.  **JavaScript (`js/main.js`):** The `initializeScrollEffects` function was updated to detect the screen width. On screens `1024px` wide or less, the parallax `transform` is set to `none`, disabling the downward movement of the hero section.

2.  **CSS (`css/hero.css`):** A new media query was added to the end of the file. On screens `1024px` wide or less, this query sets `margin-top: 0` on the `.stats-section`, removing the upward pull.

By neutralizing both the parallax transform and the negative margin at the same breakpoint, the layout on smaller devices now remains in a stable, standard document flow, resolving the visual bug. The intended layered/parallax effect is preserved on screens wider than 1024px.

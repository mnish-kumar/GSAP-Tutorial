# GSAP Learning Progress

This repository contains examples and experiments with the GreenSock Animation Platform (GSAP), demonstrating various animation techniques and interactive effects.

## Projects

### 1. Cursor Animation

**Location:** `/Cursor Animation`

This project demonstrates how to create a custom cursor that follows the user's mouse movement and changes state when interacting with specific elements.

**Key Concepts Learned:**

- **Mouse Following:** Using the `mousemove` event listener to update the cursor's position (`x` and `y` coordinates) in real-time.
- **GSAP set vs to:** Using `gsap.to()` for smooth movement interpolation.
- **Interactive States:** detecting `mouseenter` and `mouseleave` events on an image container.
- **Transformations:** Scaling the cursor up (`scale: 5`) and resetting it to indicate interactivity.
- **Dynamic Content:** Changing the inner HTML of the custom cursor to display text ("View More") on hover.
- **Easing:** Applying eases like `back.out` for natural movement.

### 2. SVG Path Animation (String Effect)

**Location:** `/SVG Path`

This project explores animating SVG paths to create an interactive "elastic string" effect. The line bends dynamically as the mouse moves over it and snaps back into place when released.

**Key Concepts Learned:**

- **SVG Path Manipulation:** modifying the `d` attribute of an `<path>` element dynamically.
- **Quadratic Bezier Curves:** Understanding the `Q` command in SVG paths (`M startX startY Q controlX controlY endX endY`) to create curves.
- **Mouse Interaction:** Calculating the control point of the curve based on the mouse's `x` and `y` coordinates during `mousemove`.
- **Attribute Plugin:** Using GSAP's `attr: {}` property to animate DOM attributes that aren't CSS properties.
- **Elastic Easing:** Using `ease: "elastic.out(1, 0.2)"` to create a realistic guitar-string vibration effect when the mouse leaves the area.

  ### 3. GSAP ScrollTrigger Demo

This project demonstrates a simple scroll-linked animation using the **GSAP (GreenSock Animation Platform)** library and its **ScrollTrigger** plugin.

## Project Overview

The project consists of three full-screen sections. The middle section features a large text element ("MANISH") that animates horizontally as the user scrolls down the page. The section is "pinned" during the scroll interaction to create a smooth, immersive effect.

## Key Features

- **GSAP ScrollTrigger**: Orchestrates the animation based on the scroll position.
- **Pinning**: Keeps the active section (`.box2`) fixed in the viewport while the animation plays.
- **Scrubbing**: The animation plays back and forth smoothly in sync with the scrollbar (scrub value: 0.55).
- **Horizontal Scroll Effect**: The text moves horizontally (`translateX`) to create a dynamic visual.


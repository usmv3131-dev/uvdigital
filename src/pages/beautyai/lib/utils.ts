// Centralized utility functions
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combines class names with Tailwind CSS merge support
 * @param inputs - Class names to merge
 * @returns Merged class string
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Smooth scroll to element by ID
 * @param elementId - ID of the element to scroll to
 */
export function scrollToElement(elementId: string): void {
  const element = document.getElementById(elementId);
  element?.scrollIntoView({ behavior: "smooth" });
}

/**
 * Check if user prefers reduced motion
 * @returns true if prefers-reduced-motion is set
 */
export function prefersReducedMotion(): boolean {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

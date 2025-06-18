// Predefined color combinations that work well with dark backgrounds
const colorPalettes = [
  {
    bg: 'bg-blue-500/20',
    hover: 'hover:bg-blue-500/30',
    border: 'border-blue-500/30',
    text: 'text-[oklch(1_0_0)]',
    hoverText: 'group-hover:text-[oklch(1_0_0)]'
  },
  {
    bg: 'bg-purple-500/20',
    hover: 'hover:bg-purple-500/30',
    border: 'border-purple-500/30',
    text: 'text-[oklch(1_0_0)]',
    hoverText: 'group-hover:text-[oklch(1_0_0)]'
  },
  {
    bg: 'bg-emerald-500/20',
    hover: 'hover:bg-emerald-500/30',
    border: 'border-emerald-500/30',
    text: 'text-[oklch(1_0_0)]',
    hoverText: 'group-hover:text-[oklch(1_0_0)]'
  },
  {
    bg: 'bg-rose-500/20',
    hover: 'hover:bg-rose-500/30',
    border: 'border-rose-500/30',
    text: 'text-[oklch(1_0_0)]',
    hoverText: 'group-hover:text-[oklch(1_0_0)]'
  },
  {
    bg: 'bg-amber-500/20',
    hover: 'hover:bg-amber-500/30',
    border: 'border-amber-500/30',
    text: 'text-[oklch(1_0_0)]',
    hoverText: 'group-hover:text-[oklch(1_0_0)]'
  },
  {
    bg: 'bg-cyan-500/20',
    hover: 'hover:bg-cyan-500/30',
    border: 'border-cyan-500/30',
    text: 'text-[oklch(1_0_0)]',
    hoverText: 'group-hover:text-[oklch(1_0_0)]'
  }
] as const;

type ColorPalette = {
  bg: string;
  hover: string;
  border: string;
  text: string;
  hoverText: string;
};

// Default color palette to use as fallback
const defaultColor: ColorPalette = colorPalettes[0];

// Map of technology to color palette for consistency
const techColorMap = new Map<string, ColorPalette>();

export function getTechColor(tech: string): ColorPalette {
  // If we already have a color for this tech, return it
  const existingColor = techColorMap.get(tech);
  if (existingColor) {
    return existingColor;
  }

  // Otherwise, assign a new color from the palette
  const colorIndex = techColorMap.size % colorPalettes.length;
  const color = colorPalettes[colorIndex] as ColorPalette;

  // Store the mapping for future use
  techColorMap.set(tech, color);

  return color;
}

// Helper function to get all color classes for a tech chip
export function getTechChipClasses(tech: string): string {
  const color = getTechColor(tech);
  return `${color.bg} ${color.hover} ${color.border} ${color.text} ${color.hoverText}`;
}

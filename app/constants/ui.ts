export const RETRO_COLORS = {
  background: '#2c3a29',
  shell: '#4f654a',
  shellBorder: '#10170f',
  brand: '#d9e7bc',
  subtitle: '#9fb38d',
  screen: '#b9c99b',
  screenBorder: '#1f2a1d',
  screenTitle: '#243325',
  screenText: '#2f4430',
  filterBorder: '#253226',
  filterBackground: '#90a47b',
  filterActiveBackground: '#253226',
  filterActiveText: '#b9c99b',
  pad: '#1f2a1d',
  padCenter: '#172016',
  actionButton: '#1e2b1d',
  actionButtonBorder: '#111810',
  actionText: '#d8e5bb',
} as const;

export const RETRO_FONT_FAMILY = 'monospace' as const;

export const FILTERS = ['HOT', 'NEW', 'TOP'] as const;
export type Filter = (typeof FILTERS)[number];

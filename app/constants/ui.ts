export const RETRO_COLORS = {
  // Overall background
  background: '#2c3a29',
  // Header
  header: '#4f654a',
  headerBorder: '#10170f',
  brand: '#d9e7bc',
  subtitle: '#9fb38d',
  // Filter tab bar
  filterBar: '#3b4e37',
  filterBorder: '#253226',
  filterBackground: 'transparent',
  filterActiveBackground: '#253226',
  filterActiveText: '#b9c99b',
  filterInactiveText: '#9fb38d',
  // Post cards
  card: '#3d5239',
  cardBorder: '#1f2a1d',
  cardTitle: '#d9e7bc',
  cardMeta: '#9fb38d',
  cardBoard: '#b9c99b',
  // Divider
  divider: '#1f2a1d',
} as const;

export const RETRO_FONT_FAMILY = 'monospace' as const;

export const FILTERS = ['HOT', 'NEW', 'TOP'] as const;
export type Filter = (typeof FILTERS)[number];

export type MockPost = {
  id: string;
  board: string;
  time: string;
  title: string;
  upvotes: number;
  comments: number;
  author: string;
};

export const MOCK_POSTS: Record<Filter, MockPost[]> = {
  HOT: [
    { id: '1', board: '/retro/', time: '2h ago', title: 'Anyone else still rocking a CRT in 2025?', upvotes: 1842, comments: 217, author: 'pixel_ghost' },
    { id: '2', board: '/memes/', time: '4h ago', title: 'Windows XP startup sound hits different at 3am', upvotes: 932, comments: 88, author: 'neon_anon' },
    { id: '3', board: '/tech/', time: '6h ago', title: 'Bought a flip phone as my daily driver — AMA', upvotes: 710, comments: 154, author: 'relic_dev' },
    { id: '4', board: '/art/', time: '9h ago', title: 'Drew the whole city map in MS Paint (no plugins)', upvotes: 589, comments: 63, author: 'spritemaster' },
    { id: '5', board: '/retro/', time: '11h ago', title: 'Game Boy Color teardown — photos inside', upvotes: 422, comments: 47, author: 'ghost_mod' },
  ],
  NEW: [
    { id: '6', board: '/tech/', time: '5m ago', title: 'Just discovered IRC — where has this been all my life?', upvotes: 12, comments: 3, author: 'late_adopter' },
    { id: '7', board: '/memes/', time: '18m ago', title: 'The spinning beach ball of death deserves its own board', upvotes: 8, comments: 1, author: 'mac_phantom' },
    { id: '8', board: '/retro/', time: '34m ago', title: 'First post: showing off my vintage keyboard collection', upvotes: 5, comments: 0, author: 'key_witch' },
    { id: '9', board: '/art/', time: '47m ago', title: 'Pixel art study — GameBoy palette challenge', upvotes: 3, comments: 2, author: 'pxl_fairy' },
    { id: '10', board: '/tech/', time: '1h ago', title: 'Asking for help: getting Doom to run on my fridge', upvotes: 1, comments: 7, author: 'doom_chef' },
  ],
  TOP: [
    { id: '11', board: '/retro/', time: '3d ago', title: 'I ported Tetris to a pregnancy test — full writeup', upvotes: 94201, comments: 4112, author: 'legend_anon' },
    { id: '12', board: '/memes/', time: '1w ago', title: 'The floppy disk "save" icon is now older than most devs', upvotes: 72300, comments: 2870, author: 'byte_elder' },
    { id: '13', board: '/tech/', time: '2w ago', title: 'Built a social network with HTML tables only', upvotes: 51800, comments: 1993, author: 'table_lord' },
    { id: '14', board: '/art/', time: '1mo ago', title: 'Recreating the Mona Lisa entirely in ASCII art', upvotes: 44100, comments: 880, author: 'ascii_da_vinci' },
    { id: '15', board: '/retro/', time: '2mo ago', title: '8-bit cover of Beethoven\'s 9th using only beep syscalls', upvotes: 38900, comments: 720, author: 'chiptune_bard' },
  ],
};

import { TBreakpoints } from 'types/theme';

const BREAKPOINTS: TBreakpoints = ['575px', '768px', '900px', '1200px', '1800px'];

const [xs, s, m, l, xl] = BREAKPOINTS;

BREAKPOINTS.xs = xs;
BREAKPOINTS.s = s;
BREAKPOINTS.m = m;
BREAKPOINTS.l = l;
BREAKPOINTS.xl = xl;

export default BREAKPOINTS;

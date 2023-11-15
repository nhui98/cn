import { it, expect } from 'vitest';
import cn from '.';

it('merges and overwrites conflicting styles', () => {
  const result = cn(
    'bg-zinc-50 text-zinc-100',
    true && 'bg-zinc-100',
    false && 'text-zinc-50'
  );
  expect(result).toBe('text-zinc-100 bg-zinc-100');
});

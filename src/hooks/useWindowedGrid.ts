import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';

interface WindowedGridOptions {
  /** rows to render on first paint / whenever the item list changes */
  initialRows?: number;
  /** rows mounted or unmounted per scroll step */
  batchRows?: number;
  /** once more than this many rows are mounted, the trailing end unmounts */
  maxRows?: number;
  /** how far ahead of the viewport a sentinel fires */
  rootMargin?: string;
}

interface Range {
  start: number;
  end: number;
}

const DEFAULTS: Required<WindowedGridOptions> = {
  initialRows: 3,
  batchRows: 2,
  maxRows: 9,
  rootMargin: '600px 0px',
};

/**
 * Renders only the rows of a CSS grid that are near the viewport: more rows mount as the
 * bottom sentinel scrolls into view, and rows scrolled far above unmount again (replaced by a
 * spacer that preserves scroll height), keeping the number of live DOM nodes roughly constant.
 */
export function useWindowedGrid<T>(items: T[], options: WindowedGridOptions = {}) {
  const { initialRows, batchRows, maxRows, rootMargin } = { ...DEFAULTS, ...options };
  const total = items.length;

  const gridRef = useRef<HTMLDivElement>(null);
  const topSentinelRef = useRef<HTMLDivElement>(null);
  const bottomSentinelRef = useRef<HTMLDivElement>(null);

  const [columns, setColumns] = useState(1);
  const [rowHeight, setRowHeight] = useState(0);
  const [range, setRange] = useState<Range>({ start: 0, end: 0 });

  // whenever the underlying list changes (filter/search/category), start the window over
  useEffect(() => {
    setRange({ start: 0, end: Math.min(total, Math.max(columns, columns * initialRows)) });
  }, [items, total, columns, initialRows]);

  // track actual column count and row height so spacer heights stay accurate at any breakpoint
  useLayoutEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    const measure = () => {
      const style = getComputedStyle(grid);
      const cols = style.gridTemplateColumns.split(' ').filter(Boolean).length || 1;
      setColumns((prev) => (prev === cols ? prev : cols));

      const card = grid.querySelector<HTMLElement>('[data-grid-item]');
      if (card) {
        const rowGap = parseFloat(style.rowGap || '0') || 0;
        const height = card.offsetHeight + rowGap;
        setRowHeight((prev) => (Math.abs(prev - height) < 1 ? prev : height));
      }
    };

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(grid);
    return () => observer.disconnect();
  }, [range.start, range.end]);

  const growDown = useCallback(() => {
    setRange((prev) => {
      if (prev.end >= total) return prev;
      const end = Math.min(total, prev.end + columns * batchRows);
      let start = prev.start;
      if (Math.ceil((end - start) / columns) > maxRows) {
        start = Math.max(0, end - maxRows * columns);
      }
      return start === prev.start && end === prev.end ? prev : { start, end };
    });
  }, [columns, total, batchRows, maxRows]);

  const growUp = useCallback(() => {
    setRange((prev) => {
      if (prev.start <= 0) return prev;
      const start = Math.max(0, prev.start - columns * batchRows);
      let end = prev.end;
      if (Math.ceil((end - start) / columns) > maxRows) {
        end = Math.min(total, start + maxRows * columns);
      }
      return start === prev.start && end === prev.end ? prev : { start, end };
    });
  }, [columns, total, batchRows, maxRows]);

  useEffect(() => {
    const el = bottomSentinelRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => entries[0]?.isIntersecting && growDown(),
      { rootMargin, threshold: 0 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [growDown, rootMargin]);

  useEffect(() => {
    const el = topSentinelRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => entries[0]?.isIntersecting && growUp(),
      { rootMargin, threshold: 0 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [growUp, rootMargin]);

  const topRows = columns > 0 ? Math.floor(range.start / columns) : 0;
  const bottomRows = columns > 0 ? Math.ceil((total - range.end) / columns) : 0;

  return {
    gridRef,
    topSentinelRef,
    bottomSentinelRef,
    visibleItems: items.slice(range.start, range.end),
    topSpacerHeight: topRows * rowHeight,
    bottomSpacerHeight: bottomRows * rowHeight,
  };
}

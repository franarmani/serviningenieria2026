import { useEffect, useRef } from 'react';

const FOCUSABLE_SELECTORS = [
  'a[href]',
  'area[href]',
  'button:not([disabled])',
  'input:not([disabled]):not([type="hidden"])',
  'select:not([disabled])',
  'textarea:not([disabled])',
  'iframe',
  'object',
  'embed',
  '[contenteditable="true"]',
  '[tabindex]:not([tabindex="-1"])',
].join(',');

function getFocusableElements(container) {
  if (!container) return [];
  const nodes = Array.from(container.querySelectorAll(FOCUSABLE_SELECTORS));
  return nodes.filter((node) => {
    if (!(node instanceof HTMLElement)) return false;
    const style = window.getComputedStyle(node);
    return style.visibility !== 'hidden' && style.display !== 'none';
  });
}

/**
 * A11y + UX behavior for modals:
 * - Lock body scroll
 * - Close on Escape
 * - Focus trap (Tab / Shift+Tab)
 * - Focus first focusable element on open
 * - Restore focus on close
 */
export function useModalA11y({ isOpen, modalRef, onClose }) {
  const lastFocusedElementRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;

    lastFocusedElementRef.current = document.activeElement instanceof HTMLElement
      ? document.activeElement
      : null;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const focusModal = () => {
      const modalEl = modalRef?.current;
      if (!modalEl) return;

      const focusables = getFocusableElements(modalEl);
      const first = focusables[0];

      if (first) {
        first.focus();
      } else {
        modalEl.focus?.();
      }
    };

    // Defer to ensure DOM is painted.
    const focusTimer = window.setTimeout(focusModal, 0);

    const handleKeyDown = (e) => {
      if (!isOpen) return;

      if (e.key === 'Escape') {
        e.preventDefault();
        onClose?.();
        return;
      }

      if (e.key !== 'Tab') return;

      const modalEl = modalRef?.current;
      if (!modalEl) return;

      const focusables = getFocusableElements(modalEl);
      if (focusables.length === 0) {
        e.preventDefault();
        modalEl.focus?.();
        return;
      }

      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      const active = document.activeElement;

      if (e.shiftKey) {
        if (active === first || !modalEl.contains(active)) {
          e.preventDefault();
          last.focus();
        }
      } else {
        if (active === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.clearTimeout(focusTimer);
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = previousOverflow;

      // Restore focus
      const lastFocused = lastFocusedElementRef.current;
      if (lastFocused && document.contains(lastFocused)) {
        lastFocused.focus();
      }
    };
  }, [isOpen, modalRef, onClose]);
}

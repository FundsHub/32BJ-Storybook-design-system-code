import { useLayoutEffect, useRef, useState, type ReactNode } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Homepage } from './Homepage';

function DocsFitFrame({ children }: { children: ReactNode }) {
  const frameRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [layout, setLayout] = useState({ scale: 1, height: 1812 });

  useLayoutEffect(() => {
    const frame = frameRef.current;
    const content = contentRef.current;
    if (!frame || !content) return;

    const update = () => {
      const availableWidth = frame.clientWidth;
      const contentWidth = Math.max(content.scrollWidth, 1192);
      const scale = Math.min(1, availableWidth / contentWidth);
      const height = content.scrollHeight * scale;
      setLayout({ scale, height });
    };

    const observer = new ResizeObserver(update);
    observer.observe(frame);
    observer.observe(content);
    update();

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={frameRef}
      style={{
        width: '100%',
        height: `${layout.height}px`,
        overflow: 'hidden'
      }}
    >
      <div
        ref={contentRef}
        style={{
          width: '1192px',
          maxWidth: 'none',
          transform: `scale(${layout.scale})`,
          transformOrigin: 'top left'
        }}
      >
        {children}
      </div>
    </div>
  );
}

const meta: Meta<typeof Homepage> = {
  title: 'Patterns/Homepage',
  component: Homepage,
  tags: ['autodocs'],
  decorators: [
    (Story, context) => {
      const isDesktopDocs = context.viewMode === 'docs' && context.args.mobile !== true;
      return isDesktopDocs ? (
        <DocsFitFrame>
          <Story />
        </DocsFitFrame>
      ) : (
        <Story />
      );
    }
  ],
  parameters: {
    layout: 'fullscreen',
    viewport: { defaultViewport: 'desktop1200' },
    docs: {
      description: {
        component: 'The approved 32BJ Benefit Funds homepage from Figma node 1373:8715. This is a separate page pattern from the Health Fund landing page and includes a matching framework-free WordPress handoff.'
      }
    }
  }
};

export default meta;
type Story = StoryObj<typeof Homepage>;

export const Desktop: Story = { args: { mobile: false } };

export const Mobile: Story = {
  args: { mobile: true },
  parameters: { viewport: { defaultViewport: 'mobile390' } }
};

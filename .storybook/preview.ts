import type { Preview } from '@storybook/react';
import '../tokens.css';
import '../global.css';
import '../components.css';

const patternStatus: Record<string, string> = {
  Homepage: 'Approved Figma Page',
  'Fund Landing Page': 'Approved Figma Page',

  'Hero Carousel': 'Figma-backed Pattern',
  'Ask a Question': 'Figma-backed Pattern',
  'Video + Media': 'Figma-backed Pattern',
  'Leadership + Trustee Profiles': 'Figma-backed Pattern',

  'Content + Detail Page': 'Illustrative Composition',
  'Form Page': 'Illustrative Composition',
  'Benefit Collection': 'Illustrative Composition',
  'Resource + Forms Index': 'Illustrative Composition',
  'Course Catalog': 'Illustrative Composition',
  'Locations Directory': 'Illustrative Composition',
  'Retirement Journey + Plan Index': 'Illustrative Composition',
  'Benefit Finder': 'Illustrative Composition',
  'Page Patterns': 'Documentation / Inventory'
};

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: { expanded: true },
    a11y: { manual: false },
    layout: 'padded',
    viewport: {
      viewports: {
        mobile390: {
          name: 'Mobile 390',
          styles: { width: '390px', height: '844px' }
        },
        desktop1200: {
          name: 'Desktop 1200',
          styles: { width: '1200px', height: '900px' }
        }
      }
    }
  },

  decorators: [
    (Story, context) => {
      const isPattern = context.title?.startsWith('Patterns/');
      const patternName = context.title?.replace('Patterns/', '');
      const status = patternName ? patternStatus[patternName] : undefined;

      return (
        <>
          {isPattern && status && (
            <div className="ds-pattern-status" data-status={status}>
              {status}
            </div>
          )}
          <Story />
        </>
      );
    }
  ]
};

export default preview;

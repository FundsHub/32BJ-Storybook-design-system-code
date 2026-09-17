
import type { Preview } from '@storybook/react';
import '../tokens.css';
import '../global.css';
import '../components.css';

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
  }
};

export default preview;

export const Desktop: Story = {
  parameters: {
    viewport: { defaultViewport: 'desktop1200' }
  }
};

export const Mobile: Story = {
  args: { mobile: true },
  parameters: {
    viewport: { defaultViewport: 'mobile390' }
  }
};

export const LegalTheme: Story = {
  args: { fund: 'legal' },
  parameters: {
    viewport: { defaultViewport: 'desktop1200' }
  }
};

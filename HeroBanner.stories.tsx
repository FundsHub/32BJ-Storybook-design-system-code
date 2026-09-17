export const DesktopFigmaMatch: Story = {
  args: { mode: 'figma' },
  parameters: { viewport: { defaultViewport: 'desktop1200' } }
};

export const DesktopReduced: Story = {
  args: { mode: 'figma' },
  parameters: { viewport: { defaultViewport: 'desktop1200' } }
};

export const DesktopLiveText: Story = {
  args: { mode: 'liveText' },
  parameters: { viewport: { defaultViewport: 'desktop1200' } }
};

export const MobileLiveText: Story = {
  args: { mobile: true, mode: 'liveText' },
  parameters: { viewport: { defaultViewport: 'mobile390' } }
};

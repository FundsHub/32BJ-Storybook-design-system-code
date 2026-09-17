export const MobileMemberPortal: Story = {
  args: {
    mobile: true
  },
  parameters: {
    viewport: { defaultViewport: 'mobile390' }
  }
};

export const MobileWhoWeAre: Story = {
  args: {
    type: 'who',
    mobile: true
  },
  parameters: {
    viewport: { defaultViewport: 'mobile390' }
  }
};

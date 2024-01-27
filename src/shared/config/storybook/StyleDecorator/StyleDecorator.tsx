import 'app/styles/index.scss';

export const StyleDecorator = (Story: () => any) => (
  <div style={{ border: '10px solid black', padding: '1rem' }}>
    <Story />
  </div>
);

import 'app/styles/index.scss';

export const StyleDecorator = (Story: () => any) => {
  return (<div style={{border: '10px solid black', padding: "1rem"}}>ttest <Story /></div>)
};

import { css } from 'glamor';
import React from 'react';
import ReactDOM from 'react-dom';

const wrapper = css({
  display: 'grid',
  fontFamily: 'Lato, sans-serif',
  fontSize: '40px',
  gridAutoRows: '390px',
  gridGap: '10px',
  gridTemplateAreas: `". a a ."
  ". a a ."`,
  gridTemplateColumns: 'repeat(4, 1fr)',
});

const item = css({
  alignSelf: 'center',
  gridArea: 'a',
  justifySelf: 'center',
});

interface Props {
  name: string;
}
class Hello extends React.Component<Props, {}> {
  public render() {
    return (
      <div {...wrapper}>
        <div {...item}>Hello {this.props.name}</div>
      </div>
    );
  }
}

ReactDOM.render(<Hello name="John" />, document.getElementById('app'));

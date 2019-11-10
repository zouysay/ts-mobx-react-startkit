// src/components/Hello.tsx

import * as React from 'react';
import styles from './style.module.less';

const a = 'test';

export interface Props {
  name: string;
  enthusiasmLevel?: number;
}

class Hello extends React.Component<Props, object> {
  constructor(props: any) {
    super(props);
    console.log(process.env.BUILD_ENV);
    console.log(a, '>>>>>>>>>');
  }
  render() {
    const { name, enthusiasmLevel = 1 } = this.props;

    if (enthusiasmLevel <= 0) {
      throw new Error('You could be a little more enthusiastic. :D');
    }

    return (
      <div className="hello">
        <div className={styles.greeting}>
          Hello {name + getExclamationMarks(enthusiasmLevel)}
        </div>
      </div>
    );
  }
}

export default Hello;

// helpers

function getExclamationMarks(numChars: number) {
  return Array(numChars + 1).join('!');
}

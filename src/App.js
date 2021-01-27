import { Inspector } from 'react-dev-inspector'
import { Fragment } from 'react'

const Wrapper = process.env.NODE_ENV === 'production'
  ? Fragment
  : Inspector

function App() {
  return (
    <Wrapper
      keys={['shift', 'c']}
    >
      <div>
        123456
      </div>
      <div>
        div
      </div>
    </Wrapper>
  );
}

export default App

import { Layout } from 'antd';
import Introduction from './components/Introduction';
import Countdown from './components/Countdown';
import Location from './components/Location';
import DressCode from './components/DressCode';
import Details from './components/Details';
import './index.css'

const { Content } = Layout;

function App() {
  return (
    <Layout>
      <Content>
        <section id="introduction">
          <Introduction />
        </section>
        <section id="countdown">
          <Countdown />
        </section>
        <section id="location">
          <Location />
        </section>
        <section id="dress-code">
          <DressCode />
        </section>
        <section id="details">
          <Details />
        </section>
      </Content>
    </Layout>
  );
}

export default App;

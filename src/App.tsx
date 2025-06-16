import { Layout } from 'antd';
import './App.css';
import Countdown from './components/Countdown';
import Location from './components/Location';
import DressCode from './components/DressCode';
import Details from './components/Details';
import Introduction from './components/Introduction';

const { Content } = Layout;

function App() {
  return (
    <Layout>
      <Content style={{ background: '#ffffff', maxWidth: 800, margin: '0 auto' }}>
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

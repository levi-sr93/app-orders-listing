import Orders from './components/Orders';
import logo from '../src/assets/logo.png';
import GlobalStyles from './styles/GlobalStyles';
import { Container, Content } from './styles/styles';

function App() {
  return (
    <>
      <GlobalStyles />
      <Container>
        <Content>
          <img src={logo} alt="" />

          <Orders />
        </Content>
      </Container>
    </>
  );
}

export default App;

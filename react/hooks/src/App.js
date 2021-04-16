import './App.css';
import CoreConcept from './components/core-concept'
import Lazy from './components/lazy'
import Context from './components/context'
import ErrorCom from './components/error'
import EffectHook from './components/effectHook'
import MyHook from './components/myHook'
import HookContext from './components/hookContext'
function App() {
  return (
    <div className="App">
      {false && <CoreConcept />}
      {false && <Lazy />}
      {false && <Context />}
      {false && <ErrorCom />}
      {false && <EffectHook />}
      {true&& <MyHook/>}
      {false &&<HookContext/>}
    </div>
  );
}

export default App;

import Messenger from "./components/Messenger";
import AccountProvider from "./context/AccountProvider";
import TemplateProvider from "./theme/TemplateProvider";
import UserProvider from "./context/UserProvider";
function App() {
  return (
    <TemplateProvider>
      <UserProvider>
        <AccountProvider>
          <Messenger/>
        </AccountProvider>
      </UserProvider>
    </TemplateProvider>
  );
}

export default App;

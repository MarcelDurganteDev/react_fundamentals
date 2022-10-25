/* import LoginControl from "./concepts/conditionalRendering/LoginControl";*/
/* import Page from "./concepts/conditionalRendering/Page"; */
/* import Mailbox from "./concepts/conditionalRendering/MailBox"; */
/* import { NumberList } from "./concepts/listsAndKeys/NumberList"; */
import { Blog } from "./concepts/listsAndKeys/Blog";

function App() {

  // const messages = ['React', 'Re: React', 'Re:Re: React'];
  // const numbers = [1, 2, 3, 4, 5];
  const posts = [
    {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
    {id: 2, title: 'Installation', content: 'You can install React from npm.'}
  ];
  return (
    /* <LoginControl/> */
    /* <Page /> */
    /* <Mailbox unreadMessages={messages} /> */
    /* <NumberList numbers={numbers} /> */
    <Blog posts={posts} />
  );
}

export default App;

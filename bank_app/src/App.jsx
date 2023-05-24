import styles from "./style";
import { Billing, Business, CardDeal, Clients, CTA, Footer, Navbar, Stats, Testimonials, Hero } from "./components";
import Chat from "./components/Chat/Chat.jsx";
import ChatAdmin from "./components/Chat/ChatAdmin.jsx";
import ChatClosed from "./components/Chat/ChatClosed.jsx";

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>
    
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats />
        <Business />
        <Footer />
        <Chat/>
          {/*<ChatAdmin />*/}
          {/*<ChatClosed />*/}
      </div>
    </div>
  </div>
);

export default App;

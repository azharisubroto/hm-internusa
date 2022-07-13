import { tw, css } from 'twind/css';
import Button from '@/components/button';

const headerStyle = css`
  background-color: #fff;
  min-height: calc(100vh - 6rem);
`;

const Header = () => (
  <header className={tw(headerStyle)}>
    <div className={tw(`max-w-4xl mx-auto py-16 px-14 sm:px-6 lg:px-8`)}>
      <h1 className={tw(`font-bold text-3xl md:text-4xl lg:text-5xl text-center leading-snug text-primary`)}>
        We realize that high quality, fast delivery, and competitive cost are the key of excellent choice.
      </h1>
      <div className={tw(`max-w-xl mx-auto`)}>
        <p className={tw(`mt-10 text-tertiary text-center text-xl lg:text-3xl`)}>
          We can be your ONE Stop Sourcing &amp; Supplier for all your products in consumer agriculture, spice, food
          supplies, stationery, and much more.
        </p>
      </div>
      <div className={tw(`mt-10 flex justify-center items-center w-full mx-auto`)}>
        <Button primary modifier="px-20 py-4">
          <span className={tw(`text-2xl`)}>Contact Us</span>
        </Button>
      </div>
    </div>
  </header>
);

export default Header;

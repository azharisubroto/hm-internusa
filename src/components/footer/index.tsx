import { tw } from 'twind';
import Button from '@/components/button';
import Image from 'next/future/image';

const productLinks = [`Features`, `Customers`, `Platform`, `Pricing`, `Enterprise`, `What's new?`];
const aboutLinks = [`About Us`, `Careers`, `Leadership`, `Blog`, `Events`, `Press`];
const resourceLinks = [
  `Get started`,
  `Guides`,
  `Tools`,
  `Case studies`,
  `Solutions`,
  `FAQs`,
  `Help Center`,
  `Training`,
  `Other resources`
];

const Footer = () => (
  <footer className={tw(`bg-white pt-10 pb-10`)}>
    <div className={tw(`max-w-6xl mx-auto text-gray-400 px-8 lg:px-0 flex flex-wrap`)}>
      {/* Logo */}
      <div className={tw(`flex flex-wraps items-center justify-between w-full`)}>
        <div className={tw(`flex items-center gap-4`)}>
          <Image
            className={tw(`h-12 w-12 mr-4`)}
            src="/images/logo.png"
            alt="logo"
            width={150}
            height={80}
            style={{ width: `auto` }}
            loading="lazy"
          />
          <p className={tw(`text-xl text-primary font-bold`)}>HARUM MANIS INTERNUSA</p>
        </div>

        <div>Copyright &copy; 2022 PT Harum Manis Internusa. All rights reserved</div>
      </div>

      {/* Footer Menu */}
      <div className={tw(`hidden w-full lg:w-1/2`)}>
        <ul className={tw(`text-lg font-light flex flex-wrap w-full`)}>
          <li className={tw(`w-1/2 md:w-1/3 lg:w-1/3`)}>
            <div>
              <h4 className={tw(`text-primary text-base font-bold mb-1`)}>Product</h4>
              <ul>
                {productLinks.map((link) => (
                  <li className={tw(`text-tertiary hover:text-bronze text-sm font-medium leading-6`)} key={link}>
                    <a href="/">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          </li>
          <li className={tw(`w-1/2 md:w-1/3 lg:w-1/3`)}>
            <div>
              <h4 className={tw(`text-primary text-base font-bold mb-1`)}>Resources</h4>
              <ul>
                {resourceLinks.map((link) => (
                  <li className={tw(`text-tertiary hover:text-bronze text-sm font-medium leading-6`)} key={link}>
                    <a href="/">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          </li>
          <li className={tw(`w-1/2 md:w-1/3 lg:w-1/3`)}>
            <div>
              <h4 className={tw(`text-primary text-base font-bold mb-1`)}>About Us</h4>
              <ul>
                {aboutLinks.map((link) => (
                  <li className={tw(`text-tertiary hover:text-bronze text-sm font-medium leading-6`)} key={link}>
                    <a href="/">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>
      </div>

      {/* Newsletter */}
      <div className={tw(`hidden w-full lg:w-1/2 mt-12 lg:mt-0`)}>
        <div className={tw(`border border-gray-400 rounded py-5 px-4`)}>
          <h4 className={tw(`font-mono text-sm uppercase text-gray-500 mb-3`)}>Subscribe our newsletter</h4>
          <div className={tw(`flex w-full`)}>
            <input
              aria-label="email address"
              type="text"
              className={tw([
                `border`,
                `border-gray-300`,
                `bg-gray-100`,
                `min-w-0`,
                `w-full`,
                `rounded`,
                `text-tertiary`,
                `hover:text-bronze`,
                `py-2`,
                `px-3`,
                `mr-2`
              ])}
              placeholder="Enter your email"
            />
            <Button>Subscribe</Button>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;

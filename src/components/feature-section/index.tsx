import { tw } from 'twind';
import Check from '@/constants/svg/check.svg';

const FeatureSection = () => (
  <section className={tw(`bg-isabel pb-6`)}>
    <div className={tw(`max-w-7xl mx-auto p-4 sm:p-6 lg:p-8`)}>
      <div className={tw(`container mx-auto px-6 p-6`)}>
        <div className={tw(`mb-16 text-center`)}>
          <h4 className={tw(`text-base text-bronze font-semibold tracking-wide uppercase`)}>Features</h4>
          <p className={tw(`mt-2 text-5xl lg:text-7xl font-bold tracking-tight text-secondary`)}>
            How we change the game
          </p>
        </div>
        <div className={tw(`flex flex-wrap my-12`)}>
          <div className={tw(`border-isabelcontrast w-full border-b md:w-1/2 md:border-r lg:w-1/3 p-8`)}>
            <div className={tw(`flex items-center mb-6`)}>
              <Check width={20} height={20} fill="currentColor" className={tw(`h-6 w-6 text-bronze`)} />
              <div className={tw(`ml-4 text-xl`)}>INTEGRITY</div>
            </div>
            <p className={tw(`leading-loose text-tertiary`)}>
              Means telling the truth, keeping promises, and treating others fairly and with respect. Integrity is one
              of our most valuable assets. It cannot be compromised.
            </p>
          </div>
          <div className={tw(`border-isabelcontrast w-full border-b md:w-1/2 lg:w-1/3 lg:border-r p-8`)}>
            <div className={tw(`flex items-center mb-6`)}>
              <Check width={20} height={20} fill="currentColor" className={tw(`h-6 w-6 text-bronze`)} />
              <div className={tw(`ml-4 text-xl`)}>QUALITY</div>
            </div>
            <p className={tw(`leading-loose text-tertiary `)}>
              Our company strives to provide the best quality with a choice of raw material supply options in the field
            </p>
          </div>
          <div className={tw(`border-isabelcontrast w-full border-b md:w-1/2 md:border-r lg:w-1/3 lg:border-r-0 p-8`)}>
            <div className="flex items-center mb-6">
              <Check width={20} height={20} fill="currentColor" className={tw(`h-6 w-6 text-bronze`)} />
              <div className={tw(`ml-4 text-xl`)}>COMMITMENT</div>
            </div>
            <p className={tw(`leading-loose text-tertiary`)}>
              We treat our customers equally, either our customers require in big or small amount of quantity products,
              we&apos;ll try to provide what you need.
            </p>
          </div>
          <div className={tw(`border-isabelcontrast w-full border-b md:w-1/2 lg:w-1/3 lg:border-r lg:border-b-0 p-8`)}>
            <div className={tw(`flex items-center mb-6`)}>
              <Check width={20} height={20} fill="currentColor" className={tw(`h-6 w-6 text-bronze`)} />
              <div className={tw(`ml-4 text-xl`)}>PRICE</div>
            </div>
            <p className={tw(`leading-loose text-tertiary`)}>
              Our company offers product prices and prices that tend to be competitive for all products, making us
              trusted to have various customers and business partners both locally and abroad.
            </p>
          </div>
          <div
            className={tw(
              `border-isabelcontrast w-full border-b md:w-1/2 md:border-r md:border-b-0 lg:w-1/3 lg:border-b-0 p-8`
            )}>
            <div className={tw(`flex items-center mb-6`)}>
              <Check width={20} height={20} fill="currentColor" className={tw(`h-6 w-6 text-bronze`)} />
              <div className={tw(`ml-4 text-xl`)}>AREA</div>
            </div>
            <p className={tw(`leading-loose text-tertiary`)}>
              The products we produce are produced in the land of Sulawesi which is famous for its fertile soil and is
              one of the largest commodities in Indonesia, making our products have better and more yields than other
              regions
            </p>
          </div>
          <div className={tw(`w-full md:w-1/2 lg:w-1/3 p-8`)}>
            <div className={tw(`flex items-center mb-6`)}>
              <Check width={20} height={20} fill="currentColor" className={tw(`h-6 w-6 text-bronze`)} />
              <div className={tw(`ml-4 text-xl`)}>Reliable</div>
            </div>
            <p className={tw(`leading-loose text-tertiary`)}>
              We always make sure that the your order always on track. So that you can tell on what stage is the
              ordering process currently in.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default FeatureSection;

import LayoutDefault from '@/Layouts/default';
import Header from '@/components/header';
import FeatureSection from '@/components/feature-section';

export default function Home() {
  return (
    <LayoutDefault
      nextSeoProps={{
        title: `HM Internusa`,
        description: `Your ONE Stop Sourcing & Supplier for all your products`
      }}>
      <Header />
      <FeatureSection />
    </LayoutDefault>
  );
}

import PricingTable from '@/components/pricing-table';
import LayoutDefault from '@/Layouts/default';
import Header from '@/components/header';

export default function Home() {
  return (
    <LayoutDefault
      nextSeoProps={{
        title: `HM Internusa`,
        description: `Ease your business`
      }}>
      <Header />
      <PricingTable />
    </LayoutDefault>
  );
}

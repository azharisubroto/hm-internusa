import PricingTable from '@/components/pricing-table';
import LayoutDefault from '@/Layouts/default';

export default function Home() {
  return (
    <LayoutDefault
      nextSeoProps={{
        title: `HM Internusa`,
        description: `Ease your business`
      }}>
      <PricingTable />
    </LayoutDefault>
  );
}

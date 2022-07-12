// import VideoSection from '@/components/video-section';
import ListSection from '@/components/list-section';
import FeatureSection from '@/components/feature-section';
// import CasesSection from '@/components/cases-section';
// import SocialProof from '@/components/social-proof';
import PricingTable from '@/components/pricing-table';
import LayoutDefault from '@/Layouts/default';

export default function Home() {
  return (
    <LayoutDefault
      nextSeoProps={{
        title: `Staviq`,
        description: `Ease your business`
      }}>
      {/* <VideoSection /> */}
      <ListSection />
      <FeatureSection />
      {/* <CasesSection /> */}
      {/* <SocialProof /> */}
      <PricingTable />
    </LayoutDefault>
  );
}

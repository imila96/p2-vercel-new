import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import CommercePlatformSection from '@/components/CommercePlatformSection';
import EntrepreneursSection from '@/components/EntrepreneursSection';
import SellEverywhereSection from '@/components/SellEverywhereSection';
import FindCustomersSection from '@/components/FindCustomersSection';
import GlobalSection from '@/components/GlobalSection';
import BusinessManagementSection from '@/components/BusinessManagementSection';
import AppsSection from '@/components/AppsSection';
import DeveloperSection from '@/components/DeveloperSection';
import CheckoutPerformanceSection from '@/components/CheckoutPerformanceSection';
import EasyStartSection from '@/components/EasyStartSection';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <CommercePlatformSection />
      <EntrepreneursSection />
      <SellEverywhereSection />
      <FindCustomersSection />
      <GlobalSection />
      <BusinessManagementSection />
      <AppsSection />
      <DeveloperSection />
      <CheckoutPerformanceSection />
      <EasyStartSection />
    </main>
  );
}

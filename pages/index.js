import { useState } from 'react';
import Head from 'next/head';
import BottomNav from '../components/BottomNav';
import HomeTab from '../components/HomeTab';
import SearchTab from '../components/SearchTab';
import JoinTab from '../components/JoinTab';
import ProviderProfile from '../components/ProviderProfile';

export default function Home() {
  const [tab, setTab] = useState('home');
  const [selectedProvider, setSelectedProvider] = useState(null);

  const handleSelectProvider = (provider) => {
    setSelectedProvider(provider);
  };

  const handleBack = () => {
    setSelectedProvider(null);
  };

  return (
    <>
      <Head>
        <title>Plugged — Local Services</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      </Head>

      <div className="page-shell">
        {selectedProvider ? (
          <ProviderProfile provider={selectedProvider} onBack={handleBack} />
        ) : (
          <>
            {tab === 'home'   && <HomeTab onSelectProvider={handleSelectProvider} />}
            {tab === 'search' && <SearchTab onSelectProvider={handleSelectProvider} />}
            {tab === 'join'   && <JoinTab />}
          </>
        )}

        {!selectedProvider && (
          <BottomNav active={tab} setActive={setTab} />
        )}
      </div>
    </>
  );
}

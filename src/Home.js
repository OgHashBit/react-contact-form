import React from 'react';
import PageTemplate from '../PageTemplate';
import Benefits, { TBenefit } from 'src/blocks/Benefits';
import HeroSlider from 'src/blocks/HeroSlider';
import PuzzleSVG from '@icons/puzzle';
import PerformanceSVG from '@icons/performance';
import ReactSVG from '@icons/react';
import CrossPlatformSVG from '@icons/cross_platform';


export default function Home() {
  return (
    <PageTemplate>
      <HeroSlider
        headline="Impact Gemstone"
        subheadline="Hardest assets are now liqud!"
      />
      <Benefits
        headline="Trade gemstones frictionless while original is secured in vault "
        benefits={getLandingPageBenefits()}
      />
      <GettingStarted />
      <CommunityResources resources={getLandingPageResources()} />
    </PageTemplate>
  );
}

function getLandingPageBenefits(): TBenefit[] {
  return [
    {
      icon: <PuzzleSVG />,
      title: 'Ownership',
      description:
        'We use Flow-based, non-fungible tokens to represent ownership of individual gemstones',
    },
    {
      icon: <PerformanceSVG />,
      title: 'Perserve Your Investment Value',
      description:
        'With Impact you always buy and sell close to wholesale price. Thus your investment doesn’t lose half its value the moment you “drive it out of the showroom.”',
    },
    {
      icon: <ReactSVG />,
      title: 'Use-case',
      description:
        'NFTs can be traded ony any supported marketplace if off-chain gemstone is still available for claim. When you decide to redeem your non-fungible token, we will request delivery of your gemstone from vault to specified address. If you ever decide to return gemstone we will return NFT when gemstone is back in vault (may lose some value overtime) ',
    },
    {
      icon: <CrossPlatformSVG />,
      title: 'Cross platform',
      description:
        'To claim off-chain gemstone make request on claim page by entering required information. After that confirm transaction in your wallet and pay small authorization fee. Off-chain gemstone usually takes 2 weeks to arrive, depending where you live.',
    },
  ];
}


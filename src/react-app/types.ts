
export enum TabId {
  Home = 'home',
  Business = 'business',
  Personal = 'personal',
  Legal = 'legal',
}

export interface FlashcardItem {
  id: string;
  title: string;
  shortInfo?: string;
  modalTitle: string;
  modalContent: React.ReactNode;
}

export interface NavItem {
  label: string;
  action?: () => void;
}

export interface ProductCatalogItem {
  id: string;
  cardTitle: string;
  productName: string;
  price: string;
  cardImage: string;
  howItWorksSteps?: string[];
  howToSteps?: string[];
  modalDetails: {
    image: string;
    title: string;
    subtitle?: string;
    price: string;
    orderLink: string;
    orderLinkDomainInfo?: string;
    description: React.ReactNode;
  };
}


import React from 'react';
import { TabId, FlashcardItem, NavItem, ProductCatalogItem } from './types';

// SvgIcon type for component props
type SvgIcon = React.FC<React.SVGProps<SVGSVGElement>>;

// Common Icon Components
export const MenuIcon: SvgIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

export const HelpIcon: SvgIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.79 4 4 0 .863-.27 1.66-.744 2.26l-1.42 1.42c-.29.29-.434.695-.434 1.11V16" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 20h.01" />
    </svg>
);
  
export const CloseIcon: SvgIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

export const HomeIcon: SvgIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
);

export const BusinessIcon: SvgIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
);

export const PersonalIcon: SvgIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
);

export const LegalIcon: SvgIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2h10a2 2 0 002-2v-1a2 2 0 012-2h1.945M7.737 16.525l-.338.507a2 2 0 001.787 2.968h6.162a2 2 0 001.787-2.968l-.338-.507M12 13.5V3m0 0L9.25 5.75M12 3l2.75 2.75" />
    </svg>
);

export const ChatBubbleIcon: SvgIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.54 15.253 3 13.687 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
    </svg>
);
  
export const PhoneOutgoingIcon: SvgIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 3h5m0 0v5m0-5l-6 6M5 3a2 2 0 00-2 2v1h3V5a2 2 0 00-1-2zm0 4H3v2h2V7zm0 4H3v2h2v-2zm0 4H3v2h2v-2zM7 21a2 2 0 002-2v-1H7v1a2 2 0 000 2zm4 0h2v-2h-2v2zm4 0h2v-2h-2v2z" />
    </svg>
);

export const RefreshCwIcon: SvgIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M23 4v6h-6M1 20v-6h6" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.51 9a9 9 0 0114.85-3.36L20.5 8M3.5 16a9 9 0 0114.85-3.36L20.5 15" />
    </svg>
);
  
export const InfoIcon: SvgIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);
  
// App-wide Constants
export const APP_TITLE = "Lab Testing Solutions";
export const PHONE_NUMBER = "1-888-888-8888"; // Placeholder
export const COMPLEX_ISSUES_TEXT = "For complex issues, please visit our help portal at labtestingsolutions.help or text us.";
export const COMPLEX_ISSUES_URL = "https://www.LabTestingSolutions.Help";
export const COPYRIGHT_INFO_2011 = "© 2011 Lab Testing Solutions, Inc.";
export const COPYRIGHT_INFO_2024 = "© 2024 Lab Testing Solutions, LLC";


// Help Modal Content
export const HELP_MODAL_TITLE = "Get Help";
export const AI_CHATBOT_PROMPT = "For instant answers, our AI-powered chatbot can help you with most questions.";
export const HUMAN_CONTACT_PROMPT = "For complex issues or to speak with a human, text us at:";

// Tab Navigation Configuration
export interface TabConfig {
  id: TabId;
  label: string;
  icon: JSX.Element;
}

export const TAB_CONFIG: TabConfig[] = [
  { id: TabId.Home, label: 'Home', icon: <HomeIcon className="w-full h-full"/> },
  { id: TabId.Business, label: 'Business', icon: <BusinessIcon className="w-full h-full"/> },
  { id: TabId.Personal, label: 'Personal', icon: <PersonalIcon className="w-full h-full"/> },
  { id: TabId.Legal, label: 'Legal', icon: <LegalIcon className="w-full h-full"/> },
];

// Hamburger Menu Items
export const HAMBURGER_MENU_ITEMS = (toggleHelpModal: () => void, openModal: (data: FlashcardItem) => void): NavItem[] => [
    { label: 'Help & Support', action: toggleHelpModal },
    { 
      label: 'Barcode / Results', 
      action: () => openModal({
        id: 'barcode-results',
        title: 'Barcode / Results',
        modalTitle: 'Barcode & Results Information',
        modalContent: 'Detailed content about barcodes and results...'
      }) 
    },
    // Add other items as needed
  ];
  

// Home Page Content
export const HOME_WELCOME_BANNER = "Welcome to Lab Testing Solutions";
export const HOME_TAGLINE = "Fast, reliable, and confidential testing services for personal, business, and legal needs.";
export const HOME_MOTTO = "Your results are our priority.";

export const HOME_FLASHCARDS: FlashcardItem[] = [
  {
    id: 'quest-labcorp',
    title: 'Quest vs. LabCorp: Key Differences',
    shortInfo: 'Understand which lab network is right for you.',
    modalTitle: 'Comparing Quest Diagnostics and LabCorp',
    modalContent: (
        <div className="space-y-4">
          <p>This is placeholder content about Quest vs. LabCorp. Replace with actual details comparing the two lab service providers.</p>
        </div>
      ),
  },
  {
    id: 'locations',
    title: 'Finding a Location & Hours',
    shortInfo: 'Appointments, walk-ins, and what to bring.',
    modalTitle: 'Location and Appointment Information',
    modalContent: 'This is placeholder content about finding locations and hours. Replace with actual details.',
  },
  {
    id: 'barcodes',
    title: 'Understanding Your Barcode',
    shortInfo: 'How to use your barcode for testing and results.',
    modalTitle: 'Your Testing Barcode Explained',
    modalContent: 'This is placeholder content about barcodes. Replace with actual details.',
  },
  {
    id: 'support',
    title: 'Payment & Support Channels',
    shortInfo: 'Billing, refunds, and how to get help.',
    modalTitle: 'Payment, Billing, and Support',
    modalContent: 'This is placeholder content about payment and support. Replace with actual details.',
  },
];


// Personal Page Content
export const PERSONAL_MAIN_TITLE = "Personal Testing Services";
export const PERSONAL_SUB_TITLE = "Confidential and reliable testing for individual needs. Get peace of mind with our secure and accurate results.";
export const SAMHSA_COMPLIANCE_HEADING = "SAMHSA Certified Labs";
export const SAMHSA_COMPLIANCE_INFO = "All tests are processed at labs that are SAMHSA Certified, ensuring the highest standards of accuracy and reliability.";

export const PERSONAL_PRODUCTS: ProductCatalogItem[] = [
    {
      id: 'personal-urine-5-panel',
      cardTitle: 'Most Popular',
      productName: '5-Panel Urine Drug Test',
      price: '$75.00',
      cardImage: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop',
      howToSteps: [
        'Order your test online.',
        'Receive your barcode instantly.',
        'Visit a nearby lab for collection.',
        'Get results in 2-3 business days.',
      ],
      modalDetails: {
        image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop',
        title: '5-Panel Urine Drug Test',
        subtitle: 'Standard screening for common drugs of abuse.',
        price: '$75.00',
        orderLink: '#',
        orderLinkDomainInfo: 'Order via our secure portal.',
        description: 'This is a detailed description for the 5-Panel Urine Drug Test...',
      },
    },
    // Add other personal products here
  ];
  

// Business Page Content
export const BUSINESS_MAIN_TITLE = "Corporate & Business Testing";
export const BUSINESS_PRODUCTS_CATALOG: ProductCatalogItem[] = [
    {
      id: 'business-urine-10-panel',
      cardTitle: 'Standard Business',
      productName: '10-Panel Urine Drug Test',
      price: '$85.00',
      cardImage: 'https://images.unsplash.com/photo-1629904853716-f0bc54eea481?q=80&w=2070&auto=format&fit=crop',
      howItWorksSteps: [
        'Employer sets up account.',
        'Applicant receives barcode.',
        'Collection at approved site.',
        'Results sent to employer.',
      ],
      modalDetails: {
        image: 'https://images.unsplash.com/photo-1629904853716-f0bc54eea481?q=80&w=2070&auto=format&fit=crop',
        title: '10-Panel Urine Drug Test (Business)',
        price: '$85.00',
        orderLink: '#',
        description: 'Comprehensive screening suitable for most pre-employment and workplace testing programs.',
      },
    },
    // Add other business products here
  ];
  
// Legal Page Content
export const LEGAL_MAIN_TITLE = "Legal & Court-Ordered Testing";
export const LEGAL_PRODUCTS_CATALOG: ProductCatalogItem[] = [
    {
      id: 'legal-hair-follicle-9-panel',
      cardTitle: 'Court Admissible',
      productName: '9-Panel Hair Follicle Test',
      price: '$179.00',
      cardImage: 'https://plus.unsplash.com/premium_photo-1673489143851-45c11a513c9e?q=80&w=2070&auto=format&fit=crop',
      howItWorksSteps: [
        'Schedule appointment.',
        'Observed collection process.',
        'Lab processes specimen.',
        'Results sent to legal entity.',
      ],
      modalDetails: {
        image: 'https://plus.unsplash.com/premium_photo-1673489143851-45c11a513c9e?q=80&w=2070&auto=format&fit=crop',
        title: '9-Panel Hair Follicle Drug Test (Legal)',
        price: '$179.00',
        orderLink: '#',
        description: 'Provides a 90-day drug use history and is admissible in court proceedings. Requires professional collection.',
      },
    },
    // Add other legal products here
];

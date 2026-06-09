import { Metadata } from 'next';
import { generateMetadata } from '@/utils/seoHelpers';

export const metadata: Metadata = generateMetadata({
  title: "Remote Office Installation - VOLTRIS",
  description: "Remote installation of Microsoft Office (Word, Excel, PowerPoint, Outlook). Full setup and activation. Specialized technical support.",
  keywords: [
    "Office installation",
    "Microsoft Office",
    "Word Excel PowerPoint",
    "remote installation",
    "Office configuration",
    "Office activation",
    "Office 365",
    "Office 2021",
    "Office 2019",
    "Office support"
  ],
  url: '/instalacao-office',
  image: 'https://www.voltrisoptimizer.com/logo.png'
});
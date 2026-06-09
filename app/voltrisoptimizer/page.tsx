import { Metadata } from 'next';
import OptimizerClient from './OptimizerClient';

export const metadata: Metadata = {
  title: 'Voltris Optimizer | PC Optimizer for Gaming and Business (Free Trial)',
  description: 'Increase your FPS by up to 40% and eliminate Windows lag. Voltris Optimizer uses kernel engineering to accelerate your PC and optimize the system automatically. Safe and Professional.',
  keywords: [
    // Cluster: Core / General Optimization
    'optimize windows',
    'speed up pc',
    'optimization software',
    'system cleanup',
    'slow pc solutions',
    'how to make pc faster',
    'windows performance booster',
    'automatic pc optimizer',
    'clean ram automatically',
    'fix slow windows',
    'best windows 11 optimizer',
    'best windows 10 optimizer',
    'maximum pc performance',

    // Cluster: Gamers
    'increase fps',
    'boost fps in games',
    'improve fps',
    'how to increase fps',
    'reduce input lag',
    'reduce windows lag',
    'game optimizer',
    'optimize pc for gaming',
    'gaming pc optimization',
    'professional game booster',
    'fps boost windows',
    'reduce ping in games',
    'frame time stability',
    'optimize windows for games',
    'improve gaming performance',
    'competitive gaming optimization',

    // Cluster: Streamers
    'improve fps for streaming',
    'optimize pc for live streams',
    'reduce windows lag for streaming',
    'optimization for OBS',
    'improve performance for OBS',
    'optimize pc for streaming',

    // Cluster: Enterprise / B2B
    'corporate pc optimization',
    'remote computer optimization',
    'remote performance management',
    'enterprise optimization saas',
    'corporate machine performance control',
    'cloud windows performance management',
    'preventive it maintenance',
    'speed up office computer',
    'windows productivity',
    'stop pc freezing at work',
    'remote it support',
    'home office optimization',

    // Cluster: Technical
    'windows kernel optimization',
    'cpu thread management',
    'dpc latency reduction',
    'tcp ip optimization',
    'safe windows debloat',
    'saas optimization software',
    'web based remote control',
    'saas technology',

    // Cluster: Authority
    'clear nvidia shader cache',
    'clear amd shader cache',
    'reduce windows input lag',
    'timer resolution tweak',
    'deep winsxs cleanup',
    'repair corrupted windows sfc',
    'ai based kernel optimization',
    'voltris shield security',
    'lyra ai performance engine'
  ],
  openGraph: {
    title: 'VOLTRIS OPTIMIZER | First SaaS Optimization Software with Remote Control',
    description: 'Professional optimization software with web-based remote control. Boost FPS, optimize for streaming, accelerate business. Innovative SaaS technology.',
    url: 'https://www.voltrisoptimizer.com/voltrisoptimizer',
    type: 'website',
    siteName: 'VOLTRIS Technology',
    images: [
      {
        url: 'https://www.voltrisoptimizer.com/og-optimizer-enterprise.jpg',
        width: 1200,
        height: 630,
        alt: 'Voltris Optimizer Dashboard',
      },
    ],
    locale: 'en_US',
  },
  alternates: {
    canonical: 'https://www.voltrisoptimizer.com/voltrisoptimizer',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function OptimizerPage() {
  return <OptimizerClient />;
}

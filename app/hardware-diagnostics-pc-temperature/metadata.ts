import { Metadata } from 'next';
import { createGuideMetadata } from '@/components/GuideTemplate';

export const title = "Hardware Diagnostic and PC Temperature Monitoring (2026)";
export const description = "Is your PC heating up? Learn how to monitor CPU and GPU temperatures, check SSD health, and diagnose hardware problems with Voltris Diagnostic.";

export const keywords = [
    'monitor cpu gpu temperature',
    'test hdd ssd health windows',
    'voltris diagnostic hardware pc',
    'temperature monitoring in games',
    'identify defective pc gamer part',
    'how to test ram windows 11',
    'ideal processor temperature intel amd',
    'ssd health crystaldiskinfo vs voltris'
];

export const metadata: Metadata = createGuideMetadata('diagnostico-hardware-temperatura-pc', title, description, keywords);

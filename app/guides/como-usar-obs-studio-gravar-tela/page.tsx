import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
  id: 'como-usar-obs-studio-gravar-tela',
  title: "How to Use OBS Studio to Record Your Screen (Complete Tutorial)",
  description: "Want to record your matches or tutorials with professional quality? Learn how to configure OBS Studio for lightweight, lag-free screen recording in 2026.",
  category: 'software',
  difficulty: 'Intermediate',
  time: '20 min'
};

const title = "How to Use OBS Studio to Record Your Screen (Complete Tutorial)";
const description = "Want to record your matches or tutorials with professional quality? Learn how to configure OBS Studio for lightweight, lag-free screen recording in 2026.";
const keywords = [
    'how to use obs studio for pc screen recording 2026',
    'best obs studio recording settings fps',
    'record game screen and audio simultaneously tutorial',
    'configure obs studio for low end pc light recording',
    'where to download and how to install official obs studio'
];

export const metadata: Metadata = createGuideMetadata('como-usar-obs-studio-gravar-tela', title, description, keywords);

export default function OBSRecordingGuide() {
    const summaryTable = [
        { label: "File Format", value: "MKV (Safer) or MP4" },
        { label: "Recommended Encoder", value: "NVIDIA NVENC / AMD AMF" },
        { label: "Resolution", value: "Base 1080p / Output 1080p" },
        { label: "Difficulty", value: "Medium" }
    ];

    const contentSections = [
        {
            title: "Why is OBS Studio the industry standard?",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          Unlike simple recorders, **OBS Studio** (Open Broadcaster Software) offers total control. It allows you to separate your microphone audio from the game audio, create scenes with a webcam, and most importantly: use your graphics card's chip to record without losing FPS in the game. In 2026, it remains the most powerful and free tool for content creators.
        </p>
      `
        },
        {
            title: "1. Output Settings (Increasing Quality)",
            content: `
        <p class="mb-4 text-gray-300">Go to Settings > Output and change the Output Mode to 'Advanced':</p>
        <ul class="list-disc list-inside text-gray-300 space-y-3">
            <li><strong>Type:</strong> Standard.</li>
            <li><strong>Recording Path:</strong> Choose a folder on a fast SSD.</li>
            <li><strong>Recording Format:</strong> Use <strong>MKV</strong>. If your PC crashes or the power goes out, you won't lose the video. Later, you can convert to MP4 within OBS itself (File > Remux Recordings).</li>
            <li><strong>Encoder:</strong> Select your graphics card's encoder (NVIDIA NVENC H.264/AV1 or AMD HW). This takes the load off your processor.</li>
        </ul>
      `
        },
        {
            title: "2. Lag-Free Recording on Low-End PCs",
            content: `
        <div class="bg-blue-900/10 p-5 rounded-xl border border-blue-500/20">
            <h4 class="text-white font-bold mb-2">Performance Trick:</h4>
            <p class="text-sm text-gray-300">
                If your video is coming out "stuttery," change the Rate Control to <strong>CQP</strong> instead of CBR. Use a CQP value between <strong>18 and 23</strong>. The lower the number, the higher the quality and the larger the file. CQP ensures OBS uses only the necessary resources to capture the image faithfully, without wasting processing power.
            </p>
        </div>
      `
        },
        {
            title: "3. Game Capture vs. Display Capture",
            content: `
        <p class="mb-4 text-gray-300">
            <strong>Game Capture:</strong> This is the most efficient mode. OBS "locks" onto the game and nothing else appears, preserving your privacy (Windows notifications won't show in the video).
            <br/><br/>
            <strong>Display Capture:</strong> Use this only for tutorials where you need to show the entire Windows desktop. In 2026, this mode still consumes slightly more system resources than direct game capture.
        </p>
      `
        }
    ];

    // Additional advanced content sections
    const advancedContentSections = [
        {
            title: "12. Video Capture and Encoding Architecture",
            content: `
        <h4 class="text-white font-bold mb-3">🔧 Video Capture Architecture in 2026</h4>
        <p class="mb-4 text-gray-300">
            Screen and game capture in OBS Studio utilizes different technical methods that directly impact performance and quality:
        </p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
            <div class="bg-blue-900/10 p-5 rounded-xl border border-blue-500/20">
                <h5 class="text-blue-400 font-bold mb-3">Game Capture</h5>
                <ul class="text-sm text-gray-300 space-y-2">
                    <li>• Hooking into graphics APIs (DXGI, D3D11, OpenGL)</li>
                    <li>• Direct capture from the game's framebuffer</li>
                    <li>• Lower CPU overhead</li>
                    <li>• Support for overlays and HUDs</li>
                    <li>• Compatibility with DirectX 12 and Vulkan</li>
                </ul>
            </div>
            <div class="bg-purple-900/10 p-5 rounded-xl border border-purple-500/20">
                <h5 class="text-purple-400 font-bold mb-3">Window/Display Capture</h5>
                <ul class="text-sm text-gray-300 space-y-2">
                    <li>• Pixel composition on the GPU</li>
                    <li>• Capture of windows or entire monitors</li>
                    <li>• Higher CPU overhead</li>
                    <li>• Capture of all windows and overlays</li>
                    <li>• Support for varied resolutions</li>
                </ul>
            </div>
        </div>
        
        <h4 class="text-white font-bold mb-3 mt-6">⚙️ Video Encoding Pipeline</h4>
        <p class="mb-4 text-gray-300">
            The encoding process involves multiple stages that determine quality and efficiency:
        </p>
        <div class="overflow-x-auto">
            <table class="w-full text-sm text-gray-300 border border-gray-700 rounded-lg">
                <thead class="bg-gray-800">
                    <tr>
                        <th class="p-3 text-left">Stage</th>
                        <th class="p-3 text-left">Description</th>
                        <th class="p-3 text-left">Component</th>
                        <th class="p-3 text-left">Impact</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="border-t border-gray-700">
                        <td class="p-3">1. Capture</td>
                        <td class="p-3">Obtaining frames</td>
                        <td class="p-3">GPU/CPU</td>
                        <td class="p-3">Determines frame rate</td>
                    </tr>
                    <tr class="border-t border-gray-700 bg-gray-800/30">
                        <td class="p-3">2. Buffering</td>
                        <td class="p-3">Temporary storage</td>
                        <td class="p-3">RAM</td>
                        <td class="p-3">Affects recording fluidity</td>
                    </tr>
                    <tr class="border-t border-gray-700">
                        <td class="p-3">3. Encoding</td>
                        <td class="p-3">Video compression</td>
                        <td class="p-3">CPU/GPU</td>
                        <td class="p-3">Determines quality and file size</td>
                    </tr>
                    <tr class="border-t border-gray-700 bg-gray-800/30">
                        <td class="p-3">4. Multiplexing</td>
                        <td class="p-3">Joining audio and video</td>
                        <td class="p-3">CPU</td>
                        <td class="p-3">Final file formatting</td>
                    </tr>
                    <tr class="border-t border-gray-700">
                        <td class="p-3">5. Writing</td>
                        <td class="p-3">Disk writing</td>
                        <td class="p-3">SSD/HDD</td>
                        <td class="p-3">Write speed</td>
                    </tr>
                </tbody>
            </table>
        </div>
        
        <div class="bg-amber-900/10 p-5 rounded-xl border border-amber-500/20 mt-6">
            <h4 class="text-amber-400 font-bold mb-2">💡 Pro Tip: Recording Buffer</h4>
            <p class="text-sm text-gray-300">
                A larger recording buffer (up to 2GB) can prevent frame drops in systems with limited I/O, especially when recording to mechanical HDDs or systems with multiple simultaneous operations.
            </p>
        </div>
      `
        },
        {
            title: "13. Advanced Audio and Synchronization Settings",
            content: `
        <h4 class="text-white font-bold mb-3">🔊 Audio Architecture in Professional Recordings</h4>
        <p class="mb-4 text-gray-300">
            Audio capture in OBS Studio involves multiple sources and complex processing:
        </p>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 my-6">
            <div class="bg-green-900/10 p-5 rounded-xl border border-green-500/20">
                <h5 class="text-green-400 font-bold mb-3">Audio Sources</h5>
                <ul class="text-sm text-gray-300 space-y-2">
                    <li>• Audio Input Capture (microphones)</li>
                    <li>• Audio Output Capture (system audio)</li>
                    <li>• Virtual audio devices</li>
                    <li>• Application-specific audio</li>
                    <li>• Multi-channel mixing</li>
                </ul>
            </div>
            <div class="bg-cyan-900/10 p-5 rounded-xl border border-cyan-500/20">
                <h5 class="text-cyan-400 font-bold mb-3">Audio Processing</h5>
                <ul class="text-sm text-gray-300 space-y-2">
                    <li>• Noise filters and equalization</li>
                    <li>• Compression and limiting</li>
                    <li>• Multi-source synchronization</li>
                    <li>• Real-time monitoring</li>
                    <li>• Multi-track mixing</li>
                </ul>
            </div>
        </div>
        
        <h4 class="text-white font-bold mb-3 mt-6">🔧 Professional Audio Settings</h4>
        <p class="mb-4 text-gray-300">
            Advanced parameters for different types of recording:
        </p>
        <div class="overflow-x-auto">
            <table class="w-full text-sm text-gray-300 border border-gray-700 rounded-lg">
                <thead class="bg-gray-800">
                    <tr>
                        <th class="p-3 text-left">Recording Type</th>
                        <th class="p-3 text-left">Sample Rate</th>
                        <th class="p-3 text-left">Channels</th>
                        <th class="p-3 text-left">Recommended Filters</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="border-t border-gray-700">
                        <td class="p-3">Gaming Streams</td>
                        <td class="p-3">48kHz</td>
                        <td class="p-3">Stereo</td>
                        <td class="p-3">Noise Suppression, Compressor</td>
                    </tr>
                    <tr class="border-t border-gray-700 bg-gray-800/30">
                        <td class="p-3">Podcasts/Audio</td>
                        <td class="p-3">48kHz</td>
                        <td class="p-3">Stereo</td>
                        <td class="p-3">Equalizer, Compressor, Limiter</td>
                    </tr>
                    <tr class="border-t border-gray-700">
                        <td class="p-3">Tutorials</td>
                        <td class="p-3">48kHz</td>
                        <td class="p-3">Stereo</td>
                        <td class="p-3">Noise Gate, Equalizer</td>
                    </tr>
                    <tr class="border-t border-gray-700 bg-gray-800/30">
                        <td class="p-3">Music</td>
                        <td class="p-3">48kHz</td>
                        <td class="p-3">Stereo</td>
                        <td class="p-3">Equalizer, Noise Reduction</td>
                    </tr>
                </tbody>
            </table>
        </div>
      `
        },
        {
            title: "14. Trends and Innovations in Screen Recording in 2026",
            content: `
        <h4 class="text-white font-bold mb-3">🚀 Innovations in Video and Audio Recording</h4>
        <p class="mb-4 text-gray-300">
            Screen capture technologies are rapidly evolving with new approaches to efficiency and quality:
        </p>
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 my-6">
            <div class="bg-indigo-900/10 p-5 rounded-xl border border-indigo-500/20">
                <h5 class="text-indigo-400 font-bold mb-3">Neural Capture</h5>
                <ul class="text-sm text-gray-300 space-y-2">
                    <li>• Intelligent identification of areas of interest</li>
                    <li>• Attention-based adaptive compression</li>
                    <li>• Advanced AI noise filters</li>
                    <li>• Post-recording quality recovery</li>
                    <li>• Real-time resource optimization</li>
                </ul>
            </div>
            <div class="bg-orange-900/10 p-5 rounded-xl border border-orange-500/20">
                <h5 class="text-orange-400 font-bold mb-3">Hybrid Encoding</h5>
                <ul class="text-sm text-gray-300 space-y-2">
                    <li>• Combination of hardware and software</li>
                    <li>• Automatic load balancing</li>
                    <li>• Predictive encoding</li>
                    <li>• Content-based optimization</li>
                    <li>• Encoding latency reduction</li>
                </ul>
            </div>
            <div class="bg-pink-900/10 p-5 rounded-xl border border-pink-500/20">
                <h5 class="text-pink-400 font-bold mb-3">Adaptive Recording</h5>
                <ul class="text-sm text-gray-300 space-y-2">
                    <li>• Automatic quality adjustment</li>
                    <li>• System resource monitoring</li>
                    <li>• Intelligent pause and resume</li>
                    <li>• Dynamic load distribution</li>
                    <li>• Automatic failure recovery</li>
                </ul>
            </div>
        </div>
        
        <h4 class="text-white font-bold mb-3 mt-6">📊 Technology Forecasts for 2026-2027</h4>
        <p class="mb-4 text-gray-300">
            Observed trends in the development of recording technologies:
        </p>
        <div class="overflow-x-auto">
            <table class="w-full text-sm text-gray-300 border border-gray-700 rounded-lg">
                <thead class="bg-gray-800">
                    <tr>
                        <th class="p-3 text-left">Technology</th>
                        <th class="p-3 text-left">Expected Adoption</th>
                        <th class="p-3 text-left">Impact</th>
                        <th class="p-3 text-left">Availability</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="border-t border-gray-700">
                        <td class="p-3">AV1 in Recordings</td>
                        <td class="p-3">20% of recordings</td>
                        <td class="p-3">40% reduction in bitrate</td>
                        <td class="p-3">Available in modern GPUs</td>
                    </tr>
                    <tr class="border-t border-gray-700 bg-gray-800/30">
                        <td class="p-3">Neural Encoding</td>
                        <td class="p-3">10% of recordings</td>
                        <td class="p-3">Perceptual quality improvement</td>
                        <td class="p-3">Emerging in 2026</td>
                    </tr>
                    <tr class="border-t border-gray-700">
                        <td class="p-3">Hardware Capture</td>
                        <td class="p-3">50% of recordings</td>
                        <td class="p-3">Overhead reduction</td>
                        <td class="p-3">Widely available</td>
                    </tr>
                    <tr class="border-t border-gray-700 bg-gray-800/30">
                        <td class="p-3">8K Recordings</td>
                        <td class="p-3">5% of recordings</td>
                        <td class="p-3">Ultra High Definition</td>
                        <td class="p-3">Specialized niche</td>
                    </tr>
                </tbody>
            </table>
        </div>
        
        <h4 class="text-white font-bold mb-3 mt-6">🔬 Research and Development</h4>
        <p class="mb-4 text-gray-300">
            Companies are investing heavily in advanced recording technologies:
        </p>
        <ul class="list-disc list-inside text-gray-300 space-y-3 ml-4">
            <li><strong>Artificial Intelligence:</strong> Predictive analysis for resource optimization during recording</li>
            <li><strong>Hybrid Encoding:</strong> Combination of hardware and software for maximum efficiency</li>
            <li><strong>Load Balancing:</strong> Intelligent distribution of audio/video processing</li>
            <li><strong>Adaptive Recording:</strong> Automatic adjustment based on available resources</li>
            <li><strong>Advanced Security:</strong> Content protection during recording and storage</li>
        </ul>
      `
        }
    ];

    const additionalContentSections = [
        {
            title: "4. Hardware and Performance Optimizations",
            content: `
        <h4 class="text-white font-bold mb-3">⚡ Hardware-Based Optimizations</h4>
        <p class="mb-4 text-gray-300">
            OBS Studio recording performance varies significantly across different hardware configurations:
        </p>
        <div class="space-y-6">
            <div class="border-l-4 border-green-500 pl-4 py-2 bg-green-900/10">
                <h5 class="text-green-400 font-bold mb-2">Intel Processors</h5>
                <p class="text-gray-300 text-sm">
                    Ideal configurations for Intel CPUs:
                </p>
                <ul class="text-sm text-gray-300 space-y-1 mt-2">
                    <li>• Use Quick Sync Video for hardware encoding</li>
                    <li>• Adjust thread priority for recording</li>
                    <li>• Configure Power Plans for maximum performance</li>
                    <li>• Allocate dedicated cores for encoding</li>
                    <li>• Optimize cache and memory for encoding</li>
                </ul>
            </div>
            <div class="border-l-4 border-blue-500 pl-4 py-2 bg-blue-900/10">
                <h5 class="text-blue-400 font-bold mb-2">NVIDIA Graphics Cards</h5>
                <p class="text-gray-300 text-sm">
                    Maximum utilization of NVIDIA GPUs:
                </p>
                <ul class="text-sm text-gray-300 space-y-1 mt-2">
                    <li>• Use NVENC for efficient encoding</li>
                    <li>• Adjust encoding settings in OBS</li>
                    <li>• Configure GPU priority for recording</li>
                    <li>• Optimize VRAM for encoding buffers</li>
                    <li>• Utilize technologies like Max-Q for laptops</li>
                </ul>
            </div>
            <div class="border-l-4 border-purple-500 pl-4 py-2 bg-purple-900/10">
                <h5 class="text-purple-400 font-bold mb-2">AMD and Ryzen Processors</h5>
                <p class="text-gray-300 text-sm">
                    Specific configurations for AMD hardware:
                </p>
                <ul class="text-sm text-gray-300 space-y-1 mt-2">
                    <li>• Use AMD AMF for hardware encoding</li>
                    <li>• Configure core priority for recording</li>
                    <li>• Adjust memory and cache settings</li>
                    <li>• Optimize for Chiplet architecture</li>
                    <li>• Energy balancing for performance</li>
                </ul>
            </div>
        </div>
        
        <h4 class="text-white font-bold mb-3 mt-6">📊 Performance Comparison by Hardware</h4>
        <p class="mb-4 text-gray-300">
            Expected performance across different hardware configurations:
        </p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="bg-gray-800 p-4 rounded-lg">
                <h5 class="text-cyan-400 font-bold mb-2">Low-Cost Configurations</h5>
                <ul class="text-sm text-gray-300 space-y-2">
                    <li>• i3/Ryzen 3 + GT 1030/GTX 1650</li>
                    <li>• Better to use CPU encoding with ultrafast preset</li>
                    <li>• 720p recording at 30fps</li>
                    <li>• Minimal visual effects</li>
                    <li>• SSD recommended for recording</li>
                </ul>
            </div>
            <div class="bg-gray-800 p-4 rounded-lg">
                <h5 class="text-purple-400 font-bold mb-2">High-Performance Configurations</h5>
                <ul class="text-sm text-gray-300 space-y-2">
                    <li>• i9/Ryzen 9 + RTX 4080/RTX 4090</li>
                    <li>• Both CPU and GPU encoding work well</li>
                    <li>• 4K recording at 60fps</li>
                    <li>• Multiple sources and effects</li>
                    <li>• Optimized hardware encoding</li>
                </ul>
            </div>
        </div>
      `
        },
        {
            title: "5. Advanced Encoding Settings",
            content: `
        <h4 class="text-white font-bold mb-3">🔧 Technical Encoding Settings</h4>
        <p class="mb-4 text-gray-300">
            Advanced parameters for different types of recording:
        </p>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 my-6">
            <div class="bg-indigo-900/10 p-5 rounded-xl border border-indigo-500/20">
                <h5 class="text-indigo-400 font-bold mb-3">Hardware Encoding</h5>
                <ul class="text-sm text-gray-300 space-y-2">
                    <li>• NVENC (NVIDIA): Best performance</li>
                    <li>• AMD AMF: Efficient for AMD cards</li>
                    <li>• Intel Quick Sync: Good for integrated CPUs</li>
                    <li>• Lower CPU usage</li>
                    <li>• Slightly lower quality than x264</li>
                </ul>
            </div>
            <div class="bg-cyan-900/10 p-5 rounded-xl border border-cyan-500/20">
                <h5 class="text-cyan-400 font-bold mb-3">Software Encoding (x264)</h5>
                <ul class="text-sm text-gray-300 space-y-2">
                    <li>• Greater control over settings</li>
                    <li>• Superior quality with slow presets</li>
                    <li>• High CPU consumption</li>
                    <li>• Ideal for systems with powerful CPUs</li>
                    <li>• More adjustment flexibility</li>
                </ul>
            </div>
        </div>
        
        <h4 class="text-white font-bold mb-3 mt-6">⚙️ Technical Encoding Parameters</h4>
        <p class="mb-4 text-gray-300">
            Understanding the main parameters that affect quality and efficiency:
        </p>
        <div class="overflow-x-auto">
            <table class="w-full text-sm text-gray-300 border border-gray-700 rounded-lg">
                <thead class="bg-gray-800">
                    <tr>
                        <th class="p-3 text-left">Parameter</th>
                        <th class="p-3 text-left">Description</th>
                        <th class="p-3 text-left">Common Values</th>
                        <th class="p-3 text-left">Impact</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="border-t border-gray-700">
                        <td class="p-3">Rate Control</td>
                        <td class="p-3">How bitrate is applied</td>
                        <td class="p-3">CBR, VBR, CQP</td>
                        <td class="p-3">Quality and file size</td>
                    </tr>
                    <tr class="border-t border-gray-700 bg-gray-800/30">
                        <td class="p-3">Profile</td>
                        <td class="p-3">Codec feature set</td>
                        <td class="p-3">Baseline, Main, High</td>
                        <td class="p-3">Compatibility and efficiency</td>
                    </tr>
                    <tr class="border-t border-gray-700">
                        <td class="p-3">Preset</td>
                        <td class="p-3">Speed vs quality</td>
                        <td class="p-3">Ultrafast, Veryfast, Fast</td>
                        <td class="p-3">Performance and quality</td>
                    </tr>
                    <tr class="border-t border-gray-700 bg-gray-800/30">
                        <td class="p-3">Keyframe Interval</td>
                        <td class="p-3">Freq. of full frames</td>
                        <td class="p-3">2 seconds (60 for 30fps)</td>
                        <td class="p-3">Seeking and compression</td>
                    </tr>
                    <tr class="border-t border-gray-700">
                        <td class="p-3">CRF</td>
                        <td class="p-3">Constant quality</td>
                        <td class="p-3">18-28 (x264), 20-35 (NVENC)</td>
                        <td class="p-3">Visual quality</td>
                    </tr>
                </tbody>
            </table>
        </div>
      `
        },
        {
            title: "6. Storage and Performance Management",
            content: `
        <h4 class="text-white font-bold mb-3">💾 Storage and I/O Strategies</h4>
        <p class="mb-4 text-gray-300">
            Storage management is critical for long, high-quality recordings:
        </p>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 my-6">
            <div class="bg-blue-900/10 p-5 rounded-xl border border-blue-500/20">
                <h5 class="text-blue-400 font-bold mb-3">Storage Types</h5>
                <ul class="text-sm text-gray-300 space-y-2">
                    <li>• NVMe SSD: Best performance for recording</li>
                    <li>• SATA SSD: Good balance of cost/performance</li>
                    <li>• 7200 RPM HDD: Suitable for long recordings</li>
                    <li>• USB 3.0+ External Drives: Possible with limitations</li>
                    <li>• RAID 0: For high write speeds</li>
                </ul>
            </div>
            <div class="bg-purple-900/10 p-5 rounded-xl border border-purple-500/20">
                <h5 class="text-purple-400 font-bold mb-3">Space Planning</h5>
                <ul class="text-sm text-gray-300 space-y-2">
                    <li>• 1GB/hour for 720p30 with H.264</li>
                    <li>• 3GB/hour for 1080p60 with H.264</li>
                    <li>• 8GB/hour for 1080p60 with H.264 in high quality</li>
                    <li>• 15GB/hour for 4K30 with H.264</li>
                    <li>• Calculate extra buffer for safety</li>
                </ul>
            </div>
        </div>
        
        <h4 class="text-white font-bold mb-3 mt-6">🔧 I/O and Write Speed Optimizations</h4>
        <p class="mb-4 text-gray-300">
            Settings to maximize write speed and prevent frame drops:
        </p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="bg-gray-800 p-4 rounded-lg">
                <h5 class="text-cyan-400 font-bold mb-2">System Settings</h5>
                <ul class="text-sm text-gray-300 space-y-2">
                    <li>• Disable hibernation during recording</li>
                    <li>• Configure power for high performance</li>
                    <li>• Disable disk power savings</li>
                    <li>• Disable real-time antivirus in recording directory</li>
                    <li>• Close unnecessary applications</li>
                </ul>
            </div>
            <div class="bg-gray-800 p-4 rounded-lg">
                <h5 class="text-purple-400 font-bold mb-2">OBS Settings</h5>
                <ul class="text-sm text-gray-300 space-y-2">
                    <li>• Adjust recording buffer size</li>
                    <li>• Use efficient audio/video multiplexing</li>
                    <li>• Configure recording directory on fast drive</li>
                    <li>• Use optimized container format</li>
                    <li>• Configure file splitting for long recordings</li>
                </ul>
            </div>
        </div>
      `
        },
        {
            title: "7. Monitoring and Diagnostics",
            content: `
        <h4 class="text-white font-bold mb-3">📊 Real-Time Performance Monitoring</h4>
        <p class="mb-4 text-gray-300">
            Essential tools and metrics to monitor recording quality:
        </p>
        <div class="space-y-6">
            <div class="border-l-4 border-green-500 pl-4 py-2 bg-green-900/10">
                <h5 class="text-green-400 font-bold mb-2">Performance Metrics</h5>
                <p class="text-gray-300 text-sm">
                    Critical parameters to monitor during recordings:
                </p>
                <ul class="text-sm text-gray-300 space-y-1 mt-2">
                    <li>• Output FPS (must remain stable)</li>
                    <li>• CPU usage (ideal below 80%)</li>
                    <li>• GPU usage (monitor temperature)</li>
                    <li>• RAM usage (avoid swapping)</li>
                    <li>• Disk write speed</li>
                </ul>
            </div>
            <div class="border-l-4 border-blue-500 pl-4 py-2 bg-blue-900/10">
                <h5 class="text-blue-400 font-bold mb-2">Diagnostic Tools</h5>
                <p class="text-gray-300 text-sm">
                    Resources to identify and weight problems:
                </p>
                <ul class="text-sm text-gray-300 space-y-1 mt-2">
                    <li>• OBS stats panel</li>
                    <li>• Windows Task Manager</li>
                    <li>• MSI Afterburner for GPU monitoring</li>
                    <li>• Resource Monitor for I/O</li>
                    <li>• Third-party tools like HWiNFO</li>
                </ul>
            </div>
        </div>
        
        <h4 class="text-white font-bold mb-3 mt-6">🔧 Diagnostic Common Problems</h4>
        <p class="mb-4 text-gray-300">
            Solutions for frequent problems during recordings:
        </p>
        <div class="overflow-x-auto">
            <table class="w-full text-sm text-gray-300 border border-gray-700 rounded-lg">
                <thead class="bg-gray-800">
                    <tr>
                        <th class="p-3 text-left">Problem</th>
                        <th class="p-3 text-left">Probable Cause</th>
                        <th class="p-3 text-left">Solution</th>
                        <th class="p-3 text-left">Priority</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="border-t border-gray-700">
                        <td class="p-3">Frame drops</td>
                        <td class="p-3">Encoding overhead</td>
                        <td class="p-3">Change to hardware encoding</td>
                        <td class="p-3 text-red-400">High</td>
                    </tr>
                    <tr class="border-t border-gray-700 bg-gray-800/30">
                        <td class="p-3">Corrupted file</td>
                        <td class="p-3">I/O failure or interruption</td>
                        <td class="p-3">Use MKV format, better storage</td>
                        <td class="p-3 text-red-400">High</td>
                    </tr>
                    <tr class="border-t border-gray-700">
                        <td class="p-3">System lag</td>
                        <td class="p-3">Excessive resource usage</td>
                        <td class="p-3">Reduce quality or use hardware encoding</td>
                        <td class="p-3 text-yellow-400">Medium</td>
                    </tr>
                    <tr class="border-t border-gray-700 bg-gray-800/30">
                        <td class="p-3">Audio out of sync</td>
                        <td class="p-3">Audio latency or processing</td>
                        <td class="p-3">Adjust audio offset, use fewer filters</td>
                        <td class="p-3 text-yellow-400">Medium</td>
                    </tr>
                    <tr class="border-t border-gray-700">
                        <td class="p-3">Large file size</td>
                        <td class="p-3">High bitrate settings</td>
                        <td class="p-3">Adjust bitrate or use VBR</td>
                        <td class="p-3 text-green-400">Low</td>
                    </tr>
                </tbody>
            </table>
        </div>
      `
        },
        {
            title: "8. Plugins and Advanced Extensions",
            content: `
        <h4 class="text-white font-bold mb-3">🔌 Professional Plugin Ecosystem</h4>
        <p class="mb-4 text-gray-300">
            Advanced plugins that add professional features to OBS Studio:
        </p>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 my-6">
            <div class="bg-blue-900/10 p-5 rounded-xl border border-blue-500/20">
                <h5 class="text-blue-400 font-bold mb-3">Production Plugins</h5>
                <ul class="text-sm text-gray-300 space-y-2">
                    <li>• Advanced Scene Switcher: Scene automation</li>
                    <li>• StreamFX: Advanced effects and transitions</li>
                    <li>• OBS WebSocket: Remote control via scripts</li>
                    <li>• VirtualCam: Virtual camera output</li>
                    <li>• Replay Source: Capture key moments</li>
                </ul>
            </div>
            <div class="bg-purple-900/10 p-5 rounded-xl border border-purple-500/20">
                <h5 class="text-purple-400 font-bold mb-3">Integration Plugins</h5>
                <ul class="text-sm text-gray-300 space-y-2">
                    <li>• Streamlabs OBS Integration: Service integration</li>
                    <li>• OBS Browser Source: Interactive web elements</li>
                    <li>• Text Pango FT2: Advanced text rendering</li>
                    <li>• ImageMagick: Real-time image manipulation</li>
                    <li>• NDI Plugin: Network source sharing</li>
                </ul>
            </div>
        </div>
        
        <h4 class="text-white font-bold mb-3 mt-6">🔧 Plugin Configuration and Optimization</h4>
        <p class="mb-4 text-gray-300">
            Considerations to maximize plugin performance:
        </p>
        <div class="overflow-x-auto">
            <table class="w-full text-sm text-gray-300 border border-gray-700 rounded-lg">
                <thead class="bg-gray-800">
                    <tr>
                        <th class="p-3 text-left">Plugin</th>
                        <th class="p-3 text-left">Required Resource</th>
                        <th class="p-3 text-left">Performance Impact</th>
                        <th class="p-3 text-left">Best Practices</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="border-t border-gray-700">
                        <td class="p-3">StreamFX</td>
                        <td class="p-3">Dedicated GPU</td>
                        <td class="p-3">Medium-High</td>
                        <td class="p-3">Use in specific scenes</td>
                    </tr>
                    <tr class="border-t border-gray-700 bg-gray-800/30">
                        <td class="p-3">Advanced Scene Switcher</td>
                        <td class="p-3">CPU and RAM</td>
                        <td class="p-3">Low-Medium</td>
                        <td class="p-3">Configure efficient triggers</td>
                    </tr>
                    <tr class="border-t border-gray-700">
                        <td class="p-3">Browser Source</td>
                        <td class="p-3">CPU and RAM</td>
                        <td class="p-3">Medium-High</td>
                        <td class="p-3">Limit number and size</td>
                    </tr>
                    <tr class="border-t border-gray-700 bg-gray-800/30">
                        <td class="p-3">VirtualCam</td>
                        <td class="p-3">CPU and GPU</td>
                        <td class="p-3">Medium</td>
                        <td class="p-3">Activate only when necessary</td>
                    </tr>
                </tbody>
            </table>
        </div>
      `
        },
        {
            title: "9. Scripts and Automation",
            content: `
        <h4 class="text-white font-bold mb-3">🤖 Automation with Scripts</h4>
        <p class="mb-4 text-gray-300">
            Using scripts to automate repetitive tasks in OBS Studio:
        </p>
        <div class="space-y-6">
            <div class="border-l-4 border-green-500 pl-4 py-2 bg-green-900/10">
                <h5 class="text-green-400 font-bold mb-2">Types of Scripts</h5>
                <p class="text-gray-300 text-sm">
                    Different categories of scripts for automating tasks:
                </p>
                <ul class="text-sm text-gray-300 space-y-1 mt-2">
                    <li>• Automatic transition scripts between scenes</li>
                    <li>• Recording quality control scripts</li>
                    <li>• Configuration backup and restoration scripts</li>
                    <li>• Integration scripts with external APIs</li>
                    <li>• Event-based trigger scripts</li>
                </ul>
            </div>
            <div class="border-l-4 border-blue-500 pl-4 py-2 bg-blue-900/10">
                <h5 class="text-blue-400 font-bold mb-2">Supported Languages</h5>
                <p class="text-gray-300 text-sm">
                    Languages available for script development:
                </p>
                <ul class="text-sm text-gray-300 space-y-1 mt-2">
                    <li>• Python (most common)</li>
                    <li>• JavaScript</li>
                    <li>• Lua</li>
                    <li>• PHP (less common)</li>
                    <li>• OBS-specific libraries</li>
                </ul>
            </div>
        </div>
        
        <h4 class="text-white font-bold mb-3 mt-6">💻 Advanced Script Example</h4>
        <p class="mb-4 text-gray-300">
            Python script for automatic quality monitoring and adjustment:
        </p>
        <div class="bg-gray-900 p-4 rounded-lg overflow-x-auto">
            <pre class="text-green-400 text-sm">import obspython as obs
import psutil
import time

def check_system_resources():
    # Obtain performance information
    cpu_percent = psutil.cpu_percent(interval=1)
    memory = psutil.virtual_memory()
    
    # Check if there are enough resources for recording
    if cpu_percent > 85 or memory.percent > 85:
        # Reduce recording quality
        settings = obs.obs_data_create()
        obs.obs_data_set_string(settings, "encoder", "nvenc")
        obs.obs_data_set_int(settings, "bitrate", 3500)  # Reduce bitrate
        obs.obs_data_set_string(settings, "rate_control", "CBR")
        
        # Apply encoding settings
        output = obs.obs_frontend_get_recording_output()
        obs.obs_output_update(output, settings)
        
        obs.script_log(obs.LOG_WARNING, f"Critical resources detected: CPU {cpu_percent}%, RAM {memory.percent}% - Reducing recording quality")
        
        # Release objects
        obs.obs_data_release(settings)
        obs.obs_output_release(output)

# Timer to check every 5 seconds
timer_active = False

def timer_callback():
    check_system_resources()

def start_timer():
    global timer_active
    if not timer_active:
        obs.timer_add(timer_callback, 5000)  # Every 5 seconds
        timer_active = True

def stop_timer():
    global timer_active
    if timer_active:
        obs.timer_remove(timer_callback)
        timer_active = False

# Auto-start timer on script load
start_timer()</pre>
        </div>
        
        <div class="bg-amber-900/10 p-5 rounded-xl border border-amber-500/20 mt-6">
            <h4 class="text-amber-400 font-bold mb-2">💡 Pro Tip: Monitoring Scripts</h4>
            <p class="text-sm text-gray-300">
                Monitoring scripts can be configured to automatically adjust OBS settings based on system performance, ensuring stable recordings even in varying hardware conditions.
            </p>
        </div>
      `
        },
        {
            title: "10. Security and Recovery",
            content: `
        <h4 class="text-white font-bold mb-3">🔒 Security in Recordings and Data Recovery</h4>
        <p class="mb-4 text-gray-300">
            Important considerations to protect and recover your recordings:
        </p>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 my-6">
            <div class="bg-indigo-900/10 p-5 rounded-xl border border-indigo-500/20">
                <h5 class="text-indigo-400 font-bold mb-3">Security Practices</h5>
                <ul class="text-sm text-gray-300 space-y-2">
                    <li>• File integrity verification</li>
                    <li>• Automated backups</li>
                    <li>• Sensitive file encryption</li>
                    <li>• Access control to recording directories</li>
                    <li>• Power failure protection</li>
                </ul>
            </div>
            <div class="bg-cyan-900/10 p-5 rounded-xl border border-cyan-500/20">
                <h5 class="text-cyan-400 font-bold mb-3">Data Recovery</h5>
                <ul class="text-sm text-gray-300 space-y-2">
                    <li>• Recovery of partially recorded files</li>
                    <li>• Conversion of corrupted formats</li>
                    <li>• Multi-media backup</li>
                    <li>• Post-recording integrity verification</li>
                    <li>• Redundant copies during recording</li>
                </ul>
            </div>
        </div>
        
        <h4 class="text-white font-bold mb-3 mt-6">🔧 Recovery Strategies</h4>
        <p class="mb-4 text-gray-300">
            Procedures for recovering recordings in different scenarios:
        </p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="bg-gray-800 p-4 rounded-lg">
                <h5 class="text-cyan-400 font-bold mb-2">Common Failures</h5>
                <ul class="text-sm text-gray-300 space-y-2">
                    <li>• Power interruption: Use UPS for protection</li>
                    <li>• Disk failure: Check disk space and health</li>
                    <li>• Software errors: Keep OBS updated</li>
                    <li>• Overheating: Monitor temperatures</li>
                    <li>• Driver problems: Keep drivers updated</li>
                </ul>
            </div>
            <div class="bg-gray-800 p-4 rounded-lg">
                <h5 class="text-purple-400 font-bold mb-2">File Recovery</h5>
                <ul class="text-sm text-gray-300 space-y-2">
                    <li>• Integrity verification with tools like FFmpeg</li>
                    <li>• Conversion of truncated MKV files</li>
                    <li>• Recovery with data recovery software</li>
                    <li>• Automatic backups</li>
                    <li>• File versioning systems</li>
                </ul>
            </div>
        </div>
      `
        }
    ];

    const relatedGuides = [
        {
            href: "/guias/obs-studio-melhores-configuracoes-stream-2026",
            title: "Stream Settings",
            description: "Learn how to stream live on Twitch/YouTube."
        },
        {
            href: "/guias/grava%C3%A7%C3%A3o-tela-windows-nativa-dicas",
            title: "Native Recorder",
            description: "A quick alternative built into Windows."
        },
        {
            href: "/guias/atualizacao-drivers-video",
            title: "Video Drivers",
            description: "Essential for NVENC/AMF to work properly."
        }
    ];

    const allContentSections = [...contentSections, ...additionalContentSections, ...advancedContentSections];

    return (
        <GuideTemplate
            title={title}
            description={description}
            keywords={keywords}
            estimatedTime="20 min"
            difficultyLevel="Intermediate"
            contentSections={allContentSections}
            advancedContentSections={advancedContentSections}
            additionalContentSections={additionalContentSections}
            summaryTable={summaryTable}
            relatedGuides={relatedGuides}
        />
    );
}

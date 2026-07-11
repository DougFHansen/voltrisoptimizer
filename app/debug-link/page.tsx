'use client';

import { useState } from 'react';
import { createClient } from '@/utils/supabase/client';
import { Loader2 } from 'lucide-react';

const INSTALLATION_ID = 'DC045D24-F4A2-4B77-8046-0A7CD04A2B0C';

export default function DebugPage() {
    const [results, setResults] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);
    const supabase = createClient();

    const addResult = (title: string, content: string, type: 'success' | 'error' | 'warning' | 'info' = 'info') => {
        setResults(prev => [...prev, { title, content, type }]);
    };

    const runAllTests = async () => {
        setResults([]);
        setLoading(true);

        try {
            // Test 1: Debug Endpoint
            addResult('1️⃣ Test: Debug Endpoint', 'Executing...', 'info');
            try {
                const response = await fetch(`/api/v1/install/debug?installation_id=${INSTALLATION_ID}`);
                const data = await response.json();

                if (data.installation) {
                    addResult('1️⃣ Test: Debug Endpoint',
                        `✅ Installation found in database!\n\nID: ${data.installation.id}\nUser ID: ${data.installation.user_id || '❌ NULL'}\nApp Version: ${data.installation.app_version || 'N/A'}\nCPU: ${data.installation.cpu_name || 'N/A'}\nOS: ${data.installation.os_name || 'N/A'}\nLast Heartbeat: ${data.installation.last_heartbeat || 'N/A'}\nUpdated At: ${data.installation.updated_at || 'N/A'}`,
                        'success');
                } else {
                    addResult('1️⃣ Test: Debug Endpoint',
                        `❌ Installation NOT found in database!\n\nError: ${data.error || 'Record does not exist'}`,
                        'error');
                }
            } catch (err: any) {
                addResult('1️⃣ Test: Debug Endpoint',
                    `❌ Error calling endpoint: ${err.message}`,
                    'error');
            }

            // Test 2: Check Session
            addResult('2️⃣ Test: User Session', 'Executing...', 'info');
            const { data: { session }, error: sessionError } = await supabase.auth.getSession();

            if (session) {
                addResult('2️⃣ Test: User Session',
                    `✅ User authenticated!\n\nUser ID: ${session.user.id}\nEmail: ${session.user.email}\nProvider: ${session.user.app_metadata?.provider || 'N/A'}`,
                    'success');
            } else {
                addResult('2️⃣ Test: User Session',
                    `❌ User NOT authenticated!\n\nError: ${sessionError?.message || 'No active session'}`,
                    'error');
                setLoading(false);
                return;
            }

            // Test 3: Query with user_id filter
            addResult('3️⃣ Test: Query Filtered by User ID', 'Executing...', 'info');
            const { data: installations, error: queryError } = await supabase
                .from('installations')
                .select('*')
                .eq('user_id', session.user.id);

            if (queryError) {
                addResult('3️⃣ Test: Query Filtered by User ID',
                    `❌ Query error:\n\n${queryError.message}\nCode: ${queryError.code}\nDetails: ${queryError.details}\nHint: ${queryError.hint}`,
                    'error');
            } else if (installations && installations.length > 0) {
                addResult('3️⃣ Test: Query Filtered by User ID',
                    `✅ Installations found: ${installations.length}\n\n${JSON.stringify(installations, null, 2)}`,
                    'success');
            } else {
                addResult('3️⃣ Test: Query Filtered by User ID',
                    `⚠️ No installation found for this user_id\n\nUser ID searched: ${session.user.id}\nResult: Empty array\n\nThis means:\n- The record exists in the database (test 1)\n- But the user_id is not linked correctly\n- OR RLS policies are blocking`,
                    'warning');
            }

            // Test 4: Query without filter
            addResult('4️⃣ Test: Query Without Filter', 'Executing...', 'info');
            const { data: allInstalls, error: allError } = await supabase
                .from('installations')
                .select('*');

            if (allError) {
                addResult('4️⃣ Test: Query Without Filter',
                    `❌ Query error: ${allError.message}`,
                    'error');
            } else {
                addResult('4️⃣ Test: Query Without Filter',
                    `📊 Total visible installations: ${allInstalls?.length || 0}\n\n${allInstalls && allInstalls.length > 0 ? JSON.stringify(allInstalls, null, 2) : 'No installation visible (RLS is blocking everything)'}`,
                    allInstalls && allInstalls.length > 0 ? 'success' : 'warning');
            }

        } catch (err: any) {
            addResult('❌ General Error', err.message, 'error');
        } finally {
            setLoading(false);
        }
    };

    const getTypeColor = (type: string) => {
        switch (type) {
            case 'success': return 'border-green-500 bg-green-500/5';
            case 'error': return 'border-red-500 bg-red-500/5';
            case 'warning': return 'border-yellow-500 bg-yellow-500/5';
            default: return 'border-blue-500 bg-blue-500/5';
        }
    };

    return (
        <div className="min-h-screen bg-[#0a0a0f] text-white p-8">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-4xl font-black mb-2 bg-gradient-to-r from-[#31A8FF] to-[#8B31FF] bg-clip-text text-transparent">
                    🔍 Linkage Debug
                </h1>
                <p className="text-slate-400 mb-8">Voltris Optimizer - Installation Diagnostics</p>

                <div className="bg-[#1a1a22] border border-white/5 rounded-3xl p-8 mb-8">
                    <h2 className="text-2xl font-bold mb-4 text-[#8B31FF]">Instructions</h2>
                    <ol className="list-decimal list-inside space-y-2 text-slate-300">
                        <li>Make sure you are <strong className="text-white">logged in</strong> at voltrisoptimizer.com</li>
                        <li>Click the button below to run all tests</li>
                        <li>Wait for the results to appear</li>
                        <li>Copy the results and send for analysis</li>
                    </ol>

                    <button
                        onClick={runAllTests}
                        disabled={loading}
                        className="mt-6 px-8 py-4 bg-gradient-to-r from-[#8B31FF] to-[#31A8FF] rounded-2xl font-bold text-white hover:opacity-90 transition-all disabled:opacity-50 flex items-center gap-2"
                    >
                        {loading ? (
                            <>
                                <Loader2 className="w-5 h-5 animate-spin" />
                                Running Tests...
                            </>
                        ) : (
                            '▶️ Run All Tests'
                        )}
                    </button>
                </div>

                <div className="space-y-6">
                    {results.map((result, index) => (
                        <div key={index} className="bg-[#1a1a22] border border-white/5 rounded-3xl p-6">
                            <h3 className="text-xl font-bold mb-4 text-[#31A8FF]">{result.title}</h3>
                            <div className={`border-l-4 ${getTypeColor(result.type)} p-4 rounded-r-lg`}>
                                <pre className="whitespace-pre-wrap font-mono text-sm text-slate-300">
                                    {result.content}
                                </pre>
                            </div>
                        </div>
                    ))}
                </div>

                {results.length > 0 && !loading && (
                    <div className="mt-8 bg-[#1a1a22] border border-white/5 rounded-3xl p-8">
                        <h2 className="text-2xl font-bold mb-4 text-[#8B31FF]">5️⃣ Final Analysis</h2>
                        <div className="space-y-4 text-slate-300">
                            <p className="font-bold text-white">Test Summary:</p>
                            <ul className="list-disc list-inside space-y-2">
                                <li>Installation exists in database? {results.some(r => r.title.includes('Debug') && r.type === 'success') ? '✅ YES' : '❌ NO'}</li>
                                <li>User is authenticated? {results.some(r => r.title.includes('Session') && r.type === 'success') ? '✅ YES' : '❌ NO'}</li>
                                <li>Query finds installations? {results.some(r => r.title.includes('Filtered') && r.type === 'success') ? '✅ YES' : '❌ NO'}</li>
                            </ul>

                            <p className="font-bold text-white mt-6">Next Steps:</p>
                            <div className="bg-[#121218] border border-white/5 rounded-xl p-4 mt-2">
                                <p className="text-sm">
                                    {results.some(r => r.title.includes('Debug') && r.type === 'success') &&
                                        !results.some(r => r.title.includes('Filtered') && r.type === 'success') ? (
                                        <>
                                            <strong className="text-yellow-400">⚠️ Installation exists but query doesn't find it:</strong><br />
                                            → The user_id was not saved correctly in the linkage<br />
                                            → Check the linkage API logs
                                        </>
                                    ) : results.some(r => r.type === 'error' && r.title.includes('Query')) ? (
                                        <>
                                            <strong className="text-red-400">❌ Query returns error:</strong><br />
                                            → Problem with RLS policies<br />
                                            → Run the SQL migration again
                                        </>
                                    ) : results.some(r => r.title.includes('Filtered') && r.type === 'success') ? (
                                        <>
                                            <strong className="text-green-400">✅ Everything is OK!</strong><br />
                                            → If Dashboard doesn't show it, it's a React component problem<br />
                                            → Check the browser console on the Dashboard page
                                        </>
                                    ) : (
                                        <>
                                            <strong className="text-slate-400">ℹ️ Run tests for diagnosis</strong>
                                        </>
                                    )}
                                </p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

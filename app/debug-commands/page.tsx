'use client';

import { useState, useEffect } from 'react';
import { createClient } from '@/utils/supabase/client';

export default function DebugCommandsPage() {
    const [installations, setInstallations] = useState<any[]>([]);
    const [commands, setCommands] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [testResult, setTestResult] = useState<string>('');
    
    const supabase = createClient();
    const APP_MACHINE_ID = '612f0f8d-8780-42f9-8daf-3bdffe299bc6'; // Do log do app

    useEffect(() => {
        loadData();
        const interval = setInterval(loadData, 5000); // Update every 5 seconds
        return () => clearInterval(interval);
    }, []);

    const loadData = async () => {
        try {
            // Buscar instalações
            const { data: user } = await supabase.auth.getUser();
            if (user.user) {
                const { data: installs } = await supabase
                    .from('installations')
                    .select('*')
                    .eq('user_id', user.user.id);
                setInstallations(installs || []);
            }

            // Buscar comandos recentes
            const { data: cmds } = await supabase
                .from('device_commands')
                .select('*')
                .order('created_at', { ascending: false })
                .limit(10);
            setCommands(cmds || []);
            
            setLoading(false);
        } catch (err) {
            console.error(err);
            setLoading(false);
        }
    };

    const testCommand = async (installationId: string, commandType: string) => {
        setTestResult('Sending...');
        try {
            const response = await fetch('/api/v1/commands/create', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    installation_id: installationId,
                    command_type: commandType
                })
            });
            
            const data = await response.json();
            setTestResult(`✅ Success! Command ID: ${data.command?.id}\nWait up to 30 seconds for the app to execute.`);
            loadData();
        } catch (err: any) {
            setTestResult(`❌ Error: ${err.message}`);
        }
    };

    if (loading) return <div className="p-8 text-white">Loading...</div>;

    return (
        <div className="min-h-screen bg-[#0A0A0F] p-8 text-white">
            <h1 className="text-3xl font-bold mb-8">🔍 Debug - Remote Commands</h1>
            
            {/* Machine ID do App */}
            <div className="bg-[#121218] border border-white/10 rounded-xl p-6 mb-6">
                <h2 className="text-xl font-bold mb-4">📱 App Machine ID (from logs)</h2>
                <code className="bg-black/50 px-4 py-2 rounded text-green-400 block">
                    {APP_MACHINE_ID}
                </code>
            </div>

            {/* Instalações */}
            <div className="bg-[#121218] border border-white/10 rounded-xl p-6 mb-6">
                <h2 className="text-xl font-bold mb-4">💻 Installations in DB</h2>
                {installations.length === 0 ? (
                    <p className="text-slate-400">No installations found</p>
                ) : (
                    <div className="space-y-4">
                        {installations.map(inst => (
                            <div key={inst.id} className="bg-black/30 p-4 rounded-lg">
                                <div className="flex items-center justify-between mb-2">
                                    <div>
                                        <p className="font-bold">{inst.os_name}</p>
                                        <code className={`text-xs ${inst.id === APP_MACHINE_ID ? 'text-green-400' : 'text-slate-400'}`}>
                                            {inst.id}
                                        </code>
                                        {inst.id === APP_MACHINE_ID && (
                                            <span className="ml-2 text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded">
                                                ✓ MATCH!
                                            </span>
                                        )}
                                    </div>
                                    <div className="flex gap-2">
                                        <button
                                            onClick={() => testCommand(inst.id, 'OPTIMIZE_RAM')}
                                            className="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded text-sm font-bold"
                                        >
                                            Test OPTIMIZE
                                        </button>
                                        <button
                                            onClick={() => testCommand(inst.id, 'CLEAN_SYSTEM')}
                                            className="px-4 py-2 bg-purple-500 hover:bg-purple-600 rounded text-sm font-bold"
                                        >
                                            Test CLEAN
                                        </button>
                                        <button
                                            onClick={() => testCommand(inst.id, 'RESTART')}
                                            className="px-3 py-2 bg-orange-500 hover:bg-orange-600 rounded text-xs font-bold"
                                        >
                                            🔄 RESTART
                                        </button>
                                        <button
                                            onClick={() => testCommand(inst.id, 'SHUTDOWN')}
                                            className="px-3 py-2 bg-red-500 hover:bg-red-600 rounded text-xs font-bold"
                                        >
                                            🔴 SHUTDOWN
                                        </button>
                                    </div>
                                </div>
                                <div className="text-xs text-slate-400 mt-2">
                                    <p>CPU: {inst.cpu_name}</p>
                                    <p>RAM: {inst.ram_gb_total}GB</p>
                                    <p>Last Heartbeat: {new Date(inst.last_heartbeat).toLocaleString()}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* Resultado do Teste */}
            {testResult && (
                <div className="bg-[#121218] border border-white/10 rounded-xl p-6 mb-6">
                    <h2 className="text-xl font-bold mb-4">📊 Test Result</h2>
                    <pre className="bg-black/50 p-4 rounded text-sm whitespace-pre-wrap">
                        {testResult}
                    </pre>
                </div>
            )}

            {/* Comandos Recentes */}
            <div className="bg-[#121218] border border-white/10 rounded-xl p-6">
                <h2 className="text-xl font-bold mb-4">📋 Last 10 Commands</h2>
                {commands.length === 0 ? (
                    <p className="text-slate-400">No commands found</p>
                ) : (
                    <div className="space-y-2">
                        {commands.map(cmd => (
                            <div key={cmd.id} className="bg-black/30 p-3 rounded text-sm">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <span className={`font-bold ${
                                            cmd.status === 'completed' ? 'text-green-400' :
                                            cmd.status === 'failed' ? 'text-red-400' :
                                            'text-yellow-400'
                                        }`}>
                                            {cmd.command_type}
                                        </span>
                                        <span className="ml-2 text-slate-400">
                                            {cmd.status}
                                        </span>
                                    </div>
                                    <span className="text-xs text-slate-500">
                                        {new Date(cmd.created_at).toLocaleString()}
                                    </span>
                                </div>
                                <code className="text-xs text-slate-500 block mt-1">
                                    {cmd.installation_id}
                                </code>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* Instruções */}
            <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-6 mt-6">
                <h2 className="text-xl font-bold mb-4 text-yellow-400">⚠️ How to Test</h2>
                <ol className="list-decimal list-inside space-y-2 text-sm">
                    <li>Check if the App Machine ID (green above) matches any installation</li>
                    <li>If it doesn't match, the app is not linked correctly</li>
                    <li>Click on "Test OPTIMIZE" or "Test CLEAN" on the correct installation</li>
                    <li>Wait up to 30 seconds (polling interval)</li>
                    <li>Check the app logs to see the execution</li>
                    <li>Refresh this page to see the command status change to "completed"</li>
                </ol>
            </div>
        </div>
    );
}

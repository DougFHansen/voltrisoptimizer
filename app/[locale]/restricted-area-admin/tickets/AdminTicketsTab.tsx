import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { createClient } from '@/utils/supabase/client';
import { FiSearch, FiFilter, FiEye, FiCheckCircle, FiClock, FiXCircle, FiMessageSquare } from 'react-icons/fi';
import { toast } from 'react-hot-toast';
import type { Ticket, TicketMessage } from '@/types/ticket';
import { useAuth } from '@/app/hooks/useAuth';

interface UserInfo {
  full_name: string;
  login: string;
}

interface TicketWithUser extends Ticket {
  user_info?: UserInfo;
  messages?: TicketMessage[];
}

export default function AdminTicketsTab() {
  const [tickets, setTickets] = useState<TicketWithUser[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTicket, setSelectedTicket] = useState<TicketWithUser | null>(null);
  const [showTicketModal, setShowTicketModal] = useState(false);
  const supabase = createClient();
  const { user } = useAuth();
  const [reply, setReply] = useState('');
  const [sendingReply, setSendingReply] = useState(false);
  const [messages, setMessages] = useState<TicketMessage[]>([]);

  useEffect(() => {
    fetchTickets(); // Busca inicial ao montar
    const supabase = createClient();
    let channel: any;

    async function setupRealtime() {
      channel = supabase.channel('tickets-admin-realtime')
        .on(
          'postgres_changes',
          {
            event: '*',
            schema: 'public',
            table: 'tickets',
          },
          (payload) => {
            setTickets((prevTickets: TicketWithUser[]) => {
              const changedTicket = payload.new as any;
              if (payload.eventType === 'UPDATE') {
                return prevTickets.map(t => t.id === changedTicket.id ? { ...t, ...changedTicket } : t) as TicketWithUser[];
              } else if (payload.eventType === 'INSERT') {
                if (prevTickets.some(t => t.id === changedTicket.id)) return prevTickets;
                return [changedTicket as TicketWithUser, ...prevTickets] as TicketWithUser[];
              } else if (payload.eventType === 'DELETE') {
                return prevTickets.filter(t => t.id !== (payload.old as any).id) as TicketWithUser[];
              }
              return prevTickets as TicketWithUser[];
            });
          }
        )
        .subscribe();
    }
    setupRealtime();

    return () => {
      if (channel) supabase.removeChannel(channel);
    };
  }, []);

  // Fetch messages for the selected ticket
  useEffect(() => {
    const fetchMessages = async () => {
      if (!selectedTicket) return;
      const { data, error } = await supabase
        .from('ticket_messages')
        .select('*')
        .eq('ticket_id', selectedTicket.id)
        .order('created_at', { ascending: true });
      if (!error && data) setMessages(data);
    };
    if (selectedTicket) fetchMessages();
  }, [selectedTicket, showTicketModal]);

  const handleSendReply = async () => {
    if (!reply.trim() || !selectedTicket || !user) return;
    setSendingReply(true);
    const { error } = await supabase
      .from('ticket_messages')
      .insert({
        ticket_id: selectedTicket.id,
        content: reply,
        user_id: user.id
      });
    setSendingReply(false);
    if (!error) {
      setReply('');
      // Refetch messages
      const { data } = await supabase
        .from('ticket_messages')
        .select('*')
        .eq('ticket_id', selectedTicket.id)
        .order('created_at', { ascending: true });
      if (data) setMessages(data);
      toast.success('Reply sent!');
    } else {
      toast.error('Error sending reply');
    }
  };

  const fetchTickets = async () => {
    try {
      setLoading(true);
      
      // Fetch all tickets
      const { data: ticketsData, error: ticketsError } = await supabase
        .from('tickets')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (ticketsError) throw ticketsError;
      
      if (ticketsData) {
        // For each ticket, fetch user info
        const ticketsWithUserInfo = await Promise.all(
          ticketsData.map(async (ticket) => {
            // Fetch user profile
            const { data: profileData } = await supabase
              .from('profiles')
              .select('full_name, login')
              .eq('id', ticket.user_id)
              .single();
            
            return {
              ...ticket,
              user_info: profileData || { full_name: 'Name not informed', login: 'Login not informed' }
            };
          })
        );
        
        setTickets(ticketsWithUserInfo);
      }
    } catch (error) {
      console.error('Error fetching tickets:', error);
      toast.error('Error loading tickets');
    } finally {
      setLoading(false);
    }
  };

  const handleStatusChange = async (ticketId: string, newStatus: Ticket['status']) => {
    try {
      console.log('Attempting to update ticket:', ticketId, 'to status:', newStatus);
      const { data: updated, error } = await supabase
        .from('tickets')
        .update({ status: newStatus })
        .eq('id', ticketId)
        .select()
        .single();
      console.log('Update result:', updated, error);
      let msg = '';
      if (error) {
        if (typeof error === 'string') {
          msg = error;
        } else if (error && typeof error === 'object') {
          msg = [
            error.message,
            error.details,
            error.code,
            JSON.stringify(error)
          ].filter(Boolean).join(' | ');
        }
        toast.error('Detailed Supabase error: ' + (msg || 'Unknown error'));
        throw error;
      }
      if (updated) {
        setTickets(prevTickets => prevTickets.map(t => t.id === ticketId ? { ...t, ...updated } : t));
        toast.success(`Ticket ${ticketId} updated to status '${newStatus}'!`);
      }
    } catch (error) {
      console.error('Error updating status:', error);
      toast.error('Error updating ticket status');
    }
  };

  const filteredTickets = tickets.filter(ticket => {
    const matchesFilter = filter === 'all' || ticket.status === filter;
    const matchesSearch = 
      ticket.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ticket.user_info?.full_name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ticket.user_info?.login?.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Resolvido':
        return <FiCheckCircle className="w-4 h-4 text-green-500" />;
      case 'Aberto':
        return <FiClock className="w-4 h-4 text-yellow-500" />;
      case 'Em Análise':
        return <FiClock className="w-4 h-4 text-blue-500" />;
      case 'Finalizado':
        return <FiXCircle className="w-4 h-4 text-red-500" />;
      default:
        return <FiClock className="w-4 h-4 text-gray-500" />;
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'Resolvido':
        return 'Resolved';
      case 'Aberto':
        return 'Open';
      case 'Em Análise':
        return 'In Analysis';
      case 'Finalizado':
        return 'Finished';
      default:
        return 'Unknown';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Resolvido':
        return 'bg-green-500/10 text-green-400 border-green-500/30';
      case 'Aberto':
        return 'bg-yellow-500/10 text-yellow-400 border-yellow-500/30';
      case 'Em Análise':
        return 'bg-blue-500/10 text-blue-400 border-blue-500/30';
      case 'Finalizado':
        return 'bg-red-500/10 text-red-400 border-red-500/30';
      default:
        return 'bg-gray-500/10 text-gray-400 border-gray-500/30';
    }
  };

  // Function to get priority color
  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'bg-red-500/10 text-red-400 border-red-500/30';
      case 'medium':
        return 'bg-yellow-500/10 text-yellow-400 border-yellow-500/30';
      case 'low':
        return 'bg-blue-500/10 text-blue-400 border-blue-500/30';
      default:
        return 'bg-gray-500/10 text-gray-400 border-gray-500/30';
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="w-12 h-12 border-4 border-[#FF4B6B] border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Optimized Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative bg-gradient-to-br from-[#1E1E1E]/90 to-[#171313]/90 backdrop-blur-xl p-6 rounded-2xl border border-gray-800/30"
      >
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="w-full">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-3">
              <div className="bg-gradient-to-br from-[#FF4B6B] to-[#8B31FF] rounded-xl p-3 shadow-lg">
                <FiMessageSquare className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#FF4B6B] via-[#8B31FF] to-[#31A8FF] text-transparent bg-clip-text leading-tight">
                Manage Tickets
              </h1>
            </div>
            <p className="text-gray-300 text-base md:text-lg leading-relaxed">View and manage all customer tickets</p>
          </div>
          <div className="flex items-center gap-4 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span>Total: {tickets.length} tickets</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Optimized Filters and Search */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1 relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FiSearch className="text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search by ID, name or customer login..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-[#1E1E1E]/40 backdrop-blur-xl border border-gray-800/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#8B31FF] transition-colors duration-300 text-sm"
          />
        </div>
        <div className="flex items-center gap-2">
          <FiFilter className="text-gray-400" />
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="bg-[#1E1E1E]/40 backdrop-blur-xl border border-gray-800/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#8B31FF] transition-colors duration-300 text-sm min-w-[140px]"
          >
            <option value="all">All Status</option>
            <option value="Aberto">Open</option>
            <option value="Em Análise">In Analysis</option>
            <option value="Resolvido">Resolved</option>
            <option value="Finalizado">Finished</option>
          </select>
        </div>
      </div>

      {/* Tickets List - fluid layout */}
      <div className="space-y-4">
        {filteredTickets.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-12"
          >
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-[#FF4B6B] to-[#8B31FF] rounded-full flex items-center justify-center">
              <FiMessageSquare className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">No tickets found</h3>
            <p className="text-gray-400">There are no tickets that match the filters applied.</p>
          </motion.div>
        ) : (
          <div className="grid gap-4">
            {filteredTickets.map((ticket, index) => (
              <motion.div
                key={ticket.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="bg-gradient-to-br from-[#1E1E1E]/60 to-[#171313]/60 backdrop-blur-xl rounded-xl border border-gray-800/30 p-6 hover:border-[#8B31FF]/30 transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-3">
                      <span className="text-xs font-mono text-gray-400 bg-gray-800/50 px-2 py-1 rounded">
                        #{ticket.id.slice(0, 8)}...
                      </span>
                      <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(ticket.status)}`}>
                        {getStatusIcon(ticket.status)}
                        {getStatusText(ticket.status)}
                      </span>
                      <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium border ${getPriorityColor(ticket.priority)}`}>
                        {ticket.priority === 'high' ? 'High' : ticket.priority === 'medium' ? 'Medium' : 'Low'}
                      </span>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                        <div className="flex items-center gap-2">
                          <span className="text-gray-400 text-sm">Customer:</span>
                          <span className="text-white font-medium">
                            {ticket.user_info?.full_name || 'Name not informed'}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-gray-400 text-sm">Login:</span>
                          <span className="text-white font-medium">
                            {ticket.user_info?.login || 'Login not informed'}
                          </span>
                        </div>
                      </div>
                      
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                        <div className="flex items-center gap-2">
                          <span className="text-gray-400 text-sm">Title:</span>
                          <span className="text-white font-medium">{ticket.title}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <span className="text-gray-400 text-sm">Date:</span>
                        <span className="text-white font-medium">
                          {new Date(ticket.created_at).toLocaleDateString('en-US', {
                            day: '2-digit',
                            month: '2-digit',
                            year: 'numeric',
                            hour: '2-digit',
                            minute: '2-digit'
                          })}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => {
                        setSelectedTicket(ticket);
                        setShowTicketModal(true);
                      }}
                      className="flex items-center gap-2 px-3 py-2 bg-[#31A8FF]/10 hover:bg-[#31A8FF]/20 text-[#31A8FF] rounded-lg transition-colors duration-300 text-sm"
                    >
                      <FiEye className="w-4 h-4" />
                      View Details
                    </button>
                    
                    <select
                      value={ticket.status}
                      onChange={(e) => handleStatusChange(ticket.id, e.target.value as Ticket['status'])}
                      className="px-3 py-2 bg-[#1E1E1E]/40 backdrop-blur-xl border border-gray-800/30 rounded-lg text-white focus:outline-none focus:border-[#8B31FF] transition-colors duration-300 text-sm"
                    >
                      <option value="Aberto">Open</option>
                      <option value="Em Análise">In Analysis</option>
                      <option value="Resolvido">Resolved</option>
                      <option value="Finalizado">Finished</option>
                    </select>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* Ticket Details Modal */}
      {showTicketModal && selectedTicket && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-gradient-to-br from-[#1E1E1E] to-[#171313] rounded-2xl border border-gray-800/50 p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="flex justify-between items-start mb-6">
              <h2 className="text-xl font-bold text-white">Ticket Details</h2>
              <button
                onClick={() => setShowTicketModal(false)}
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <span className="text-gray-400 text-sm">Ticket ID</span>
                  <p className="text-white font-mono">{selectedTicket.id}</p>
                </div>
                <div>
                  <span className="text-gray-400 text-sm">Status</span>
                  <p className="text-white">{getStatusText(selectedTicket.status)}</p>
                </div>
                <div>
                  <span className="text-gray-400 text-sm">Customer</span>
                  <p className="text-white">{selectedTicket.user_info?.full_name || 'Name not informed'}</p>
                </div>
                <div>
                  <span className="text-gray-400 text-sm">Login</span>
                  <p className="text-white">{selectedTicket.user_info?.login || 'Login not informed'}</p>
                </div>
                <div>
                  <span className="text-gray-400 text-sm">Title</span>
                  <p className="text-white">{selectedTicket.title}</p>
                </div>
                <div>
                  <span className="text-gray-400 text-sm">Priority</span>
                  <p className="text-white">
                    {selectedTicket.priority === 'high' ? 'High' : selectedTicket.priority === 'medium' ? 'Medium' : 'Low'}
                  </p>
                </div>
                <div>
                  <span className="text-gray-400 text-sm">Creation Date</span>
                  <p className="text-white">
                    {new Date(selectedTicket.created_at).toLocaleDateString('en-US', {
                      day: '2-digit',
                      month: '2-digit',
                      year: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit'
                    })}
                  </p>
                </div>
              </div>
              <div>
                <span className="text-gray-400 text-sm font-bold">Ticket Messages</span>
                <div className="bg-[#181818] rounded-lg p-4 mt-2 max-h-60 overflow-y-auto space-y-3 border border-gray-800/30">
                  {messages.length === 0 ? (
                    <p className="text-gray-500 text-sm">No messages yet.</p>
                  ) : (
                    messages.map(msg => (
                      <div key={msg.id} className="flex flex-col gap-1">
                        <span className="text-xs text-gray-400">{msg.created_at ? new Date(msg.created_at).toLocaleString('en-US') : ''}</span>
                        <span className="text-white text-sm">{msg.content}</span>
                      </div>
                    ))
                  )}
                </div>
              </div>
              <div className="mt-4">
                <textarea
                  value={reply}
                  onChange={e => setReply(e.target.value)}
                  rows={3}
                  className="w-full rounded-lg border border-gray-700 bg-[#181818] text-white p-3 focus:outline-none focus:border-[#8B31FF]"
                  placeholder="Type your reply to the user..."
                  disabled={sendingReply}
                />
                <button
                  onClick={handleSendReply}
                  disabled={sendingReply || !reply.trim()}
                  className="mt-2 px-6 py-2 rounded-xl bg-gradient-to-r from-[#31A8FF] via-[#8B31FF] to-[#FF4B6B] text-white font-semibold shadow hover:scale-105 transition disabled:opacity-60"
                >
                  {sendingReply ? 'Sending...' : 'Reply'}
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
} 
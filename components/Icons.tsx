import {
  Github,
  Linkedin,
  Globe,
  Mail,
  MapPin,
  Calendar,
  ExternalLink,
  Code,
  Briefcase,
  User,
  Terminal,
  Cpu,
  Twitter,
  Instagram,
  Facebook,
  Sun,
  Moon,
  FileText,
  Database,
  Layout,
  Server,
  Smartphone,
  Wrench
} from 'lucide-react';
import React from 'react';

// Map profile networks to icons
export const SocialIcon = ({ network, className }: { network: string, className?: string }) => {
  const lowerNetwork = network.toLowerCase();
  if (lowerNetwork.includes('github')) return <Github className={className} />;
  if (lowerNetwork.includes('linkedin')) return <Linkedin className={className} />;
  if (lowerNetwork.includes('twitter') || lowerNetwork.includes('x')) return <Twitter className={className} />;
  if (lowerNetwork.includes('instagram')) return <Instagram className={className} />;
  if (lowerNetwork.includes('facebook')) return <Facebook className={className} />;
  return <Globe className={className} />;
};

export {
  Mail,
  MapPin,
  Calendar,
  ExternalLink,
  Code,
  Briefcase,
  User,
  Terminal,
  Cpu,
  Github,
  Linkedin,
  Sun,
  Moon,
  FileText,
  Database,
  Layout,
  Server,
  Smartphone,
  Wrench,
  Globe
};
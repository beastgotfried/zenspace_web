import { LucideIcon } from 'lucide-react';
import React, { ReactNode } from 'react';

export interface FeatureTileProps {
  title: string;
  description: string;
  icon: LucideIcon;
  className?: string;
  children?: ReactNode;
  delay?: number;
  variant?: 'primary' | 'secondary' | 'accent';
}

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline';
  icon?: LucideIcon;
}
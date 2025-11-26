import React from 'react';

export interface ConfigurationItem {
  id: number;
  type: string;
  size: string;
  price: string;
}

export interface AmenityItem {
  id: number;
  name: string;
  icon: React.ElementType;
}

export interface HighlightItem {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  imageUrl: string;
}
export interface ProductFeature {
  title: string;
  description: string;
  icon?: string;
}

export interface ProductSpecification {
  parameter: string;
  value: string;
}

export interface ProductDownload {
  name: string;
  type: 'datasheet' | 'manual' | 'certificate' | 'technical' | 'other';
  format: string;
  fileSize?: string;
  url: string;
}

export interface ProductSEO {
  title: string;
  description: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: string;
  shortDescription: string;
  description: string;
  image: string;
  featured: boolean;
  features: ProductFeature[];
  specifications: ProductSpecification[];
  downloads: ProductDownload[];
  applications?: string[];
  seo: ProductSEO;
}

export type ProductCategory = 
  | 'Temperature Measurement'
  | 'Electrical'
  | 'Pressure'
  | 'Process Measurement'
  | 'Calibration'
  | 'Laboratory Instruments'
  | 'Sensors'
  | 'Other Instruments';

export const PRODUCT_CATEGORIES: ProductCategory[] = [
  'Temperature Measurement',
  'Electrical',
  'Pressure',
  'Process Measurement',
  'Calibration',
  'Laboratory Instruments',
  'Sensors',
  'Other Instruments',
];

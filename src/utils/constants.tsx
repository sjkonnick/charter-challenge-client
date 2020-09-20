export const states = [
  'ALL',
  'AL',
  'AK',
  'AS',
  'AZ',
  'AR',
  'CA',
  'CO',
  'CT',
  'DE',
  'DC',
  'FM',
  'FL',
  'GA',
  'GU',
  'HI',
  'ID',
  'IL',
  'IN',
  'IA',
  'KS',
  'KY',
  'LA',
  'ME',
  'MH',
  'MD',
  'MA',
  'MI',
  'MN',
  'MS',
  'MO',
  'MT',
  'NE',
  'NV',
  'NH',
  'NJ',
  'NM',
  'NY',
  'NC',
  'ND',
  'MP',
  'OH',
  'OK',
  'OR',
  'PW',
  'PA',
  'PR',
  'RI',
  'SC',
  'SD',
  'TN',
  'TX',
  'UT',
  'VT',
  'VI',
  'VA',
  'WA',
  'WV',
  'WI',
  'WY',
];

export const genres = [
  'ALL',
  'American',
  'Seafood',
  'International',
  'Asian',
  'Cafe',
  'Steak',
  'Traditional',
  'European',
  'French',
  'Belgian',
  'Vegetarian',
  'Contemporary',
  'Oysters',
  'Italian',
  'Bistro',
  'Continental',
  'Bakery',
  'Grill',
  'Hawaiian',
  'Polynesian',
  'Pacific Rim',
  'Vietnamese',
  'Coffee',
  'Fusion',
  'Irish',
  'Pasta',
  'Kosher',
  'Japanese',
  'Sushi',
  'Sandwiches',
  'Tea',
];

export const attires = ['ALL', 'Business Casual', 'Casual', 'Smart Casual', 'Formal'];

export type Restaurant = {
  id: string;
  name: string;
  city: string;
  state: string;
  telephone: string;
  genre: string;
  attire: string;
  zip: string;
  website: string;
  lat: string;
  long: string;
  address1: string;
};

export type EnquiryInterest =
  | 'Learning Programmes'
  | 'African Knowledge Gatherings'
  | 'Marriage Preparation'
  | 'Coaching & Counselling'
  | 'Events'
  | 'General Enquiries';

export interface EnquiryOption {
  value: EnquiryInterest;
  description: string;
}

export const ENQUIRY_INTERESTS: EnquiryOption[] = [
  {
    value: 'Learning Programmes',
    description: 'Indigenous knowledge courses and structured learning modules',
  },
  {
    value: 'African Knowledge Gatherings',
    description: '1–2 hour shared cultural learning sessions',
  },
  {
    value: 'Marriage Preparation',
    description: 'Support for individuals and couples preparing for marriage',
  },
  {
    value: 'Coaching & Counselling',
    description: 'Personal and relationship growth guidance',
  },
  {
    value: 'Events',
    description: 'Workshops, community gatherings, and speaking requests',
  },
  {
    value: 'General Enquiries',
    description: 'General questions, collaborations, or Centre visits',
  },
];

export const ARC_PROGRAMME_OPTIONS: string[] = [
  'All / Undecided — Need Guidance',
  'Resetting the Mind',
  'God and the Human Mind',
  'The South African Townships: A Place of Non-Beings',
  'Knowing the Neter and Neterets (god & goddesses) of Kemet',
  'The African Tree of Life',
  'African Cosmologies',
  'African Sciences of Time',
  'Conscious Breathing',
];

export interface EnquiryPrefill {
  interest: EnquiryInterest;
  programme?: string;
  timestamp: number;
}

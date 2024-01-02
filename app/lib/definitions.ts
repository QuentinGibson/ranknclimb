// This file contains type definitions for your data.
// It describes the shape of the data, and what data type each property should accept.
// For simplicity of teaching, we're manually defining these types.
// However, these types are generated automatically if you're using an ORM such as Prisma.
export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
  verified: boolean;
  riot_id: string;
};

export type Customer = {
  id: string;
  name: string;
  email: string;
  image_url: string;
};

export type Invoice = {
  id: string;
  customer_id: string;
  amount: number;
  date: string;
  // In TypeScript, this is called a string union type.
  // It means that the "status" property can only be one of the two strings: 'pending' or 'paid'.
  status: 'pending' | 'paid';
};

export type Revenue = {
  month: string;
  revenue: number;
};

export type LatestInvoice = {
  id: string;
  name: string;
  image_url: string;
  email: string;
  amount: string;
};

// The database returns a number for amount, but we later format it to a string with the formatCurrency function
export type LatestInvoiceRaw = Omit<LatestInvoice, 'amount'> & {
  amount: number;
};

export type InvoicesTable = {
  id: string;
  customer_id: string;
  name: string;
  email: string;
  image_url: string;
  date: string;
  amount: number;
  status: 'pending' | 'paid';
};

export type CustomersTableType = {
  id: string;
  name: string;
  email: string;
  image_url: string;
  total_invoices: number;
  total_pending: number;
  total_paid: number;
};

export type FormattedCustomersTable = {
  id: string;
  name: string;
  email: string;
  image_url: string;
  total_invoices: number;
  total_pending: string;
  total_paid: string;
};

export type CustomerField = {
  id: string;
  name: string;
};

export type InvoiceForm = {
  id: string;
  customer_id: string;
  amount: number;
  status: 'pending' | 'paid';
};


//App definitions start here

export type Class = {
  id: string;
  name: string;
  icon: string;
}

export type Champion = [
  {
    id: string;
    name: string;
    icon: string;
    role: string;
    range: string;
    resource: string;
    attackClass: string;
    class_id: string;
  }
]

export type matchUp = [
  {
    champion_id: string;
    champion_name: string;
    champion_icon: string;
    win_rate: number;
  }
]

export type Deck = [
  {
    id: string;
    name: string;
    description: string;
    icon: string;
    champion_id: string;
  }
]

export type Card = [
  {
    id: string;
    deck_id: string;
    question: string;
    correct_answer: string;
  }
]

export type DeckResult = [
  {
    id: string;
    deck_id: string;
    user_id: string;
    finished: boolean;
    cards_correct: number;
    total_cards: number;
    time: number;
    date: string;
  }
]

export type CardResult = [
  {
    id: string;
    card_id: string;
    user_id: string;
    deck_id: string;
    deck_result_id: string;
    date: string;
    correct: boolean;
    time: number;
    reptitions: number;
    efactor: number;
    last_review_date: string;
    next_review_date: string;
  }
]


export type WrongAnswer = [
  {
    id: string;
    card_id: string;
    answer: string;
  }
]
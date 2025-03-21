// src/lib/supabase.ts
import { createClient } from '@supabase/supabase-js';

// These would normally be in your .env file
// need to get new tokens!!!
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

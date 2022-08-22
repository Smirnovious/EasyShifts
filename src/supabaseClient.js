import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://uwpndslblwtkvgdbjasu.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV3cG5kc2xibHd0a3ZnZGJqYXN1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTkyNTk3MzIsImV4cCI6MTk3NDgzNTczMn0.OdFHT3_aUyg0FaAJ3yK5cRw4u7drKyS2TQ0X54DqtPI'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://rbydhyhxesqdqsiywsyc.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJieWRoeWh4ZXNxZHFzaXl3c3ljIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc2MDY4MDEsImV4cCI6MjA3MzE4MjgwMX0.WUJrReAInIzC7e4Ne5Fkl7f3E4Zw7GCv-SsZn9Qo6YU";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

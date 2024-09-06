// // src/supabaseClient.ts
// import { createClient } from "@supabase/supabase-js";

// const SUPABASE_URL =
//   "postgresql://postgres.froshmicuwffqvqzvrun:[YOUR-PASSWORD]@aws-0-ap-south-1.pooler.supabase.com:6543/postgres";
// const SUPABASE_ANON_KEY =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZyb3NobWljdXdmZnF2cXp2cnVuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjU1NTA1NzUsImV4cCI6MjA0MTEyNjU3NX0.djbGsHYCOhGKMm_80dRNEEn6WUGasl7r2h34zMazc2s";

// export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// src/supabaseClient.ts
import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";

dotenv.config();

const URL =
  process.env.SUPABASE_URL ||
  "postgresql://postgres.froshmicuwffqvqzvrun:mydatabaseiswhsmith@aws-0-ap-south-1.pooler.supabase.com:6543/postgres";
const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY || "";

export const supabase = createClient(URL, SUPABASE_ANON_KEY);

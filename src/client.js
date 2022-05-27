import {createClient} from "@supabase/supabase-js";

export const supabase = createClient(
  "https://fjsgqasbiymjsmmxfccu.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZqc2dxYXNiaXltanNtbXhmY2N1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTM2NDgzOTMsImV4cCI6MTk2OTIyNDM5M30.g1sNBfTeJIk_CRyfdsvOHH35PN0A-UgUR0wxX5CENEM"
)
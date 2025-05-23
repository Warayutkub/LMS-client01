import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://njuwpqkixraddhsjofvd.supabase.co/storage/v1/s3'
const supabaseKey = 'your-anon-or-service-role-key'
const supabase = createClient(supabaseUrl, supabaseKey)

// upload file
const { data, error } = await supabase.storage
  .from('your-bucket-name')
  .upload('folder/filename.png', file) // file = Blob หรือ File object

// hook file
const { data } = supabase.storage
  .from('your-bucket-name')
  .getPublicUrl('folder/filename.png')
console.log(data.publicUrl)

// del file
const { data, error } = await supabase.storage
  .from('your-bucket-name')
  .remove(['folder/filename.png'])
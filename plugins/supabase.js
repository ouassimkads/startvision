// plugins/supabase.js
import { createClient } from '@supabase/supabase-js';

export default defineNuxtPlugin(async  (nuxtApp) => {
    // تحقق من وجود الخاصية $supabase مسبقًا
  if (!nuxtApp.$supabase) {
    const config = useRuntimeConfig();
    const supabaseUrl = config.public.supabaseUrl;
    const supabaseKey = config.public.supabaseKey;

    // إنشاء العميل
    const supabase = createClient(supabaseUrl, supabaseKey);

    // توفير supabase في التطبيق
    nuxtApp.provide('supabase', supabase);

  }
});

// middleware/redirect-if-auth.global.ts
import { defineNuxtRouteMiddleware, navigateTo, useNuxtApp } from '#app'

export default defineNuxtRouteMiddleware(async (to) => {
  // لا تنفذ على السيرفر
  if (import.meta.server) return

  const { $supabase } = useNuxtApp()

  // صفحات المصادقة فقط
  const authPages = ['/connexion', '/inscription']
  const isAuthPage = authPages.includes(to.path)

  // إذا لم تكن صفحة مصادقة، لا حاجة لتنفيذ شيء
  if (!isAuthPage) return

  const { data: sessionData, error } = await $supabase.auth.getSession()
  const session = sessionData?.session

  if (!session || error) return // المستخدم غير مسجل الدخول

  // المستخدم مسجل الدخول، نحدد إلى أين نوجهه حسب دوره
  const { data: userData, error: userError } = await $supabase
    .from('users')
    .select('role')
    .eq('auth_id', session.user.id)
    .single()

  if (userError || !userData) {
    console.error("خطأ في جلب الدور:", userError?.message)
    return // لا توجهه لأي مكان، دعه في الصفحة
  }

  const role = userData.role

  if (role === 'admin') {
    return navigateTo('/admin')
  } else {
    return navigateTo('/tableau-de-bord')
  }
})

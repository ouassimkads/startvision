// middleware/auth.ts
import { defineNuxtRouteMiddleware, navigateTo, useNuxtApp } from 'nuxt/app'

export default defineNuxtRouteMiddleware(async (to) => {
  if (import.meta.server) return // لا تنفذ على السيرفر

  const { $supabase } = useNuxtApp()

  // محاولة الحصول على الجلسة
  const { data: sessionData, error } = await $supabase.auth.getSession()

  // المسارات التي تتطلب تسجيل دخول
  const protectedPaths = ['/admin', '/tableau-de-bord']
  const isProtected = protectedPaths.some((path) => to.path.startsWith(path))

  // إذا لم يكن هناك جلسة والمستخدم يحاول الدخول إلى مسار محمي
  if ((!sessionData.session || error) && isProtected) {
    return navigateTo('/connexion')
  }

  // إذا كانت الجلسة موجودة، تحقق من الدور
  if (sessionData.session) {
    const userId = sessionData.session.user.id

    const { data: userData, error: userError } = await $supabase
      .from('users')
      .select('role')
      .eq('auth_id', userId) // أو حسب اسم الحقل في جدول users
      .single()

    if (userError || !userData) {
      console.error("فشل في جلب الدور:", userError?.message)
      return navigateTo('/connexion')
    }

    const role = userData.role

    // التوجيه حسب الدور
    if (to.path.startsWith("/admin") && role !== "admin") {
      return navigateTo("/tableau-de-bord")
    }

    if (to.path.startsWith("/tableau-de-bord") && role === "admin") {
      return navigateTo("/admin")
    }
  }
})

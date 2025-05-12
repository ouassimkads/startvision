// stores/auth.js
import { defineStore } from "pinia";
import { useNuxtApp } from "#app";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: null,
    role: null,
    session: null,
    loading: true,
    userName: null
  }),

  actions: {
    // Login function
    async login(email, password) {
      const { $supabase } = useNuxtApp(); // supabase from plugin

      try {
        this.loading = true;
        const { data, error } = await $supabase.auth.signInWithPassword({
          email,
          password,
        });
        if (error) {
          throw error;
        }

        this.user = data.user;
        this.session = data.session;

        return data;
      } catch (err) {
        console.error("Error logging in:", err.message);
        throw err;
      } finally {
        this.loading = false; // تعيين التحميل إلى false بعد الانتهاء
      }
    },

    // Create new account function
    async signup(email, password) {
      const { $supabase } = useNuxtApp();
      try {
        this.loading = true;
        const { data, error } = await $supabase.auth.signUp({
          email,
          password,
        });
        if (error) {
          throw error;
        }
        this.user = data.user;
        this.session = data.session;
        return data;
      } catch (err) {
        console.error("Error signing up:", err.message);
        throw err;
      } finally {
        this.loading = false; // تعيين التحميل إلى false بعد الانتهاء
      }
    },

    // signout function
    async signout() {
      this.loading = true;
      const { $supabase } = useNuxtApp();
      const router = useRouter();
      try {
        const { error } = await $supabase.auth.signOut();
        router.push("/");
        if (error) {
          throw error;
        }
        this.user = null;
        this.session = null;
        return true;
      } catch (err) {
        console.error("Error signing out:", err.message);
        throw err;
      } finally {
        this.loading = false; // تعيين التحميل إلى false بعد الانتهاء
      }
    },

    // fetch user data
    async fetchUser() {
      this.loading = true
      const { $supabase } = useNuxtApp()
    
      try {
        if (import.meta.client) {
          // محاولة الحصول على الجلسة المخزنة في المتصفح
          const { data: sessionData, error: sessionError } =
            await $supabase.auth.getSession()
    
          if (sessionError || !sessionData.session) {
            this.user = null
            this.session = null
            this.role = null
            return null
          }
    
          // إذا كانت الجلسة موجودة، استرجاع بيانات المستخدم
          const { data: userData, error: userError } = await $supabase.auth.getUser()
          if (userError) throw userError
    
          this.user = userData.user
          this.session = sessionData.session
    
          // جلب الدور بعد التأكد من الجلسة
          await this.fetchUserRole()
          console.log("User ID:", this.user?.id);
          return userData
        }
      } catch (err) {
        console.error('Error fetching user:', err.message)
        return null
      } finally {
        this.loading = false
      }
    },
    
    
    
    // دالة لجلب role المستخدم من جدول 'users'
    async fetchUserRole() {
      const { $supabase } = useNuxtApp()
    
      try {
        if (!this.user || !this.user.id) {
          throw new Error('User not found')
        }
    
        const { data: userRoleData, error: userRoleError } = await $supabase
          .from('users')
          .select('role')
          .eq('auth_id', this.user.id) // أو .eq('id', this.user.id) حسب الحقل في جدولك
          .single()
    
        if (userRoleError) {
          throw userRoleError
        }
    
        this.role = userRoleData?.role
        return this.role
      } catch (err) {
        console.error('Error fetching user role:', err.message)
        this.role = null
        return null
      }
    }, 
        // دالة لجلب role المستخدم من جدول 'users'
    async fetchUserRName() {
          const { $supabase } = useNuxtApp()
        
          try {
            if (!this.user || !this.user.id) {
              throw new Error('User not found')
            }
        
            const { data: userNameData, error: userNameError } = await $supabase
              .from('users')
              .select('name')
              .eq('auth_id', this.user.id) // أو .eq('id', this.user.id) حسب الحقل في جدولك
              .single()
        
            if (userNameError) {
              throw userNameError
            }
        
            this.userName = userNameData?.name
            return this.role
          } catch (err) {
            console.error('Error fetching user role:', err.message)
            this.role = null
            return null
          }
     }, 
    
    async fetchSession() {
      const { $supabase } = useNuxtApp();

      try {
        // محاولة الحصول على الجلسة المخزنة في المتصفح
        const { data: sessionData, error: sessionError } =
          await $supabase.auth.getSession();

        if (sessionError || !sessionData.session) {
          this.session = null;
          this.user = null;
          this.role = null;
          return null;
        }

        // إذا كانت الجلسة موجودة، استرجاع بيانات المستخدم
        const { data: userData, error: userError } = await $supabase.auth.getUser();
        if (userError) throw userError;

        this.user = userData.user;
        this.session = sessionData.session;

        // جلب الدور بعد التأكد من الجلسة
        await this.fetchUserRole();

        return this.session; // إرجاع الجلسة
      } catch (err) {
        console.error('Error fetching session:', err.message);
        this.session = null;
        return null;
      }
    },
    // دالة لتحديث البيانات
    async updateProfile(supabase, userId, profile) {
      try {
        const { error } = await supabase
          .from('users')
          .update({
            name: profile.username,
            phone: profile.phone
          })
          .eq('auth_id', userId);

        if (error) {
          throw error;
        }
        return 'Profil mis à jour avec succès';
      } catch (err) {
        console.error('Erreur lors de la mise à jour du profil:', err.message);
        throw err;
      }
    }, 
  },
  
});

import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        search: 'search.html',
        profile: 'profile.html',
        auth: 'auth.html',
        application: 'application.html',
        dashboardStudent: 'dashboard-student.html',
        dashboardTutor: 'dashboard-tutor.html',
      }
    }
  }
})
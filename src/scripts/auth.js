class AuthPage {
  constructor() {
    this.loginModal = document.getElementById('loginModal');
    this.registerModal = document.getElementById('registerModal');
    this.init();
  }

  init() {
    // Переключение вход/регистрация
    document.getElementById('toRegister').addEventListener('click', () => this.showRegister());
    document.getElementById('toLogin').addEventListener('click', () => this.showLogin());
    document.getElementById('tabRegister').addEventListener('click', () => this.showRegister());
    document.getElementById('tabLogin2').addEventListener('click', () => this.showLogin());

    // Выбор роли
    document.querySelectorAll('.auth-modal__role').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.auth-modal__role').forEach(b => b.classList.remove('auth-modal__role--active'));
        btn.classList.add('auth-modal__role--active');
      });
    });

    // Кнопка входа
    document.getElementById('loginBtn').addEventListener('click', () => {
      const role = localStorage.getItem('role') || 'student';
      // ✅ Исправленные пути
      window.location.href = role === 'tutor' ? 'dashboard-tutor.html' : 'dashboard-student.html';
    });

    // Кнопка регистрации
    document.getElementById('registerBtn').addEventListener('click', () => {
      const activeRole = document.querySelector('.auth-modal__role--active');
      const role = activeRole ? activeRole.dataset.role : 'student';
      localStorage.setItem('role', role);
      // ✅ Исправленные пути
      window.location.href = role === 'tutor' ? 'dashboard-tutor.html' : 'dashboard-student.html';
    });
  }

  showRegister() {
    this.loginModal.classList.add('auth-modal--hidden');
    this.registerModal.classList.remove('auth-modal--hidden');
  }

  showLogin() {
    this.registerModal.classList.add('auth-modal--hidden');
    this.loginModal.classList.remove('auth-modal--hidden');
  }
}

new AuthPage();
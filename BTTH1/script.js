document.querySelectorAll('.portfolio__link').forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault(); 
      let target = this.getAttribute('href'); 

      document.querySelector(target).scrollIntoView({
        behavior: 'smooth', 
        block: 'start' 
      });
    });
  });
  document.querySelector('nav ul li:nth-child(3) a').addEventListener('click', function() {
    document.querySelector('.portfolio').scrollIntoView({ behavior: 'smooth' });
  });
  document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector(".contact__form form");

    form.addEventListener("submit", function(event) {
      event.preventDefault(); // Ngăn chặn việc gửi form đi mặc định

      // Lấy giá trị của các trường input
      const name = form.querySelector('input[name="name"]').value;
      const email = form.querySelector('input[name="email"]').value;
      const message = form.querySelector('textarea[name="message"]').value;

      // Gửi thống báo về cho người dùng
      alert(`Xin chào ${name}! Tin nhắn của bạn đã được gửi đi. Chúng tôi sẽ phản hồi sớm nhất có thể.`);

      // Reset form
      form.reset();
    });
  });
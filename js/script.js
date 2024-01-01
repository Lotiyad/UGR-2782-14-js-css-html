
  function toggleDropContent() {
    var dropContent = document.querySelector(".drop-content");
    dropContent.classList.toggle("show");
  }

  
  var dropButton = document.querySelector(".dropbutton");
  dropButton.addEventListener("click", toggleDropContent);
  

  const form = document.querySelector('form');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

   
    const nameInput = form.querySelector('input[type="text"][placeholder="your name"]');
    const emailInput = form.querySelector('input[type="text"][placeholder="your email"]');
    const commentInput = form.querySelector('input[type="text"][placeholder="your comment"]');

    if (nameInput.value.trim() === '') {
      alert('Please enter your name');
      nameInput.focus();
      return;
    }

    if (emailInput.value.trim() === '') {
      alert('Please enter your email');
      emailInput.focus();
      return;
    }

    if (commentInput.value.trim() === '') {
      alert('Please enter your comment');
      commentInput.focus();
      return;
    }


    form.submit();
  });
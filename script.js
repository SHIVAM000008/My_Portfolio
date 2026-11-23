document.getElementById('year').textContent = new Date().getFullYear();
const copyButton = document.getElementById('copy-email');
copyButton?.addEventListener('click', async () => {
  try { await navigator.clipboard.writeText('sonishivam8107@gmail.com'); copyButton.textContent = 'Email copied'; }
  catch { copyButton.textContent = 'sonishivam8107@gmail.com'; }
});

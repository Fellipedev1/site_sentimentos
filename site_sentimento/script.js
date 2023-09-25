
document.getElementById('sentiment-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const sentiment = document.getElementById('sentiment').value;

    const result = document.getElementById('result');
    result.innerHTML = `<p> Saudações, ${name}, você parece mesmo ${sentiment}.</p>`;
});
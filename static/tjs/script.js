document.addEventListener('DOMContentLoaded', () => {
    // AI Assistant Chat
    const chatForm = document.getElementById('ai-question-form');
    if (chatForm) {
        chatForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const input = document.getElementById('question-input');
            const question = input.value;
            
            const response = await fetch('/ask', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: `question=${encodeURIComponent(question)}&context=${window.location.pathname}`
            });
            
            const data = await response.json();
            const chatMessages = document.getElementById('chat-messages');
            
            chatMessages.innerHTML += `
                <div class="user-message">${question}</div>
                <div class="ai-message">${data.answer}</div>
            `;
            
            input.value = '';
            chatMessages.scrollTop = chatMessages.scrollHeight;
        });
    }

    // Quiz Interaction
    const quizForm = document.querySelector('.quiz-form');
    if (quizForm) {
        quizForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const formData = new FormData(quizForm);
            const answers = {};
            
            formData.forEach((value, key) => {
                answers[key] = value;
            });

            // Process answers and show results
            const results = await processQuizAnswers(answers);
            showQuizResults(results);
        });
    }
});

async function processQuizAnswers(answers) {
    // Implement quiz processing logic
}

function showQuizResults(results) {
    // Implement results display
}
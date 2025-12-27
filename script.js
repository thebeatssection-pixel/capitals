document.addEventListener('DOMContentLoaded', () => {
    const inputText = document.getElementById('input-text');
    const outputText = document.getElementById('output-text');
    const copyBtn = document.getElementById('copy-btn');

    // Function to handle uppercase conversion
    function toCapitals() {
        const original = inputText.value;
        const result = original.toUpperCase();
        outputText.value = result;
    }

    // Function to handle lowercase conversion (reverse)
    function toLowercase() {
        const original = outputText.value;
        const result = original.toLowerCase();
        inputText.value = result;
    }

    // Event listener for real-time conversion
    inputText.addEventListener('input', toCapitals);
    outputText.addEventListener('input', toLowercase);

    // Copy to clipboard functionality
    copyBtn.addEventListener('click', async () => {
        if (!outputText.value) return;

        try {
            await navigator.clipboard.writeText(outputText.value);

            // Visual feedback
            const originalIcon = copyBtn.innerHTML;
            copyBtn.innerHTML = `
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L9 17L4 12" stroke="#4ade80" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            `;
            setTimeout(() => {
                copyBtn.innerHTML = originalIcon;
            }, 2000);

        } catch (err) {
            console.error('Failed to copy: ', err);
        }
    });

    // Initial call to clear/set state if browser retains values
    toCapitals();
});

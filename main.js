function Copy(button) {
    const textToCopy = button.innerHTML;

    navigator.clipboard.writeText(textToCopy).then(() => {
        alert(`Copied: ${textToCopy}`);
    }).catch(err => {
        alert(`Failed to copy text..`);
    });
}
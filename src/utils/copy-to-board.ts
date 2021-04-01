// copy text to clipboard
// ref: https://stackoverflow.com/a/46118025
export function copyToClipboard(text: string) {
  var dummy = document.createElement('input');
  document.body.appendChild(dummy);
  dummy.setAttribute('value', text);
  dummy.select();
  document.execCommand('copy');
  document.body.removeChild(dummy);
}

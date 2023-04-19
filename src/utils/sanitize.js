import DOMPurify from 'dompurify';

export function sanitizeInput(input) {
  const sanitizedInput = DOMPurify.sanitize(input);
  return sanitizedInput;
}
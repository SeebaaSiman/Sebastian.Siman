import { useState } from 'react';

export const useClipboard = () => {
 const [copied, setCopied] = useState(false);
 const [notSopported, setnotSopported] = useState(false);
 const [copyError, setCopyError] = useState(false)
 const onClipboard = async (textToCopy) => {
  try {
   if (!navigator?.clipboard) {
    setnotSopported('Clipboard not supported');
    return false;
   }

   await navigator.clipboard.writeText(textToCopy);
   setCopied(true);
   setTimeout(() => {
    setCopied(false);
   }, 1500);
   return true;
  } catch (error) {
   setCopyError('Error copying to clipboard:', error);
   setTimeout(() => {
    setCopyError(false);
   }, 1500);
   return false;
  }
 };

 return {
  notSopported, copyError,
  copied,
  onClipboard
 };
};

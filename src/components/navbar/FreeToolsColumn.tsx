
<ToolMenuItem 
  icon={(props) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-purple-600 h-5 w-5" {...props}>
      <rect x="3" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2" />
      <rect x="3" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2" />
      <rect x="14" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2" />
      <path d="M17.5 14V21" stroke="currentColor" strokeWidth="2" />
      <path d="M14 17.5H21" stroke="currentColor" strokeWidth="2" />
    </svg>
  )} 
  name="QR Code Generator" 
  color="bg-purple-100" 
  link="/free-qr-code-generator"
  onClick={() => setIsMenuOpen && setIsMenuOpen(false)}
/>
      
<ToolMenuItem 
  icon={(props) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-blue-600 h-5 w-5" {...props}>
      <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="currentColor" strokeWidth="2" />
      <path d="M16.5 14.5C16.5 14.5 15 16.5 12 16.5C9 16.5 7.5 14.5 7.5 14.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M8.5 10C7.67157 10 7 9.32843 7 8.5C7 7.67157 7.67157 7 8.5 7C9.32843 7 10 7.67157 10 8.5C10 9.32843 9.32843 10 8.5 10Z" fill="currentColor" />
      <path d="M15.5 10C14.6716 10 14 9.32843 14 8.5C14 7.67157 14.6716 7 15.5 7C16.3284 7 17 7.67157 17 8.5C17 9.32843 16.3284 10 15.5 10Z" fill="currentColor" />
    </svg>
  )} 
  name="Color Palette Generator" 
  color="bg-blue-100"
  link="/free-color-palette-generator"
  onClick={() => setIsMenuOpen && setIsMenuOpen(false)}
/>
      
<ToolMenuItem 
  icon={(props) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-yellow-600 h-5 w-5" {...props}>
      <path d="M3 7C3 5.89543 3.89543 5 5 5H19C20.1046 5 21 5.89543 21 7V17C21 18.1046 20.1046 19 19 19H5C3.89543 19 3 18.1046 3 17V7Z" stroke="currentColor" strokeWidth="2" />
      <path d="M3 7L12 13L21 7" stroke="currentColor" strokeWidth="2" />
    </svg>
  )} 
  name="Email Signature Generator" 
  color="bg-yellow-100"
  link="/free-email-signature-generator"
  onClick={() => setIsMenuOpen && setIsMenuOpen(false)}
/>

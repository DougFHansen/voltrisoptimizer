const fs = require('fs');

function fixFile(path, replacer) {
  const content = fs.readFileSync(path, 'utf8');
  fs.writeFileSync(path, replacer(content), 'utf8');
}

fixFile('components/FAQSection.tsx', c => c.replace(
  /'It depends on the chosen service, the condition of the machine itself, and the customer\\'s availability to perform the service. We cannot guarantee a fixed deadline, but we will do our best to perform the service as quickly as possible.'/g,
  '"It depends on the chosen service, the condition of the machine itself, and the customer\'s availability to perform the service. We cannot guarantee a fixed deadline, but we will do our best to perform the service as quickly as possible."'
));

fixFile('components/TestimonialsSection.tsx', c => c.replace(
  /'Best optimization software I\\'ve ever used. The one-click optimization feature is amazing. My gaming performance improved significantly.'/g,
  '"Best optimization software I\'ve ever used. The one-click optimization feature is amazing. My gaming performance improved significantly."'
).replace(
  /'Excellent software for computer performance optimization. My device\\'s speed has noticeably increased, and the gaming experience has significantly improved.'/g,
  '"Excellent software for computer performance optimization. My device\'s speed has noticeably increased, and the gaming experience has significantly improved."'
));

fixFile('components/tickets/TicketList.tsx', c => c.replace(
  /'Please wait for the administrator\\'s reply before sending a new message.'/g,
  '"Please wait for the administrator\'s reply before sending a new message."'
));

fixFile('components/SkipLink.tsx', c => c.replace(
  'Skip to main content',
  '>Skip to main content</Link>'
));

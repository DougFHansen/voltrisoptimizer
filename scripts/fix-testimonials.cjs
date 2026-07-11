const fs = require('fs');

const path = 'components/TestimonialsSection.tsx';
let content = fs.readFileSync(path, 'utf8');

content = content.replace(
  /'Best optimization software I\\'ve ever used. The one-click optimization feature is amazing. My gaming performance improved significantly.'/g,
  '"Best optimization software I\'ve ever used. The one-click optimization feature is amazing. My gaming performance improved significantly."'
);

fs.writeFileSync(path, content, 'utf8');

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Set target (source) and destination paths
const target = path.resolve(__dirname, 'src/public/images/heros');
const destination = path.resolve(__dirname, 'dist/images/heros');

// Check if destination directory exists; if not, create it
if (!fs.existsSync(destination)) {
  fs.mkdirSync(destination, { recursive: true });
}

// Function to process and compress image below 200KB
const processImage = (inputPath, outputPath, width) => {
  sharp(inputPath)
    .resize(width)
    .jpeg({
      quality: 50,         // Lower quality for smaller size
      progressive: true,   // Progressive loading
      chromaSubsampling: '4:2:0'  // Better compression
    })
    .toFile(outputPath, (err, info) => {
      if (err) {
        console.error(`Error processing ${inputPath}: ${err}`);
      } else {
        if (info.size > 200 * 1024) {
          console.warn(`⚠️ ${outputPath} is ${Math.round(info.size / 1024)}KB. Consider lowering quality.`);
        } else {
          console.log(`✅ Processed ${outputPath}: ${Math.round(info.size / 1024)}KB`);
        }
      }
    });
};

fs.readdirSync(target).forEach((image) => {
  const inputPath = `${target}/${image}`;

  // Large version (800px)
  const largeOutput = path.resolve(destination, `${image.split('.').slice(0, -1).join('.')}-large.jpg`);
  processImage(inputPath, largeOutput, 800);

  // Small version (480px)
  const smallOutput = path.resolve(destination, `${image.split('.').slice(0, -1).join('.')}-small.jpg`);
  processImage(inputPath, smallOutput, 480);
});


import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const folders = [
  path.join(__dirname, '../public/images/new-gallery'),
  path.join(__dirname, '../public/images/photos-new')
];

async function optimizeImages() {
  for (const folder of folders) {
    if (!fs.existsSync(folder)) {
      console.log('Folder not found:', folder);
      continue;
    }

    console.log('\nProcessing:', folder);
    const files = fs.readdirSync(folder);

    for (const file of files) {
      const ext = path.extname(file).toLowerCase();
      if (!['.jpg', '.jpeg', '.png'].includes(ext)) continue;

      const inputPath = path.join(folder, file);
      const tempPath = path.join(folder, 'temp_' + file.replace(ext, '.jpg'));
      const finalPath = path.join(folder, file.replace(ext, '.jpg'));
      const stats = fs.statSync(inputPath);

      if (stats.size > 300000) { // Only optimize if > 300KB
        console.log('Optimizing:', file, '(' + Math.round(stats.size/1024) + 'KB)');

        try {
          await sharp(inputPath)
            .resize(1920, null, { withoutEnlargement: true })
            .jpeg({ quality: 75, progressive: true })
            .toFile(tempPath);

          // Remove original
          fs.unlinkSync(inputPath);

          // Rename temp to final
          if (fs.existsSync(finalPath) && finalPath !== inputPath) {
            fs.unlinkSync(finalPath);
          }
          fs.renameSync(tempPath, finalPath);

          const newStats = fs.statSync(finalPath);
          console.log('  -> Reduced to', Math.round(newStats.size/1024) + 'KB');
        } catch (error) {
          console.error('  Error:', error.message);
        }
      } else {
        console.log('Skipping (already small):', file, '(' + Math.round(stats.size/1024) + 'KB)');
      }
    }
  }
  console.log('\nDone!');
}

optimizeImages().catch(console.error);

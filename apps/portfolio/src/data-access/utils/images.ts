import fs from 'node:fs';
import path from 'node:path';

export function getProfileImages(): string[] {
  try {
    const imagesDir = path.join(process.cwd(), 'app', 'assets', 'images', 'ya');

    // Check if directory exists
    if (!fs.existsSync(imagesDir)) {
      console.warn('Profile images directory not found:', imagesDir);
      return [];
    }

    // Read all files in the directory
    const files = fs.readdirSync(imagesDir);

    // Filter for image files
    const imageExtensions = [
      '.jpg',
      '.jpeg',
      '.png',
      '.gif',
      '.webp',
      '.JPG',
      '.JPEG',
      '.PNG'
    ];
    const imageFiles = files.filter((file) =>
      imageExtensions.some((ext) => file.toLowerCase().endsWith(ext))
    );

    // Return full paths to images
    return imageFiles.map((file) => `/app/assets/images/ya/${file}`);
  } catch (error) {
    console.error('Error reading profile images:', error);
    return [];
  }
}

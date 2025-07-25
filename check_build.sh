#!/bin/bash
echo "🧹 Cleaning previous build..."
rm -rf dist

echo "🏗️ Building with verbose output..."
npm run build > build_output.txt 2>&1
echo "Build completed. Output saved to build_output.txt"

echo "📁 Checking dist folder contents..."
ls -la dist/

echo "📁 Checking assets folder..."
ls -la dist/assets/

echo "🔍 Looking for CSS files..."
find dist/ -name "*.css" -type f

echo "📋 Build complete!"

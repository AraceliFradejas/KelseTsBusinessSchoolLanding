#!/bin/bash
cd /workspaces/KelseTsBusinessSchoolLanding
echo "🏗️ Starting clean build process..."
rm -rf dist
echo "📦 Building project..."
npm run build
echo "📋 Build results:"
ls -la dist/
echo "📋 Assets folder:"
ls -la dist/assets/
echo "✅ Build complete!"

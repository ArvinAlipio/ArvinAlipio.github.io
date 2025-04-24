#!/bin/bash
echo "🧹 Cleaning old files..."
rm -rf index.html assets

echo "📦 Copying new build output..."
cp -r dist/* .

echo "🚀 Pushing to GitHub..."
git add .
git commit -m "Deploy updated site"
git push origin work_branch
echo "✅ Deployed! Visit https://arvinalipio.github.io"

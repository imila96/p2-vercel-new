# Index 101 Clone - Installation & Run Script

Write-Host "===============================================" -ForegroundColor Cyan
Write-Host "  Index 101 Clone - Next.js Installation" -ForegroundColor Cyan
Write-Host "===============================================" -ForegroundColor Cyan
Write-Host ""

# Check if Node.js is installed
Write-Host "Checking Node.js installation..." -ForegroundColor Yellow
$nodeVersion = node --version 2>$null
if ($LASTEXITCODE -ne 0) {
    Write-Host "Error: Node.js is not installed!" -ForegroundColor Red
    Write-Host "Please install Node.js from: https://nodejs.org/" -ForegroundColor Red
    exit 1
}
Write-Host "Node.js version: $nodeVersion" -ForegroundColor Green
Write-Host ""

# Navigate to project directory
$projectPath = "f:\fiver\project 1\p2-new\Index 101-clone"
Set-Location $projectPath
Write-Host "Project directory: $projectPath" -ForegroundColor Green
Write-Host ""

# Install dependencies
Write-Host "Installing dependencies..." -ForegroundColor Yellow
Write-Host "This may take a few minutes..." -ForegroundColor Yellow
npm install

if ($LASTEXITCODE -ne 0) {
    Write-Host "Error: Failed to install dependencies!" -ForegroundColor Red
    exit 1
}

Write-Host ""
Write-Host "Installation complete!" -ForegroundColor Green
Write-Host ""

# Ask user what to run
Write-Host "===============================================" -ForegroundColor Cyan
Write-Host "  What would you like to do?" -ForegroundColor Cyan
Write-Host "===============================================" -ForegroundColor Cyan
Write-Host "1. Run Development Server (npm run dev)" -ForegroundColor White
Write-Host "2. Build for Production (npm run build)" -ForegroundColor White
Write-Host "3. Run Express Backend (npm run server)" -ForegroundColor White
Write-Host "4. Exit" -ForegroundColor White
Write-Host ""

$choice = Read-Host "Enter your choice (1-4)"

switch ($choice) {
    "1" {
        Write-Host ""
        Write-Host "Starting development server..." -ForegroundColor Yellow
        Write-Host "Visit: http://localhost:3000" -ForegroundColor Cyan
        Write-Host "Press Ctrl+C to stop the server" -ForegroundColor Yellow
        Write-Host ""
        npm run dev
    }
    "2" {
        Write-Host ""
        Write-Host "Building for production..." -ForegroundColor Yellow
        npm run build
        
        if ($LASTEXITCODE -eq 0) {
            Write-Host ""
            Write-Host "Build successful!" -ForegroundColor Green
            Write-Host "Run 'npm start' to start the production server" -ForegroundColor Cyan
        }
    }
    "3" {
        Write-Host ""
        Write-Host "Starting Express backend server..." -ForegroundColor Yellow
        Write-Host "API available at: http://localhost:3001" -ForegroundColor Cyan
        Write-Host "Press Ctrl+C to stop the server" -ForegroundColor Yellow
        Write-Host ""
        npm run server
    }
    "4" {
        Write-Host "Goodbye!" -ForegroundColor Green
        exit 0
    }
    default {
        Write-Host "Invalid choice. Exiting." -ForegroundColor Red
        exit 1
    }
}
